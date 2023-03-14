import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
})
export class FabPage implements OnInit {
  data: any[] = Array(20);

  constructor() { }

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
    const count = this.data.length + 1;
    for (let i = 0; i < 50; i++) {
      this.data.push(`Item ${count + i}`);
    }
  }

  onIonInfinite(ev: any) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
}
