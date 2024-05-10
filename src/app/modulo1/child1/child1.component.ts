import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Subscription, throwError } from 'rxjs';
import { debounceTime, filter, map, catchError, retry } from 'rxjs/operators';
import { GlobalTemplateComponent } from 'src/app/shared/global-template/global-template.component';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
})
export class Child1Component implements OnInit, OnDestroy {
  @ViewChild(GlobalTemplateComponent) globalTemplateComponent!: GlobalTemplateComponent; //ViewChild para acessar o componente filho GlobalTemplateComponent
  titulo = 'Módulo Filho 01';
  detalhes: { chave: string; valor: string }[] = [];
  Chave = 'Id';
  Valor = 'Nome';
  id: string = '';

  private subscriptions: Subscription = new Subscription(); //Subscrição para armazenar todas as subscrições, evitando vazamentos de memória

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    // Inscreva-se nos parâmetros da rota
    const paramsSubscription = this.route.params
      .pipe(
        debounceTime(300), // Adiciona um atraso para evitar chamadas excessivas à API
        filter((params) => params['id'].length >= 3), // Garante que o ID tenha um comprimento suficiente
        map((params) => params['id']) // Mapeia o observable para emitir apenas o ID
      )
      .subscribe((id) => {
        this.id = id;
        this.carregarDetalhes();
      });

    this.subscriptions.add(paramsSubscription);
  }

  ngOnDestroy(): void {
    // Cancela a inscrição de todas as subscrições para evitar vazamentos de memória
    this.subscriptions.unsubscribe();
  }

  /**
   * Carrega os detalhes do usuário.
   *
   * Este método faz uma chamada à API para obter os detalhes do usuário com base no ID fornecido.
   * Os detalhes são transformados em um formato específico antes de serem atribuídos à propriedade "detalhes".
   * Em caso de erro, uma mensagem de erro é exibida e uma exceção é lançada.
   *
   * @returns Uma assinatura de inscrição que pode ser usada para cancelar a inscrição posteriormente.
   */
  carregarDetalhes() {
    const detailsSubscription = this.apiService
      .get(`users/${this.id}`)
      .pipe(
        map((data) => {
          return data.map((user: { id: any; username: any }) => ({
            // Transforma os dados em um formato específico usando map
            chave: user.id,
            valor: user.username,
          }));
        }),
        catchError((error) => {
          console.error('Falha ao processar os detalhes do usuário', error);
          alert('Erro ao carregar detalhes do usuário');
          return throwError(() => new Error('Falha ao carregar detalhes do usuário'));
        })
      )
      .subscribe({
        next: (data) => {
          this.detalhes = data;
        },
        error: (error) => console.log('Erro ao carregar detalhes', error),
        complete: () => console.log('Detalhes carregados com sucesso'),
      });

    this.subscriptions.add(detailsSubscription);
  }

  adicionarConteudo(data: any) {
    if (!this.id) {
      alert('ID inválido');
      return;
    }
    this.apiService.post(`conteudo/${this.id}`, { conteudo: data }).subscribe({
      next: (response) => {
        console.log('Conteúdo adicionado com sucesso', response);
        this.globalTemplateComponent.limpar();
        alert('Conteúdo adicionado com sucesso');
      },
      error: (error) => {
        console.error('Falha ao adicionar conteúdo', error);
        //this.globalTemplateComponent.limpar();
        alert('Falha ao adicionar conteúdo');
      }
    });
  }
}

//O que é ngOnInit no Angular?
//ngOnInit é um método de ciclo de vida de um componente Angular que é chamado após o componente ser inicializado.
//Ele é usado para realizar tarefas de inicialização, como buscar dados de um serviço, configurar propriedades iniciais, etc.
//O método ngOnInit é chamado automaticamente pelo Angular após a criação do componente.
//É uma prática comum colocar a lógica de inicialização em ngOnInit.

//O que é subscribe no Angular?
//subscribe é um método usado para se inscrever a um Observable no Angular.
//Ele é usado para receber notificações de eventos emitidos pelo Observable.
//subscribe aceita três argumentos: uma função de retorno de chamada para os valores emitidos pelo Observable,
//uma função de retorno de chamada para os erros emitidos pelo Observable e uma função de retorno de chamada para a conclusão do Observable.
//subscribe é usado para consumir dados de um Observable e reagir a eles.

//O que é um observable no Angular?
//Um Observable no Angular é uma representação de uma sequência de eventos que podem ser assíncronos.
//Ele é usado para transmitir dados de forma assíncrona entre partes de um aplicativo Angular.
//Os Observables são usados para lidar com eventos assíncronos, como solicitações HTTP, eventos do usuário, etc.
//Eles são uma forma de programação reativa no Angular.

