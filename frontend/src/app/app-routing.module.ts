import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FornecedoresCreateComponent } from './components/fornecedores/fornecedores-create/fornecedores-create.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { FornecedoresCrudComponent } from './views/fornecedores-crud/fornecedores-crud.component';
import {HomeComponent} from './views/home/home.component';
import {ProductCrudComponent} from './views/product-crud/product-crud.component';

const routes: Routes = [
  {
  path: "",
  component: HomeComponent
},

{
  path:"products",
  component: ProductCrudComponent
},

{
  path: "products/create",
  component: ProductCreateComponent
},

{
  path: "products/update/:id",
  component: ProductUpdateComponent
},
{
  path: "products/delete/:id",
  component: ProductDeleteComponent
},

{
  path: "",
  component: HomeComponent
},
{
  path: "fornecedores",
  component: FornecedoresCrudComponent
},
{
  path: "fornecedores/create",
  component: FornecedoresCreateComponent
},

]







@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
