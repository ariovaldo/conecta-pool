import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';

import { JogadorService, Jogador } from '../shared';

@Component({
  selector: 'app-jogar-jogadores',
  templateUrl: './jogar-jogadores.component.html',
  styleUrls: ['./jogar-jogadores.component.css']
})
export class JogarJogadoresComponent implements OnInit {

  jogador:Jogador;

  //referencia do formulario
  @ViewChild("formJogador", { static: true }) formJogador: NgForm;

  constructor(
    private jogadorService:JogadorService, 
    private router:Router, 
    private route:ActivatedRoute 
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.jogador = this.jogadorService.buscarPorIdShuffle(id);
  }

  jogar(jogador:Jogador, valor: number):void{
    this.jogadorService.pontuar(jogador, valor);
  }

  zerar(jogador:Jogador){
    if(confirm('Zerar os pontos do fera? '+ jogador.nome)){
      this.jogadorService.zerar(jogador);
      this.jogador = this.jogadorService.buscarPorIdShuffle(jogador.id);
    }
  }

  proximoJogador(id:number){
    id = id + 1;
    this.router.navigate(['/jogadores/jogar', id]);
    window.location.reload();
  }

}
