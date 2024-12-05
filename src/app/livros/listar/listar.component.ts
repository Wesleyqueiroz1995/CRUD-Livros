import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-listar-livro',
  imports: [CommonModule],
  providers: [HttpClient],
  templateUrl: './listar.component.html',
  styleUrl:'./listar.component.css'
})
export class ListarLivroComponent {
  livros: any[] = [];
  carregando: boolean = false;

  constructor(private http: HttpClient) {
    this.carregarLivros();
  }

  carregarLivros() {
    this.carregando = true; // Exibe o indicador de carregamento
    this.http
      .get<any[]>('https://6751078c69dc1669ec1ce68d.mockapi.io/livro/API/livro')
      .subscribe({
        next: (data) => {
          this.livros = data;
          this.carregando = false; // Esconde o indicador de carregamento
        },
        error: (err) => {
          console.error('Erro ao carregar livros:', err);
          this.carregando = false; // Esconde o indicador de carregamento mesmo em caso de erro
        },
      });
  }

  excluirLivro(id: string) {
    this.http
      .delete(`https://6751078c69dc1669ec1ce68d.mockapi.io/livro/API/livro/${id}`)
      .subscribe({
        next: () => {
          alert('Livro excluído com sucesso!');
          this.carregarLivros(); // Atualiza a lista de livros
        },
        error: (err) => {
          console.error('Erro ao excluir o livro:', err);
          alert('Erro ao excluir o livro. Tente novamente.');
        },
      });
  }


}
