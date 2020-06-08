import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray, AbstractControl, ValidationErrors } from '@angular/forms';
import { CustomValidators } from '../custom_validators.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
  providers: [CustomValidators]
})
export class ReactiveFormsComponent implements OnInit {
  loginForm: FormGroup;
  loginForm2: FormControl;
  loginForm3: FormArray;


  INPUT_VALUE = 'balaji';
  constructor(private formBuilder: FormBuilder,
    private customValidators: CustomValidators) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      loginType: new FormGroup({
        userType: new FormControl('', [
          Validators.required,
          Validators.minLength(5)
          // ,
          // Validators.pattern('^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$')
        ]),
        authority: new FormControl(''),
      }),
      userName: new FormControl(this.INPUT_VALUE, [Validators.required,
        , Validators.minLength(5)]),
      password: new FormControl('s', [Validators.required]),
    confirmPassword: new FormControl('', this.customValidators.comparePassword),
      userList: new FormArray([])
    });

    // this.loginForm2 = this.formBuilder.control({   
    //   'userName': 'wedrwe',
    //   'password': 'sdfds'
    // });

    //     this.loginForm3 = new FormArray([]);

    // this.loginForm3.push(this.loginForm);
    // this.loginForm3.controls.pop('userName');
    this.setPassword = 'qqqqqqqq';
    console.log(this.getUserName);

    //  this.loginTypeControl.get('userType')
    //  .valueChanges
    //  .subscribe(value => 
    //   {
    //     console.log(value);
    //     this.createNewUserList(value)
    //   });


    //  this.loginTypeControl.get('userType')
    //  .statusChanges
    //  .subscribe(value =>
    //   { console.log(value);
    //     if(value === 'VALID'){
    //       this.createNewUserList(value)
    //     }
    //   });
  }
  login(): void {
    console.log(this.loginForm);
    console.log(this.loginForm.value);
  }

  get f() {
    return this.loginForm.controls;
  }

  get loginTypeControl() {
    return this.loginForm.controls.loginType;
  }

  get loginControl() {
    return this.loginForm.controls;
  }

  get getUserName() {
    return this.loginControl.userName.value;
  }
  set setPassword(value) {
    this.loginControl.password.setValue(value);
  }

  createNewUserList(value?: string) {
    let userList = this.loginForm.get('userList') as FormArray;
    let dynmArray = this.formBuilder.group({
      dynamicallyCreatedParam: new FormControl(value)
    })
    userList.push(dynmArray);
    // dynmArray.get()

  }


  removeUserList() {
    let userList = this.loginForm.get('userList') as FormArray;
    userList.controls.pop();
  }

  


}



