import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
  characters: string[] = [
    'Aquaman',
    'Superman',
    'Batman',
    'Mujer Maravilla',
    'Flash',
  ];
  reorderDisabled: boolean = true;

  constructor() {}

  ngOnInit() {}

  doReorder(event: any) {
    console.log(event);

    const itemMover = this.characters.splice(event.detail.from, 1)[0];
    this.characters.splice(event.detail.to, 0, itemMover);

    event.detail.complete();

    console.log(this.characters);
  }
}
