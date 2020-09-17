import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemsContainerComponent } from './items/items-container/items-container.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'items', component: ItemsContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
