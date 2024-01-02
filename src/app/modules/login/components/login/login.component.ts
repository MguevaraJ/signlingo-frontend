import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../../shared/modules/material/material.module';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  public loginFormGroup: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.loginFormGroup = new FormGroup({
      user: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    });
  }

  public get getUserFormControl(): AbstractControl {
    return this.loginFormGroup.controls['user'];
  }

  public get getPasswordFormControl(): AbstractControl {
    return this.loginFormGroup.controls['password'];
  }

  public submit(): void {
    console.log({
      user: this.getUserFormControl.value,
      password: this.getPasswordFormControl.value
    });
  }
}
