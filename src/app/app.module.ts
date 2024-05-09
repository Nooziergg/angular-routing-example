// AppModule
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiInterceptor } from './services/api.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ApiService } from './services/api.service';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule  // Devemos garantir que o módulo HttpClientModule esteja importado aqui e apenas uma vez
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    },
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

//O que são interceptadores no Angular?
//Os interceptadores no Angular são classes que podem interceptar e modificar as solicitações HTTP feitas por um aplicativo Angular.
//Eles são usados para adicionar cabeçalhos, manipular erros, fazer cache de solicitações e outras tarefas relacionadas a solicitações HTTP.
//Os interceptadores são injetáveis e podem ser injetados em outros serviços.
//Eles são uma forma de adicionar funcionalidades comuns a todas as solicitações HTTP em um aplicativo Angular.

//O que é um provedor de serviços no Angular? (provider)
//Um provedor de serviços no Angular é um objeto que informa ao Angular como criar um serviço.
//Ele é usado para configurar a injeção de dependência no Angular.
//Os provedores de serviços são usados para fornecer uma instância de um serviço para um componente ou outro serviço.
//Eles podem ser fornecidos em um módulo ou em um componente específico.

//O que são serviços injetáveis no Angular?
//Os serviços injetáveis no Angular são classes que podem ser injetadas em outros componentes, diretivas, pipes e serviços.
//Eles são usados para compartilhar lógica de negócios e funcionalidades comuns em um aplicativo Angular.
//Os serviços injetáveis são criados usando o decorador @Injectable.
//Eles são uma forma de promover a reutilização de código e a separação de preocupações em um aplicativo Angular.

