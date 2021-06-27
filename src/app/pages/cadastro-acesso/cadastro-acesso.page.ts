/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cadastro-acesso',
  templateUrl: './cadastro-acesso.page.html',
  styleUrls: ['./cadastro-acesso.page.scss'],
})
export class CadastroAcessoPage implements OnInit {

  public userLogin: User = {};
    public userRegister: User = {};
    private loading: any;

  constructor(public router: Router,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,) { }


  ngOnInit() {
  }

  async register() {
    this.presentLoading();
    try {
      await this.authService.register(this.userRegister);
    } catch (error) {

      // let message: string;
      // switch (error.code) {
      //   case 'auth/email-already-in-use':
      //     message = 'E-mail em uso';
      //     break;

      //   case 'auth/invalid-email':
      //     message = 'E-mail invalido';
      //     break;

      // }


      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }

  cancelar(){
    this.router.navigate(["/home"]);
  }

}
