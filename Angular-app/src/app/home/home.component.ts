import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  visits: any;
  filteredVisits: any;
  shops: any;
  Refresh = Observable.interval(2000); // set refresh rate
  subscription: any;
  stopped: Boolean = true;

  private _shopChosen: string;
  get shopChosen(): string {
    return this._shopChosen;
  }
  set shopChosen(value: string) {
    this._shopChosen = value;
    this.filteredVisits = this.filterVisits(value);
  }

  filterVisits(searchString: string): void {
    console.log('this is the searchString: ', searchString);
    return this.visits.filter( visit =>
      visit._camera._shop.branch.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.getVisits();
    this.getShops();
    this.resume();
  }
  ngOnDestroy(): void {
    this.stop();
    console.log('this is the chosen: ', this.shopChosen);
  }

  getVisits(): void {
    const visitsObservable = this._httpService.shareVisits();
    visitsObservable.subscribe(data => {
      this.visits = data['data'];
      this.filteredVisits = this.visits;
      this.filteredVisits = this.filterVisits(this.shopChosen);
      console.log('this is the visit data: ', this.visits);
      console.log('this is the filterVisit data: ', this.filteredVisits);
    });
  }

  getShops(): void {
    const shopObservable = this._httpService.shareShops();
    shopObservable.subscribe(data => {
      this.shops = data;
      this.shops.splice(0, 0, '');
      console.log('this is the shop data: ', this.shops);
    });
  }

  stop(): void {
    console.log('subscription stopped');
    this.subscription.unsubscribe();
    this.stopped = false;
  }

  resume(): void {
    console.log('subscription resumed');
    this.subscription = this.Refresh.subscribe(x => this.getVisits());
    this.stopped = true;
  }

}
