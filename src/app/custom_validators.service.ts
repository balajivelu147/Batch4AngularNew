import { AbstractControl, ValidationErrors, Validators } from "@angular/forms";
import { inject } from "@angular/core/testing";
import { Injectable } from "@angular/core";

@Injectable()
export class CustomValidators {
   comparePassword(control: AbstractControl): ValidationErrors {
        if (control.parent != undefined) {
          let pwd = control.parent.get('password').value;
          let confirmPwd = control.parent.get('confirmPassword').value;
          if (pwd === confirmPwd)
            return null;
          else
            return { isPasswordNotMatching: true }
        } else {
          return null;
        }
    }
}