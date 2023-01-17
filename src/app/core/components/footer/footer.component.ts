import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BookmrkPresenterService } from 'src/app/bookmark/bookmark-container/bookmark-presenter/bookmrk-presenter.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  public form: FormGroup;
  public formSubmitted: boolean;

  constructor(private bookmarkPresenter: BookmrkPresenterService) {
    this.formSubmitted = false;
  }

  ngOnInit(): void {
    this.form = this.bookmarkPresenter.buildForm();
  }


  public get getControls() {
    return this.form.controls;
  }

  public onSubmit() {
    this.formSubmitted = !this.form.valid;
    if (this.form.valid)
      console.log(this.form.value);
  }
}
