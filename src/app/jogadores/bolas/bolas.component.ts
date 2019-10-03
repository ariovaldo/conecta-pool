import { Component, OnInit, Input } from '@angular/core';

import {Jogador, Bola, JogadorService} from '../shared';

@Component({
  selector: 'app-bolas',
  templateUrl: './bolas.component.html',
  styleUrls: ['./bolas.component.css']
})
export class BolasComponent implements OnInit {

  bolas:Bola[];
  @Input() jogador:Jogador;

  constructor(private jogadorService:JogadorService) { }

  ngOnInit() {
    this.bolas = this.jogadorService.listarBolas()
  }


  jogar(jogador:Jogador, valor: number):void{
    this.jogadorService.pontuar(jogador, valor);
    this.bolas = this.jogadorService.listarBolas()
  }
}
