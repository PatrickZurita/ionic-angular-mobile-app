import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  users!: Observable<any>;

  @ViewChild(IonList) ionList!: IonList;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.users = this.dataService.getUsers();

  }

  archive(user: any) {
    console.log(`${user.name} archive`);
    this.ionList.closeSlidingItems();
  }
  like(user: any) {
    console.log(`${user.name} like`);
    this.ionList.closeSlidingItems();
  }

  delete(user: any) {
    console.log(`${user.name} delete`);
    this.ionList.closeSlidingItems();
  }
}
