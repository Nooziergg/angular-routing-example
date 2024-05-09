import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service'; // Importa o serviço de API

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
})
export class Child1Component implements OnInit {
  titulo = 'Módulo Filho 01';
  detalhes: { chave: string; valor: string }[] = []; // Ajuste de acordo com a estrutura de dados
  Chave = 'Id'; // Ajuste de acordo com a estrutura de dados
  Valor = 'Nome'; // Ajuste de acordo com a estrutura de dados

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.carregarDetalhes();
  }

  //on destroy é um método de ciclo de vida de um componente Angular que é chamado quando o componente é destruído.
  ngOnDestroy(): void {
    //Uma vez que o componente é destruído, ele não pode ser reutilizado.

    // Coloque aqui a lógica que você deseja executar antes do componente ser destruído.

    //Limpar os recursos que o componente está usando
    this.detalhes = [];
  }

  carregarDetalhes() {
    this.apiService
      .get('users') // O endpoint deve corresponder à sua API
      .subscribe({
        next: (data) => {
          this.detalhes = this.transformarDetalhes(data);
        },
        error: (error) => {
          alert('Erro ao carregar detalhes: \n' + error.message);
        },
        complete: () => console.log('Detalhes carregados com sucesso'),
      });
  }

  //função que transforma a resposta da API em um array de objetos do tipo item.chave e item.valor
  transformarDetalhes(dados: any[]): any[] {
    return dados.map((item) => {
      //map() é um método que cria um novo array com os resultados da chamada de uma função para cada elemento do array original
      return {
        chave: item.id, // Ajuste de acordo com a estrutura de dados
        valor: item.username, // Ajuste de acordo com a estrutura de dados
      };
    });
  }
}

//O que é ngOnInit no Angular?
//ngOnInit é um método de ciclo de vida de um componente Angular que é chamado após o componente ser inicializado.
//Ele é usado para realizar tarefas de inicialização, como buscar dados de um serviço, configurar propriedades iniciais, etc.
//O método ngOnInit é chamado automaticamente pelo Angular após a criação do componente.
//É uma prática comum colocar a lógica de inicialização em ngOnInit.
