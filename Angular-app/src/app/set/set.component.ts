import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss']
})
export class SetComponent implements OnInit {
  users: any;
  choice: number;
  visits: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    const usersObservable = this._httpService.shareUsers();
    usersObservable.subscribe(data => {
      this.users = data['users'];
      console.log('users from http: ', this.users);
    });
  }

  delete(user_id) {
    console.log('this is the user ID deleting: ', user_id);
    const usersObservable = this._httpService.deleteUser(user_id);
    usersObservable.subscribe (data => {
      console.log('got data from deleteUser service:', data);
      this.getUsers();
    });
  }

}
