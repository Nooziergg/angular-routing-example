import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalTemplateComponent } from './global-template/global-template.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GlobalTemplateComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [GlobalTemplateComponent,
    FormsModule,
    CommonModule
  ]  // Exporta os componentes para serem utilizados em outros módulos
})
export class SharedModule { }
