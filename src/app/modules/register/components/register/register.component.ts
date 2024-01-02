import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../../shared/modules/material/material.module';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  public registerFormGroup: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.registerFormGroup = new FormGroup({
      user: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
      age: new FormControl("", [Validators.required]),
      gender: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required])
    });
  }

  public get getUserFormControl(): AbstractControl {
    return this.registerFormGroup.controls['user'];
  }

  public get getPasswordFormControl(): AbstractControl {
    return this.registerFormGroup.controls['password'];
  }

  public get getAgeFormControl(): AbstractControl {
    return this.registerFormGroup.controls['age'];
  }

  public get getGenderFormControl(): AbstractControl {
    return this.registerFormGroup.controls['gender'];
  }

  public get getEmailFormControl(): AbstractControl {
    return this.registerFormGroup.controls['email'];
  }

  public submit(): void {
    console.log({
      user: this.getUserFormControl.value,
      password: this.getPasswordFormControl.value,
      age: this.getAgeFormControl.value,
      gender: this.getGenderFormControl.value,
      email: this.getEmailFormControl.value
    });
  }
}
