import { ProdutosService } from './../../../services/produtos.service';
import { Produto } from 'src/app/models/produto.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  opcao!: string;
  textButton!: string;
  enviar!: boolean;

  produto: Produto = {
    nome: '',
    validade: new Date(),
    preco: 0
  };

  constructor(
    private produtosService: ProdutosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    const idEdit = this.activatedRoute.snapshot.params['id'];
    this.opcao = "Cadastrar";
    this.textButton = "success";
    this.enviar = false;

    switch(idEdit){

      case `${idEdit}`:
        this.opcao = "Editar";
        this.textButton = "warning";
        this.enviar = true;
        this.produtosService.searchId(idEdit).subscribe(retorno => {
          this.produto = retorno;
        });

      break;
    }
  }

  save(): void {
    if(this.enviar === false) {
      this.produtosService.create(this.produto).subscribe(retorno => {
        this.produto = retorno;
        this.produtosService.exibirMessage(
          'SISTEMA',
          `${this.produto.nome} foi cadastrado. ID: ${this.produto.id}`,
          'toast-success'
        );
        this.router.navigate(['/produtos']);
      });
      return;
    }

    if(this.enviar === true) {
      this.produtosService.update(this.produto).subscribe(retorno => {
        this.produto = retorno;
        this.produtosService.exibirMessage(
          'SISTEMA',
          `${this.produto.nome} foi editado.`,
          'toast-success'
        );
        this.router.navigate(['/produtos']);
      });
      return;
    }
  }

}
