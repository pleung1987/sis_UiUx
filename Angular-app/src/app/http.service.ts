import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { BehaviorSubject } from 'Rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }
  userObserver = new BehaviorSubject([]);
  result: any;
  value = 0;
  coins = 0;
  alltransactions = [];

  shareVisits() {
    return this._http.get('/visits');
  }

  shareCameras() {
    return this._http.get('/cameras');
  }

  shareUsers() {
    return this._http.get('/users');
  }
  getUser(userId) {
    console.log('request from user-detail component:', userId);
    return this._http.get('/users/' + userId);
  }

  editUser(editUser) {
    console.log('request to server: ', editUser);
    return this._http.patch('/users/' + editUser._id, editUser);
  }

// old code to get rid of:
  showTransactions() {
    console.log('pulling all transactions: ', this.alltransactions);
    return this.alltransactions;
  }

  mine() {
      this.value++;
      console.log('value in service added: ', this.value);
      this.alltransactions.push({transId: Math.floor(Math.random() * 10000), action: 'Mined', amount: 1, value: this.value });
  }

  buy(num) {
    console.log('number of coins added: ', num);
    this.coins += num;
    this.value -= num;
    this.alltransactions.push({transId: Math.floor(Math.random() * 10000), action: 'Bought', amount: num, value: this.value });
  }

  sell(num) {
    console.log('number of coins deducted: ', num);
    this.coins -= num;
    this.value += num;
    this.alltransactions.push({transId: Math.floor(Math.random() * 10000), action: 'Sold', amount: num, value: this.value });
  }
}
