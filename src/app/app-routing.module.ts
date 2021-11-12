import { CadastrarProdutoComponent } from './pages/produtos/cadastrar-produto/cadastrar-produto.component';
import { ListarProdutosComponent } from './pages/produtos/listar-produtos/listar-produtos.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent},
  { path: 'produtos', component: ListarProdutosComponent },
  { path: 'produtos/cadastrar', component: CadastrarProdutoComponent },
  { path: 'produtos/atualizar/:id', component: CadastrarProdutoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
