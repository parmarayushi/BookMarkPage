import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_PATTERN } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class BookmrkPresenterService {

  constructor(private _fb: FormBuilder) {
  }

  public buildForm() {
    return this._fb.group({
      email: ["", [Validators.required, Validators.pattern(EMAIL_PATTERN)]]
    });
  }
}
