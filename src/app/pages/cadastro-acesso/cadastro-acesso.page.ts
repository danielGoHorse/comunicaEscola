import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-acesso',
  templateUrl: './cadastro-acesso.page.html',
  styleUrls: ['./cadastro-acesso.page.scss'],
})
export class CadastroAcessoPage implements OnInit {

  constructor(public router: Router,) { }

  ngOnInit() {
  }

  cancelar(){
    this.router.navigate(["/login"])
  }

}
