import { Component } from '@angular/core';
import { IComponent } from './interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from './services/data.service';

import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  components: Observable<IComponent[]> | undefined;

  constructor(private platform: Platform, private dataService: DataService) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.components = this.dataService.getMenuOpts();
    });
  }
}
