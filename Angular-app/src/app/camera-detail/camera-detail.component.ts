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

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getCamera();
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

  editShow(camera) {
    console.log('this is the camera to edit/add: ', camera);
    camera.showEditForm = true;
  }
  edit(camera) {
    console.log('this is the camera info to add/edit: ', camera);
    const observable = this. _httpService.editCamera(camera);
    camera.showEditForm = false;
    observable.subscribe(data => {
      console.log('Got data from editCamera Service: ', data);
    });
  }
}
