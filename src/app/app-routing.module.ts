import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Rota para o componente de login
  { path: 'modulo1', canActivate: [authGuard], loadChildren: () => import('./modulo1/modulo1.module').then(m => m.Modulo1Module) },
  { path: 'modulo2', canActivate: [authGuard], loadChildren: () => import('./modulo2/modulo2.module').then(m => m.Modulo2Module) },
  { path: 'modulo3', canActivate: [authGuard], loadChildren: () => import('./modulo3/modulo3.module').then(m => m.Modulo3Module) },
  { path: '',canActivate: [authGuard], component: HomeComponent, pathMatch: 'full' }, // Rota padrão
  { path: '**', component: NotFoundComponent } // Rota coringa para página não encontrada
];
//Explicação do código acima:
//As rotas são definidas como um array de objetos, onde cada objeto representa uma rota.
//Cada rota tem um caminho (path) e uma ação a ser executada quando o caminho é acessado.
//O caminho é uma string que representa a parte da URL que a rota corresponde.
//A ação pode ser um componente a ser carregado ou um módulo a ser carregado de forma assíncrona.
//O método loadChildren é usado para carregar um módulo de forma assíncrona.
//O método then é usado para especificar o módulo a ser carregado.
//A rota padrão redireciona para a rota /modulo1/child1 quando a URL é vazia.
//A rota coringa redireciona para a rota /modulo2/child2 quando nenhuma outra rota corresponde à URL solicitada.


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//O que é uma rota no Angular?
//Uma rota no Angular é um mecanismo que permite navegar entre diferentes partes de um aplicativo da web.
//As rotas são usadas para mapear URLs para componentes específicos e para carregar esses componentes quando a URL é acessada.

//O que é uma rota filha?
//Uma rota filha é uma rota que é aninhada dentro de outra rota.
//Isso é útil para criar rotas hierárquicas em um aplicativo Angular.

//O que é uma rota raiz?
//Uma rota raiz é a rota principal de um aplicativo Angular.
//É a rota que é acessada quando o aplicativo é carregado pela primeira vez.

//O que é pathMatch: 'full'?
//pathMatch: 'full' é uma opção da configuração de rota que especifica que a rota deve corresponder à URL solicitada
//apenas se a URL for exatamente igual ao caminho da rota. Isso é útil para definir uma rota padrão.

//O que é uma rota coringa?
//Uma rota coringa é uma rota que é usada quando nenhuma outra rota corresponde à URL solicitada.

//O que é uma rota padrão?
//Uma rota padrão é a rota que é usada quando a URL solicitada corresponde a um caminho vazio.

//O que é o método loadChildren?
//O método loadChildren é um método da configuração de rota que é usado para carregar um módulo de forma assíncrona.
//Ele é usado para implementar o lazy loading no Angular.

//O que é lazy loading?
//Lazy loading é uma técnica de otimização que carrega recursos assincronamente quando são necessários.
//No Angular, isso é feito com o método loadChildren da configuração de rota.
