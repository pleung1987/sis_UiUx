import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-frequent',
  templateUrl: './frequent.component.html',
  styleUrls: ['./frequent.component.css']
})
export class FrequentComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  ngOnInit() {

  }

}
