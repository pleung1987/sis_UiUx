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
  newStatus: any;
  choice: number;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.getUsers();
    this.newStatus = {
      vip: false,
      blacklist: false,
      normal: false
    };
  }

  getUsers() {
    const usersObservable = this._httpService.shareUsers();
    usersObservable.subscribe(data => {
      this.users = data['users'];
      console.log('users from http: ', this.users);
    });
  }

  setStatus(user) {
    console.log(`detail submited for user ${user._id}: `, this.choice);
  }

}
