import { Component, OnInit } from '@angular/core';
import { FeaturesTabSwitch } from '../../constants';
import { BookmrkPresenterService } from '../bookmark-presenter/bookmrk-presenter.service';

@Component({
  selector: 'app-bookmark-presentation',
  templateUrl: './bookmark-presentation.component.html',
  viewProviders: [BookmrkPresenterService],
})
export class BookmarkPresentationComponent implements OnInit {

  public activeTab: string;
  public currentPage: number;

  constructor() {
    this.currentPage = 0;
    this.activeTab = FeaturesTabSwitch.SIMPLE_BOOKMARKING;
  }

  ngOnInit(): void {
  }

  public onTabClick(tab: string) {
    this.activeTab = tab;
    this.currentPage = 0;
  }

}
