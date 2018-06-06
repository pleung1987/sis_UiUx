import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.scss']
})
export class CamerasComponent implements OnInit {
cameras: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.getCameras();
  }

  getCameras(): void {
    const cameraObservable = this._httpService.shareCameras();
    cameraObservable.subscribe(data => {
      this.cameras = data;
      console.log('this is the camera datas: ', this.cameras);

    });
  }

}
