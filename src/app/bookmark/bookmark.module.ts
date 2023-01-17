import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarkRoutingModule } from './bookmark-routing.module';
import { BookmarkComponent } from './bookmark.component';
import { BookmarkContainerComponent } from './bookmark-container/bookmark-container.component';
import { BookmarkPresentationComponent } from './bookmark-container/bookmark-presentation/bookmark-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BookmarkComponent,
    BookmarkContainerComponent,
    BookmarkPresentationComponent
  ],
  imports: [
    CommonModule,
    BookmarkRoutingModule,
    ReactiveFormsModule
  ]
})
export class BookmarkModule { }
