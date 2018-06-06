import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  newShop: any;
  messages: string;
  shops: any;
  message: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getShops();
    this.newShop = {
      brand: '',
      branch: '',
      address: ''
    };
  }

  getShops() {
    const shopObservable = this._httpService.shareShops();
    shopObservable.subscribe( data => {
      this.shops = data;
      console.log('this is the shop datas: ', this.shops);
    });
  }

  create() {
    console.log('this is the shop created: ', this.newShop);
    const observable = this._httpService.addShop(this.newShop);
    observable.subscribe( data => {
      console.log('data back from newShop Post Req: ', data);
      this.newShop = {
        brand: '',
        branch: '',
        address: ''
      };
      this.messages = data['Fail'];
      this.message = data['message'];
      this.getShops();
    });
  }

  delete(shopID) {
    console.log('this is the shop to delete: ', shopID);
    const observable = this._httpService.deleteShop(shopID);
    observable.subscribe ( data => {
      console.log('data back from Delete Shop Req: ', data);
      this.getShops();
    });
  }
}
