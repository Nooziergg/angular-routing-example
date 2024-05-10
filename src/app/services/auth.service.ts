import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor() {
    // Verifica se o usuário está logado ao iniciar o serviço
    this.isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
  }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      this.isAuthenticated = true;
      localStorage.setItem('isLoggedIn', 'true'); // Salva o estado de logado no local storage
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('isLoggedIn'); // Remove o estado de logado do local storage
    window.location.reload();
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
