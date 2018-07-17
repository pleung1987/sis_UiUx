import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { BehaviorSubject } from 'Rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }
  result: any;
  value = 0;
  coins = 0;
  alltransactions = [];

// fetch all
  shareVisits() {
    return this._http.get('/visits');
  }
  shareCameras() {
    return this._http.get('/cameras');
  }
  shareUsers() {
    return this._http.get('/users');
  }
  shareShops() {
    return this._http.get('/shops');
  }

// users
  getUser(userId) {
    console.log('request from user-detail component:', userId);
    return this._http.get('/users/' + userId);
  }
  editUser(editUser) {
    console.log('request to server: ', editUser);
    return this._http.patch('/users/' + editUser._id, editUser);
  }
  editStatus(editStatus) {
    console.log('request to server: ', editStatus);
    return this._http.put('/users/' + editStatus._id, editStatus);
  }
  deleteUser(userId) {
    console.log('request to delete user with id from service: ', userId);
    return this._http.delete('/users/' + userId);
  }

// cameras
  getCamera(cameraId) {
    console.log('request from camera-detail component:', cameraId);
    return this._http.get('/cameras/' + cameraId);
  }
  editCamera(editCamera) {
    console.log('request to server: ', editCamera);
    return this._http.patch('/cameras/' + editCamera._id, editCamera);
  }
  setCamera(setCamera) {
    console.log('request to server: ', setCamera);
    return this._http.put('/cameras/' + setCamera._id, setCamera);
  }
  removeCameraAssociation(camera) {
    console.log('request to server: ', camera);
    return this._http.put('/shops/' + camera._shop, camera);
  }

// shops
  getShop(shopId) {
    console.log('request from camera-detail component:', shopId);
    return this._http.get('/shops/' + shopId);
  }
  editShop(editShop) {
    console.log('request to server: ', editShop);
    return this._http.patch('/shops/' + editShop._id, editShop);
  }
  addShop(newShop) {
    return this._http.post('/shops', newShop);
  }
  deleteShop(shopId) {
    return this._http.delete('/shops/' + shopId);
  }
}
