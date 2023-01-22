import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username:any = "";
  password:any = "";
  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    this.password = localStorage.getItem('password');
  }
}
