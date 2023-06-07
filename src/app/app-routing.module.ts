import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const Routes: Routes = [];
const routes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  { path: 'articles', component: ArticleListComponent },
  { path: 'articles/:id', component: ArticleDetailComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
