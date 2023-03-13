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
      name: 'Home',
      redirectTo: '/home',
      color: 'primary',
    },
    {
      icon: 'logo-ionic',
      name: 'Avatar',
      redirectTo: '/avatar',
    },
    {
      icon: 'logo-ionic',
      name: 'Button',
      redirectTo: '/button',
      color: 'primary',
    },
    {
      icon: 'logo-ionic',
      name: 'Card',
      redirectTo: '/card',
    },
    {
      icon: 'logo-ionic',
      name: 'Check',
      redirectTo: '/check',
      color: 'primary',
    },
    {
      icon: 'logo-ionic',
      name: 'Date Time',
      redirectTo: '/date-time',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
