import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-frequent',
  templateUrl: './frequent.component.html',
  styleUrls: ['./frequent.component.css']
})
export class FrequentComponent implements OnInit {

  numbers: any;
  coins: number;
  sellNum = 0;
  insufficient = false;
  message = '';

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getNumbers();
  }

  getNumbers() {
    this.numbers = this._httpService.shareVisits();
  }

  sell() {
    console.log('this is the buyNum submited: ', this.sellNum);
    if (this.sellNum < 0) {
      this.insufficient = true;
      this.message = 'sell cannot be negative';
    } else if ( this.sellNum <= this.coins ) {
      this._httpService.sell(this.sellNum);
      this.insufficient = false;
      this.getNumbers();
      this.sellNum = 0;
    } else {
      this.insufficient = true;
      this.message = 'insufficient coins...';
    }
  }

}
