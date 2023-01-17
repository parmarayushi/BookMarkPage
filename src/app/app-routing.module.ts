import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './core/components/master/master.component';

const routes: Routes = [
  {
    path: "", component: MasterComponent,
    children: [{ path: '', loadChildren: () => import('./bookmark/bookmark.module').then(m => m.BookmarkModule) }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
