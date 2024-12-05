import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { appConfig } from './app/app.config'; // Configurações adicionais, se necessário
import { HomeComponent } from './app/home/home.component';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component'; // Componente raiz da aplicação
import { LoginComponent } from './app/login/login.component';

// Definindo as rotas
const routes: Routes = [
  { path: '', component: LoginComponent},  // Redireciona para a rota 'home'
  { path: 'login', component: LoginComponent },          // Página inicial
];

// Inicializando a aplicação
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),       // Configurando HttpClient
    provideRouter(routes),     // Configurando rotas
    ...appConfig.providers,    // Incluindo configurações adicionais, se necessário
  ],
}).catch((err) => console.error(err));
