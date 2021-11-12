import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nomeProduto: string = 'Curso de Angular';
  anuncio: string = `O ${this.nomeProduto} está em promoção!`;
  idProduto: number = 3;
  precoProduto: number = 12.59;
  promocao: boolean = true;
  foto: string = "https://angular.io/assets/images/logos/angular/angular.svg";
  dataValidade: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
