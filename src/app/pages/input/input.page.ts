import { Component, OnInit } from '@angular/core';

interface User {
  text?: string,
  number?: number,
  password?: string,
  email?: string,
  telephone?: number,
}

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  user: User = {
    text: '',
    number: 0,
    password: '',
    email: '',
    telephone: 0,
  }

  users: User[] = [];

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.users.push(this.user);
    this.user = {};
    console.log(this.users);
  }
}
