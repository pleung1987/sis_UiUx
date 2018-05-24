import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.css']
})
export class SetComponent implements OnInit {
  numbers: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getNumbers();
  }

  getNumbers() {
    this.numbers = this._httpService.shareVisits();
  }

}
