import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { Child1Component } from './child1/child1.component'; // Este é um novo componente, não o mesmo do Modulo1
    import { Child2Component } from './child2/child2.component'; // Novo componente

    const routes: Routes = [
      { path: 'child1', component: Child1Component },
      { path: 'child2', component: Child2Component }
    ];

    @NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    })
    
    export class Modulo2RoutingModule { }


