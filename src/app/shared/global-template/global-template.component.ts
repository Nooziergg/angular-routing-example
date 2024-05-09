import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-global-template',
  templateUrl: './global-template.component.html',
  styleUrls: ['./global-template.component.css']
})
export class GlobalTemplateComponent {
  @Input() titulo: string = 'Título Padrão';
  @Input() detalhes: any[] = []; // Array de objetos, aonde não temos definição da estrutura do objeto
  @Input() Chave : string = 'Chave';
  @Input() Valor : string = 'Valor';

  mostraDetalhes: boolean = false;

  mostrarDetalhes() {
    this.mostraDetalhes = !this.mostraDetalhes;
  }
}


//O que é @Input no Angular?
//O @Input é um decorador que é usado para passar dados de um componente pai para um componente filho no Angular.
//Ele permite que os componentes se comuniquem entre si e compartilhem dados.
//Os dados passados por meio de @Input são tipicamente propriedades do componente filho.
//Os dados são passados como atributos no HTML do componente pai.
