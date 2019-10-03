import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {JogadorService, JogadorInativoDirective} from './shared';
import { ListarJogadorComponent } from './listar';
import { CadastrarJogadorComponent } from './cadastrar';
import { EditarJogadorComponent } from './editar';
import { ShuffleJogadorComponent } from './shuffle';
import { JogarJogadoresComponent } from './jogar';
import { BolasComponent } from './bolas';


@NgModule({
  declarations: [
    ListarJogadorComponent, 
    CadastrarJogadorComponent, 
    EditarJogadorComponent, 
    JogadorInativoDirective,
    ShuffleJogadorComponent,
    JogarJogadoresComponent,
    BolasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers:[
    JogadorService
  ]
})
export class JogadoresModule { }
