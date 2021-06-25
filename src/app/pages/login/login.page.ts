import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  public wavesPosition: number = 0;
  private wavesDifference: number = 100;
  // public userLogin: User = {};
  // public userRegister: User = {};
  private loading: any;

  constructor(public router: Router,

    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    ) { }

  ngOnInit() {
  }

  segmentChanged(event: any) {
    if (event.detail.value === 'login') {
      this.slides.slidePrev();
      this.wavesPosition += this.wavesDifference;
    } else {
      this.slides.slideNext();
      this.wavesPosition -= this.wavesDifference;
    }
  }

  newCadastro(){
    this.router.navigate(["/cadastro-acesso"])
  }

  logar(){
    this.router.navigate(["/home"])
  }

}
