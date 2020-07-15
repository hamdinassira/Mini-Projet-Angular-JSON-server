import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsComponent } from './components/produits/produits.component';
import { CommandesComponent } from './components/commandes/commandes.component';


const routes: Routes = [
  {path: 'produits', component:ProduitsComponent},
  //{path: '',redirectTo:'produits', pathMatch:'full'},
  {path: 'commandes/:id', component: CommandesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
