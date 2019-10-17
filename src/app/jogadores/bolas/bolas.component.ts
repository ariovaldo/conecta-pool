import { Component, OnInit, Input } from '@angular/core';

import {Jogador, Bola, JogadorService} from '../shared';


@Component({
  selector: 'app-bolas',
  templateUrl: './bolas.component.html',
  styleUrls: ['./bolas.component.css']
})
export class BolasComponent implements OnInit {

  bolas:Bola[];
  badPlay:boolean;
  Jogadas:Bola[];
  desfazer:boolean;
 
  @Input() jogador:Jogador;

  constructor(private jogadorService:JogadorService) { }

  ngOnInit() {
    this.bolas = this.jogadorService.listarBolas()
    //this.Jogadas = this.jogadorService.listarJogadas(this.jogador);
    this.badPlay = false;
    this.desfazer = false;
  }

  jogar(jogador:Jogador, valor: number, badPlay:boolean):void{
    this.jogadorService.pontuar(jogador, valor, badPlay);
    this.bolas = this.jogadorService.listarBolas();
    //this.Jogadas = this.jogadorService.listarJogadas(this.jogador);
  }

  desfazerJogada(jogador:Jogador, valor: number, badPlay:boolean):void{
    this.jogadorService.desfazerPontuar(jogador, valor, badPlay);
    this.bolas = this.jogadorService.listarBolas();
    //this.Jogadas = this.jogadorService.listarJogadas(this.jogador);
  }


  alterarTipoJogada():boolean{
    this.badPlay  =!this.badPlay;
    return this.badPlay;
  }

  alterarDesfazerModo():boolean{
    this.desfazer =! this.desfazer;
    return this.desfazer;
  }
}
