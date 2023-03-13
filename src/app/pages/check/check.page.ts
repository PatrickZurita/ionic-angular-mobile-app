import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {
  items = [
    {
      name: 'Item one',
      color: 'primary',
      selected: false,
    },
    {
      name: 'Item two',
      color: 'secondary',
      selected: true,
    },
    {
      name: 'Item three',
      color: 'primary',
      selected: false,
    },
    {
      name: 'Item four',
      color: 'secondary',
      selected: true,
    },
  ];
  constructor() {}

  ngOnInit() {}

  onClick(item: any) {
    console.log(item);
  }

  consoleData() {
    console.log(this.items);
  }
}
