import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/search', title: 'Search',  icon:'manage_search', class: '' },
    { path: '/add-found-item', title: 'Add Found Item',  icon:'add_circle_outline', class: '' },
    { path: '/inquiry', title: 'Inquiry',  icon:'edit_note', class: '' },
    { path: '/pending', title: 'Pending',  icon:'pending', class: '' },
    { path: '/delivery', title: 'Delivery',  icon:'local_shipping', class: '' },
    { path: '/profit-analysis', title: 'Profit Analysis',  icon:'request_quote', class: '' },
    { path: '/catagory', title: 'Catagories',  icon:'table_rows', class: '' },
    { path: '/settings', title: 'Settings',  icon:'settings', class: '' },
    { path: '/support', title: 'Support',  icon:'support_agent', class: '' },
    { path: '/upgrade', title: 'Pixellopia Technology Plc',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
