import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Este é o serviço responsável por fazer chamadas HTTP para a API

  requisicao(method: string, endpoint: string, data?: any): Observable<any> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.http.request(method, url, {
      body: data
    });
  }

  // Métodos de conveniência para fazer chamadas HTTP específicas

  get(endpoint: string): Observable<any> {
    return this.requisicao('GET', endpoint);
  }

  post(endpoint: string, data: any): Observable<any> {
    return this.requisicao('POST', endpoint, data);
  }

  put(endpoint: string, data: any): Observable<any> {
    return this.requisicao('PUT', endpoint, data);
  }

  delete(endpoint: string): Observable<any> {
    return this.requisicao('DELETE', endpoint);
  }
}

//O que é um serviço no Angular?
//Um serviço no Angular é uma classe que contém métodos e propriedades que podem ser compartilhados entre diferentes partes de um aplicativo Angular.
//Os serviços são usados para encapsular a lógica de negócios e a comunicação com APIs externas.
//Eles são injetáveis e podem ser injetados em componentes, diretivas, pipes e outros serviços.
//Os serviços são uma forma de promover a reutilização de código e a separação de preocupações em um aplicativo Angular.
