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
  Refresh = Observable.interval(2000); // set refresh rate
  subscription: any;
  stopped: Boolean = true;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.getVisits();
    this.resume();
    // this.subscription = this.Refresh.subscribe(x => this.getVisits()); // auto updates
  }
  ngOnDestroy(): void {
    this.stop();
  }

  getVisits(): void {
    const visitsObservable = this._httpService.shareVisits();
    visitsObservable.subscribe(data => {
      this.visits = data['data'];
      console.log('this is the data: ', this.visits);
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
