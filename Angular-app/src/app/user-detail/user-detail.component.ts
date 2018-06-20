import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';



@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  public userId;
  user: any;
  images: any;
  success: any;
  fail: any;
  interval: any;
  newStatus: number;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getVisit();
    this.newStatus = 0;
    this.images = [];
  }

  getVisit() {
    const id = this._route.snapshot.params['id'];
    this.userId = id;
    const observable = this._httpService.getUser(id);
    observable.subscribe( data => {
      console.log('this is the data from service: ', data['users']);
      this.user = data['users'];
      for (let i = 0; i < data['users'].faceImage.length; i++) {
        const imagePath: string = data['users'].faceImage[i];
        const imageDate: any = data['users']._visits[i];
        this.images.push({path: imagePath, date: imageDate});
      }
      console.log('this are the images:', this.images);
    });
  }

  editShow(user) {
    console.log('this is the user to edit: ', user);
    user.showEditForm = true;
    user.showStatusForm = false;
  }
  cancelShow(user) {
    console.log('this is the user to edit: ', user);
    user.showEditForm = false;
  }

  edit(user) {
    console.log('editing user submitting: ', user);
    const observable = this. _httpService.editUser(user);
    user.showEditForm = false;
    observable.subscribe(data => {
      console.log('Got data from editUser Service: ', data);
      this.success = data['Success'];
      this.fail = data['Fail'];
    });
  }
  statusShow(user) {
    console.log('this is the status to edit: ', user);
    user.showStatusForm = true;
    user.showEditForm = false;
  }

  status(user) {
    console.log(`status of ${user._id} submitting:`, this.newStatus );
    if (this.newStatus === 1) {
      user.vip = true;
      user.blacklist = false;
      const observable = this._httpService.editStatus(user);
      observable.subscribe( data => {
        console.log('Got data from editStatus service: ', data['user']);
      });
    }
    if (this.newStatus === 2) {
      user.vip = false;
      user.blacklist = true;
      const observable = this._httpService.editStatus(user);
      observable.subscribe( data => {
        console.log('Got data from editStatus service: ',  data['user']);
      });
    }
    if (this.newStatus === 3) {
      user.vip = false;
      user.blacklist = false;
      const observable = this._httpService.editStatus(user);
      observable.subscribe( data => {
        console.log('Got data from editStatus service: ',  data['user']);
      });
    }
  }

  cancelStatus(user) {
    console.log('this is the status to edit: ', user);
    user.showStatusForm = false;
  }

  // front-end scripts
}
