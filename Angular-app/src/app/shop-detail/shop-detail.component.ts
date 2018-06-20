import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.scss']
})
export class ShopDetailComponent implements OnInit {
  public shopId;
  shop: any;
  showEdit: Boolean;
  message: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getShop();
    this.showEdit = false;
  }

  getShop() {
    const id = this._route.snapshot.params['id'];
    this.shopId = id;
    const observable = this._httpService.getShop(this.shopId);
    observable.subscribe( data => {
      console.log('this is the data from service: ', data);
      this.shop = data;
    });
  }

  editShow(shop) {
    console.log('Edit pressed');
    this.showEdit = true;
  }

  cancelShow(shop) {
    console.log('Cancel pressed');
    this.showEdit = false;
  }

  edit(shop) {
    console.log('shop to edit: ', shop);
    const observable = this._httpService.editShop(shop);
    this.showEdit = false;
    observable.subscribe( data => {
      console.log('Got data from editShop Service: ', data);
      this.message = data['message'];
      this.getShop();
    });
  }
}
