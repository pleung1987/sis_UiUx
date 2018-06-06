import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-inquire',
  templateUrl: './setCamera.component.html',
  styleUrls: ['./setCamera.component.scss']
})
export class SetCameraComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {

  }

}
