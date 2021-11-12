import { ProdutosService } from './../../../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {


  listCourse: Produto[] = [];

  constructor(
    private produtoService: ProdutosService
  ) { }

  ngOnInit() {
    this.loadProdutos();
  }
  loadProdutos(): void {
    this.produtoService.searchAll().subscribe(retorno => {
      this.listCourse = retorno;
    });
  }

  deletar(produto: Produto): void {
    this.produtoService.delete(produto.id).subscribe(()=> {
      this.produtoService.exibirMessage(
        'SISTEMA',
        `${produto.nome} Foi excluido`,
          'toast-error'
      );
    });
    this.loadProdutos();
  }

}
