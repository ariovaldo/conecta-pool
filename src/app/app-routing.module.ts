import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JogadorRoutes} from './jogadores';

export const routes:Routes = [
    { path:'', redirectTo: '/jogadores/listar',pathMatch : 'full' },
    ...JogadorRoutes
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{
    
}