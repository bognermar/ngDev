import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { SnackbarService } from '../snackbar/snackbar.service';
import { MenuService } from '../menu/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private router: Router,
    private ms: MenuService,
    private sns: SnackbarService
  ) {}

  editorDisplayed: boolean;
  rootRoutes: Route[];
  menuItems = this.ms.getTopItems();

  ngOnInit() {
    this.editorDisplayed = false;
  }

  toggleMenu() {
    this.ms.toggleMenu();
  }

  toggleApps() {
    this.sns.displayAlert('Apps', 'Not implemented! - just for demo');
  }

  showUpload() {
    this.router.navigate(['', { outlets: { sidebarOutlet: 'upload' } }]);
  }
}
