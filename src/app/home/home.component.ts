import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  exibirTexto: string = '';
  vezesClicado: number = 0;

  modificarTexto() {
    // Lógica para modificar o valor da variável exibirTexto conforme o número de vezes que o botão foi clicado
    this.vezesClicado++;
    this.exibirTexto = 'O botão foi clicado ' + this.vezesClicado + ' vez(es)';
  }
}
