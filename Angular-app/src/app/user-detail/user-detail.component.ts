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
  success: any;
  fail: any;
  interval: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getVisit();
  }

  getVisit() {
    const id = this._route.snapshot.params['id'];
    console.log('this is the id page: ', this.userId);
    this.userId = id;
    const observable = this._httpService.getUser(id);
    observable.subscribe( data => {
      console.log('this is the data from service: ', data['users']);
      this.user = data['users'];
    });
  }

  editShow(user) {
    console.log('this is the user to edit: ', user);
    user.showEditForm = true;
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
}
