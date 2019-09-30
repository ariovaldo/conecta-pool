import { Injectable } from '@angular/core';

import {Jogador} from './';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {

  constructor() { }

  listarTodos():Jogador[]{
    let jogadores = localStorage['jogadores'];
    return jogadores ? JSON.parse(jogadores):[];
  }

  cadastrar(jogador:Jogador):void{
    const jogadores = this.listarTodos();
    jogador.id = new Date().getTime();
    jogadores.push(jogador);
    localStorage['jogadores'] = JSON.stringify(jogadores);
  }

  buscarPorId(id:number):Jogador{
    const jogadores = this.listarTodos();
    return jogadores.find(jogador=> jogador.id === id);
  }

  atualizar(jogador:Jogador):void{
    const jogadores:Jogador[] = this.listarTodos();
    jogadores.forEach((obj, index, objs) =>{
      if(jogador.id===obj.id){
        objs[index] = jogador;
      }
    });
    localStorage['jogadores'] = JSON.stringify(jogadores); 
  }

  remover(id:number):void{
    let jogadores: Jogador[] = this.listarTodos();
    jogadores = jogadores.filter(jogador=>jogador.id != id);
    localStorage['jogadores'] = JSON.stringify(jogadores); 
  }

  alterarStatus(id:Number):void{
    const jogadores:Jogador[] = this.listarTodos();
    jogadores.forEach((obj, index, objs) =>{
      if(id===obj.id){
        objs[index].inativo = !obj.inativo;
      }
    });
    localStorage['jogadores'] = JSON.stringify(jogadores); 
  }


  //--------------------------------------------------------------------------------


  shuffle(){
    let jogadores: Jogador[] = this.listarTodos();
    jogadores = jogadores.filter(jogador=>jogador.inativo != true);
    jogadores = this.embaralhar(jogadores);
    localStorage['jogadoresShuffle'] = JSON.stringify(jogadores);
    // return jogadores ? jogadores:[];
  }

  embaralhar(jogadores:Jogador[]):Jogador[]{
    for(let i = jogadores.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * i)
      const temp = jogadores[i]
      jogadores[i] = jogadores[j]
      jogadores[j] = temp
    }
    
    for(let i = 0; i < jogadores.length; i++){
      let jogador = jogadores[i];
      jogador.id = i+1;
      jogador.pontos = 0;
      jogadores[i] = jogador;
    }
    return jogadores;
  }

  listarTodosShuffle():Jogador[]{
    let jogadores = localStorage['jogadoresShuffle'];
    return jogadores ? JSON.parse(jogadores):[];
  }

  buscarPorIdShuffle(id:number):Jogador{
    const jogadores = this.listarTodosShuffle();
    return jogadores.find(jogador=> jogador.id === id);
  }

  pontuar(jogador:Jogador, valor:number):void{
    let jogadores:Jogador[] = this.listarTodosShuffle();
    jogadores.forEach((obj, index, objs) =>{
      if(jogador.id===obj.id){
        jogador.pontos = jogador.pontos + valor;
        objs[index] = jogador;
      }
    });
    localStorage['jogadoresShuffle'] = JSON.stringify(jogadores); 
  }
}
