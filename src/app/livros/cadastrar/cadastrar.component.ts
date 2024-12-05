import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink], // ReactiveFormsModule necessário para formulários
  providers: [HttpClient], // Disponibiliza HttpClient no contexto do componente
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
})
export class CadastrarComponent {
  livroForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    // Inicialização do formulário
    this.livroForm = this.fb.group({
      nome: ['', Validators.required],
      editora: ['', Validators.required],
      anoPublicacao: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]],
      autores: ['', Validators.required],
      formato: ['', Validators.required],
    });
  }

  cadastrarLivro() {
    if (this.livroForm.valid) {
      console.log('Dados enviados:', this.livroForm.value);
      this.http.post('https://6751078c69dc1669ec1ce68d.mockapi.io/livro/API/livro', this.livroForm.value).subscribe({
        next: (response) => {
          alert('Livro cadastrado com sucesso!');
          console.log('Resposta do servidor:', response);
          this.livroForm.reset();
        },
        error: (err) => {
          console.error('Erro ao cadastrar livro:', err);
          alert('Ocorreu um erro ao cadastrar o livro.');
        },
      });
    } else {
      alert('Preencha todos os campos corretamente.');
    }
  }

}
