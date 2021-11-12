import { Produto } from 'src/app/models/produto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private URL: string = 'http://localhost:3000/produtos';
  constructor(
    private http: HttpClient,
    private toastr: ToastrService
  ) { }

  searchAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  searchId(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  exibeErro(e: any): Observable<any> {
    this.exibirMessage('ERRO!', 'Não foi possível realizar a operação', 'toast-error');
    return EMPTY;
  }

  exibirMessage(titulo: string, mensagem: string, tipo: string): void {
    this.toastr.show(mensagem, titulo, {closeButton: true, progressBar: true}, tipo);
  }

  create(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.URL, produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  update(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.URL}/${produto.id}`, produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  delete(id: any): Observable<any> {
    return this.http.delete<any>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }
}
