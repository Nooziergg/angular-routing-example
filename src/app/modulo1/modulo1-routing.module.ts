import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FatherComponent } from './father/father.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

const routes: Routes = [
  {
    path: '', // Caminho base para modulo1
    component: FatherComponent,
    children: [
      { path: 'child1/:id', component: Child1Component },
      { path: 'child2', component: Child2Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Modulo1RoutingModule { }

//O que é um módulo no Angular?
//Um módulo no Angular é uma coleção de componentes, diretivas, pipes e serviços relacionados que são agrupados em um único contexto.
//Os módulos são usados para organizar e modularizar o código de um aplicativo Angular.

//O que é um módulo de roteamento no Angular?
//Um módulo de roteamento no Angular é um módulo que contém as configurações de rota para um aplicativo Angular.
//Ele define as rotas disponíveis no aplicativo e como elas devem ser tratadas.

//O que é forChild no Angular?
//forChild é um método usado para configurar rotas em um módulo de roteamento secundário no Angular.
//Ele é usado para definir rotas filhas em um módulo de roteamento secundário.
//Ele não cria um novo módulo de roteamento, mas sim adiciona rotas ao módulo de roteamento existente.
