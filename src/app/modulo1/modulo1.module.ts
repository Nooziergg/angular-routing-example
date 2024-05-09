// Modulo1Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Modulo1RoutingModule } from './modulo1-routing.module';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { SharedModule } from '../shared/shared.module';
import { FatherComponent } from './father/father.component';


@NgModule({
  declarations: [
    Child1Component,
    Child2Component,
    FatherComponent
  ],
  imports: [
    CommonModule,
    Modulo1RoutingModule,
    SharedModule
  ]
})
export class Modulo1Module { }
