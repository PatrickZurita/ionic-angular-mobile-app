import { Component, OnInit } from '@angular/core';

interface IComponent {
  icon: string;
  name: string;
  redirectTo: string;
  color?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  components: IComponent[] = [
    {
      icon: 'logo-ionic',
      name: 'Action-sheet',
      redirectTo: '/accion-sheet',
      color: 'primary',
    },
    {
      icon: 'logo-ionic',
      name: 'Alert',
      redirectTo: '/alert',
    },
    {
      icon: 'logo-ionic',
      name: 'Avatar',
      redirectTo: '/avatar',
      color: 'primary',
    },
    {
      icon: 'logo-ionic',
      name: 'Button',
      redirectTo: '/button',
    },
    {
      icon: 'logo-ionic',
      name: 'Card',
      redirectTo: '/card',
      color: 'primary',
    },
    {
      icon: 'logo-ionic',
      name: 'Check',
      redirectTo: '/check',
    },
    {
      icon: 'logo-ionic',
      name: 'Date Time',
      redirectTo: '/date-time',
      color: 'primary',
    },
    {
      icon: 'logo-ionic',
      name: 'Store',
      redirectTo: '/product-list',
    },
    {
      icon: 'logo-ionic',
      name: 'Fab buttons',
      redirectTo: '/fab',
      color: 'primary',
    },
    {
      icon: 'logo-ionic',
      name: 'Grid',
      redirectTo: '/grid',
    },
    {
      icon: 'logo-ionic',
      name: 'Input forms',
      redirectTo: '/input',
      color: 'primary',
    },
    {
      icon: 'logo-ionic',
      name: 'List - Sliding',
      redirectTo: '/list',
    },
    {
      icon: 'logo-ionic',
      name: 'List - Reorder',
      redirectTo: '/list-reorder',
      color: 'primary',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
