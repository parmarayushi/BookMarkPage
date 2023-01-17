import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkContainerComponent } from './bookmark-container/bookmark-container.component';

const routes: Routes = [{ path: '', component: BookmarkContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookmarkRoutingModule { }
