import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menu: MenuController,
    private authService: AuthService,
    public router: Router) { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  rotas(param: any) {
    // let local = param;
    this.router.navigate([param]);
    this.menu.close();
  }

  async logout() {
    try {
      await this.authService.logout();
      this.menu.close();
    } catch (error) {
      console.error(error);
      this.menu.close();
    }
  }


}
