import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl:'./login.component.css',


  imports: [ReactiveFormsModule],
})
export class LoginComponent {
  loginForm: FormGroup

  constructor(private fb: FormBuilder, private router: Router) {
    // Inicialização do FormGroup
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }


  autenticar() {
    if (this.loginForm.valid) {
      const { usuario, senha } = this.loginForm.value;
      if (usuario === 'admin' && senha === '1234') {
        alert('Login bem-sucedido!');
        this.router.navigate(['/home']); // Redireciona para a rota 'home'
      } else {
        alert('Usuário ou senha incorretos!');
      }
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
}
