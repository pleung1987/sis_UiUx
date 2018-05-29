import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  visits: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getVisits();
  }

  getVisits() {
    const visitsObservable = this._httpService.shareVisits();
    visitsObservable.subscribe(data => {
      this.visits = data['data'];
      console.log('this is the data: ', this.visits);
    });
    // this._route.params.subscribe((params: Params) => console.log(params['id']));
  }
}
