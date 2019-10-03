import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';

import { JogadorService, Jogador, Bola} from '../shared';

@Component({
  selector: 'app-jogar-jogadores',
  templateUrl: './jogar-jogadores.component.html',
  styleUrls: ['./jogar-jogadores.component.css']
})
export class JogarJogadoresComponent implements OnInit {

  jogador:Jogador;
  id:number;
  qtdeJogadores:number;

  //referencia do formulario
  @ViewChild("formJogador", { static: true }) formJogador: NgForm;

  constructor(
    private jogadorService:JogadorService,
    private router:Router,
    private route:ActivatedRoute
  ) { 
    route.params.subscribe(val=>{
      this.id = +this.route.snapshot.params['id'];
      this.jogador = this.jogadorService.buscarPorIdShuffle(this.id);
    });    
  }

  ngOnInit() {
    // this.id = +this.route.snapshot.params['id'];
    // this.jogador = this.jogadorService.buscarPorIdShuffle(this.id);
  }

  zerar(jogador:Jogador){
    if(confirm('Zerar os pontos do fera? '+ jogador.nome)){
      this.jogadorService.zerar(jogador);
      this.jogador = this.jogadorService.buscarPorIdShuffle(jogador.id);
    }
  }

  proximoJogador(){
    this.qtdeJogadores = ( this.qtdeJogadores) ?  this.qtdeJogadores : this.jogadorService.qtdeJogadores();
    this.router.navigate(['/jogadores/jogar', (this.id % this.qtdeJogadores) + 1 ]);
  }

}
