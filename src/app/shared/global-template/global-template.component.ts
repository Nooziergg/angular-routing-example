import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Output() onAddNew = new EventEmitter<{data: any}>(); // Evento que será emitido quando o botão de adicionar novo for clicado


  mostraDetalhes: boolean = false;
  dataValue: string = '';

  mostrarDetalhes() {
    this.mostraDetalhes = !this.mostraDetalhes;
  }
  adicionarNovo() {
   //Este método será sobrescrito em um componente filho
   this.onAddNew.emit({ data: this.dataValue });
  }

  public limpar() {
    this.dataValue = '';
  }


}


//O que é @Input no Angular?
//O @Input é um decorador que é usado para passar dados de um componente pai para um componente filho no Angular.
//Ele permite que os componentes se comuniquem entre si e compartilhem dados.
//Os dados passados por meio de @Input são tipicamente propriedades do componente filho.
//Os dados são passados como atributos no HTML do componente pai.
