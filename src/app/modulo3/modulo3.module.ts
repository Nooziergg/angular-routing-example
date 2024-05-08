import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Modulo3RoutingModule } from './modulo3-routing.module';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';


@NgModule({
  declarations: [
    Child1Component,
    Child2Component
  ],
  imports: [
    CommonModule,
    Modulo3RoutingModule
  ]
})
export class Modulo3Module { }
