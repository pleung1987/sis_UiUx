import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-camera-detail',
  templateUrl: './camera-detail.component.html',
  styleUrls: ['./camera-detail.component.scss']
})
export class CameraDetailComponent implements OnInit {
  public cameraId;
  camera: any;
  shops: any;
  showAssociation: Boolean;
  message: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getCamera();
    this.getShops();
    this.showAssociation = false;
  }

  getCamera() {
    const id = this._route.snapshot.params['id'];
    console.log('this is the id page: ', this.cameraId);
    this.cameraId = id;
    const observable = this._httpService.getCamera(id);
    observable.subscribe( data => {
      console.log('this is the data from service: ', data);
      this.camera = data;
    });
  }

  getShops() {
    const shopObservables = this._httpService.shareShops();
    shopObservables.subscribe( data => {
      console.log('this is the data from shareShops: ', data );
      this.shops = data;
    });
  }

  editShow(camera) {
    console.log('this is the camera to edit/add: ', camera);
    camera.showEditForm = true;
    this.showAssociation = false;
  }
  cancelShow(camera) {
    camera.showEditForm = false;
    this.showAssociation = false;
  }

  associationShow(camera) {
    this.showAssociation = true;
    camera.showEditForm = false;
  }
  cancelShowAssociation(camera) {
    this.showAssociation = false;
    camera.showEditForm = false;
  }

  edit(camera) {
    console.log('this is the camera info to add/edit: ', camera);
    const observable = this. _httpService.editCamera(camera);
    camera.showEditForm = false;
    observable.subscribe(data => {
      console.log('Got data from editCamera Service: ', data);
    });
  }

  association(camera) {
    const id = this._route.snapshot.params['id'];
    console.log('this is the id page: ', this.cameraId);
    console.log('this is the shop id passing to service: ', camera._shop);
    const cameraObservable = this._httpService.setCamera(camera);
    cameraObservable.subscribe( data => {
      console.log('data coming from setting Camera: ', data);
      this.message = data['message'];
    });
  }

  removeAllocation(camera) {

  }
}
