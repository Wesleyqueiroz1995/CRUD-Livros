import { Route } from '@angular/router';
import { Router, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastrarComponent} from './livros/cadastrar/cadastrar.component';
import { ListarLivroComponent } from './livros/listar/listar.component';


// Definindo as rotas
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full' },
  {path:'login', component: LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'livros/cadastrar', component: CadastrarComponent},
  { path: 'livros/listar', component: ListarLivroComponent},
];
