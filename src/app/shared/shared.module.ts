import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalTemplateComponent } from './global-template/global-template.component';

@NgModule({
  declarations: [GlobalTemplateComponent],
  imports: [
    CommonModule
  ],
  exports: [GlobalTemplateComponent]  // Exporta os componentes para serem utilizados em outros módulos
})
export class SharedModule { }
