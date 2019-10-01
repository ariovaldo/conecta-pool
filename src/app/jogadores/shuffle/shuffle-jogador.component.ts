import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {JogadorService, Jogador} from '../shared';

@Component({
  selector: 'app-shuffle-jogador',
  templateUrl: './shuffle-jogador.component.html',
  styleUrls: ['./shuffle-jogador.component.css']
})
export class ShuffleJogadorComponent implements OnInit {

  jogadores:Jogador[];

  constructor(private jogadorService:JogadorService, private router:Router) { }

  ngOnInit() {
    this.jogadores = this.listarTodosShuffle();
  }

  listarTodosShuffle():Jogador[]{
    return this.jogadorService.listarTodosShuffle();
  }

  voltar():void{
    if(confirm('Tem certeza que deseja cancelar o jogo?')){
      this.router.navigate(["/jogadores/listar"]);
    }
  }

 
}
