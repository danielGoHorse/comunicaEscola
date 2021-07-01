/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Aluno } from 'src/app/interfaces/aluno';
import { Endereco } from 'src/app/interfaces/endereco';
import { Turma } from 'src/app/interfaces/turma';
import { AlunoService } from 'src/app/services/aluno.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cadastro-alunos',
  templateUrl: './cadastro-alunos.page.html',
  styleUrls: ['./cadastro-alunos.page.scss'],
})
export class CadastroAlunosPage implements OnInit {

  private aluno: Aluno = {};
  private endereco: Endereco = {};
  private turma: Turma = {};
  private loading: any;
  private alunoId: string = null;
  private alunoSubscription: Subscription;

  constructor(public router: Router,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private activeRoute: ActivatedRoute,
    private alunosService: AlunoService,
    private navCtrl: NavController) {
    this.alunoId = this.activeRoute.snapshot.params['id'];

    if (this.alunoId) {
      this.loadAluno();
    }
  }

  ngOnInit() {
  }

  loadAluno() {
    this.alunoSubscription = this.alunosService.getAluno(this.alunoId).subscribe(data => {
      this.aluno = data;
    });


  }

  async saveAluno() {
    await this.presentLoading();
    this.aluno.userId = (await this.authService.getAuth().currentUser).uid;

    if (this.alunoId) {

    } else {
      this.aluno.cerateAdt = new Date().getTime();
      this.loading.dismiss();
    }

    try {
      await this.alunosService.addAlunos(this.aluno);
      await this.loading.dismiss();

      this.navCtrl.navigateBack('/lista-alunos');
    } catch {
      this.presentToast('Erro ao tentar criar Aluno');
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

}
