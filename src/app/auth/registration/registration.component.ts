import { Component, OnInit } from '@angular/core';

import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormBuilder,
  FormGroup
} from '@angular/forms';

import { ErrorStateMatcher } from '@angular/material/core';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'insta-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {

  options: FormGroup;

  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;

  //
  form: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(fb: FormBuilder) {
   
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  ngOnInit() {
    this.form = new FormGroup({
      'userName': new FormControl(null, [Validators.required]),
      'userEmail': new FormControl(null, [Validators.required, Validators.email]),
      'userNamePage': new FormControl(null, [Validators.required]),
      'userPassword': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'userAgree': new FormControl(false, [Validators.required, Validators.requiredTrue]),
    });
  }

  onSubmit() {
    console.log(this.form);
  }
}
