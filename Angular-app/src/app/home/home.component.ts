import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  visits: any;
  Refresh = Observable.interval(5000); // set refresh rate
  subscription: any;
  stopped: Boolean = true;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getVisits();
    this.subscription = this.Refresh.subscribe(x => this.getVisits()); // auto updates
  }

  getVisits() {
    const visitsObservable = this._httpService.shareVisits();
    visitsObservable.subscribe(data => {
      this.visits = data['data'];
      console.log('this is the data: ', this.visits);
    });
  }

  stop() {
    console.log('subscription stopped');
    this.subscription.unsubscribe();
    this.stopped = false;
  }

  resume() {
    console.log('subscription continued');
    this.subscription = this.Refresh.subscribe(x => this.getVisits());
    this.stopped = true;
  }

}