//Como funciona um observable no Angular?
//Um Observable no Angular funciona emitindo uma sequência de eventos ao longo do tempo.
//Ele pode emitir valores, erros ou completar eventos.
//Os Observables são consumidos por meio do método subscribe, que se inscreve para receber notificações dos eventos emitidos pelo Observable.
//Os Observables são usados para lidar com eventos assíncronos e reativos em um aplicativo Angular.

//O que é um evento assíncrono?
//Um evento assíncrono é um evento que ocorre em um momento indefinido no futuro.
//Ele não é bloqueante e não interrompe a execução do programa.
//Os eventos assíncronos são comuns em aplicativos da web, como solicitações HTTP, eventos do usuário, etc.
//Eles são tratados de forma assíncrona para garantir que o aplicativo continue funcionando sem interrupções.

//O que é um método de ciclo de vida no Angular?
//Um método de ciclo de vida no Angular é um método que é chamado automaticamente pelo Angular em diferentes estágios da vida de um componente.
//Ele é usado para realizar tarefas específicas em diferentes momentos, como inicialização, destruição, detecção de alterações, etc.
//Os métodos de ciclo de vida são usados para controlar o comportamento de um componente em diferentes momentos.

//O que é debounceTime no Angular?
//debounceTime é um operador de tempo usado em Observables no Angular.
//Ele é usado para adicionar um atraso entre eventos emitidos pelo Observable.
//debounceTime é útil para evitar chamadas excessivas a um serviço ou para lidar com eventos de entrada do usuário.
//Ele é usado para controlar a taxa de emissão de eventos de um Observable.

//O que é filter no Angular?
//filter é um operador usado em Observables no Angular.
//Ele é usado para filtrar os eventos emitidos pelo Observable com base em uma condição.
//filter é útil para filtrar eventos indesejados ou para lidar com eventos específicos de interesse.
//Ele é usado para controlar quais eventos são transmitidos por um Observable.

//Como funciona o filter no Angular?
//O operador filter no Angular funciona filtrando os eventos emitidos por um Observable com base em uma condição.
//Ele aceita uma função de retorno de chamada que é usada para avaliar cada evento emitido pelo Observable.
//Se a função de retorno de chamada retornar true, o evento é transmitido. Se retornar false, o evento é ignorado.
//O operador filter é usado para controlar quais eventos são transmitidos por um Observable com base em uma condição.

//O que é map no Angular?
//map é um operador usado em Observables no Angular.
//Ele é usado para transformar os eventos emitidos pelo Observable em outros valores.
//map aceita uma função de retorno de chamada que é usada para transformar cada evento emitido pelo Observable.
//map é útil para transformar os dados emitidos por um Observable em um formato diferente.
//Ele é usado para mapear os eventos de um Observable para outros valores.

//Como funciona o map no Angular?
//O operador map no Angular funciona transformando os eventos emitidos por um Observable em outros valores.
//Ele aceita uma função de retorno de chamada que é usada para transformar cada evento emitido pelo Observable.
//A função de retorno de chamada é chamada para cada evento emitido e o valor retornado é transmitido pelo Observable.
//O operador map é usado para transformar os dados emitidos por um Observable em um formato diferente.

//O que são operators no Angular?
//Os operators no Angular são funções que são usadas para manipular os eventos emitidos por um Observable.
//Eles são usados para transformar, filtrar, combinar e manipular os eventos de um Observable.
//Os operators são usados para adicionar funcionalidades aos Observables e para controlar como os eventos são transmitidos.
//Eles são uma forma de programação reativa no Angular.

//Como funcionam os operators no Angular?
//Os operators no Angular funcionam manipulando os eventos emitidos por um Observable.
//Eles aceitam um Observable como entrada e retornam um novo Observable com os eventos manipulados.
//Os operators são encadeados em uma sequência para adicionar funcionalidades aos Observables.
//Eles são usados para transformar, filtrar, combinar e manipular os eventos de um Observable de acordo com as necessidades do aplicativo.

//O que é e como funciona o método pipe no Angular?
//O método pipe no Angular é usado para encadear operadores em um Observable.
//Ele aceita uma lista de operadores como argumentos e os aplica sequencialmente ao Observable.
//Os operadores são usados para manipular os eventos emitidos pelo Observable.
//O método pipe é usado para adicionar funcionalidades aos Observables e controlar como os eventos são transmitidos.
