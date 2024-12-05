import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { Router, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListarLivroComponent } from './livros/listar/listar.component';
import { CadastrarComponent } from './livros/cadastrar/cadastrar.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path:'listar', component: ListarLivroComponent},
    { path:'cadastrar', component: CadastrarComponent}
  ];


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterModule, ], // Roteador e outlet para rotas
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
