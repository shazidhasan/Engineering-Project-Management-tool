import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  userRegForm: FormGroup;

  

  formErrors = {
    'username': '',
    'password': '',
    'email': '',
    'role': '',
  };
  validationMessages = {
    'username': {
      'required': 'Please enter your username',
      'username': 'please enter Alpha numeric username'
    },
    'password': {
      'required': 'please enter your password',
      'pattern': 'Password must contain numbers and letters',
      'minlength': 'Please enter more than 4 characters',
      'maxlength': 'Please enter less than 25 characters',
    },

    'email': {
      'required': 'please enter your email address',
      'pattern': 'email format should be restored',
    },

    'role': {
      'required': 'please select role',      
    },

  };

  buildForm() {
    this.userRegForm = this.fb.group({

      'firstname': ['', [        
      ]
    ],

    'lastname': ['', [      
    ]
  ],

      'username': ['', [
        Validators.required,        
      ]
    ],
      'email': ['', [
        Validators.required,
        Validators.email
      ]
    ],
    'role': ['', [
      Validators.required,      
    ]
  ],
      'password': ['', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25)
      ]
      ],

      'passwordConfirm': ['', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25)
      ]
      ],
    });

    // this.userRegForm.valueChanges.subscribe(data => this.onValueChanged(data));
    // this.onValueChanged();
  }

  // onValueChanged(data?: any) {
  //   if (!this.userRegForm) {
  //     return;
  //   }
  //   const form = this.userRegForm;
  //   for (const field in this.formErrors) {
  //     if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
  //       this.formErrors[field] = '';
  //       const control = form.get(field);
  //       if (control && control.dirty && !control.valid) {
  //         const messages = this.validationMessages[field];
  //         for (const key in control.errors) {
  //           if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
  //             this.formErrors[field] += messages[key] + ' ';
  //           }
  //         }
  //       }
  //     }
  //   }
  // }

  roles:any = [{'value':1,'viewValue':'Administrator'},{'value':2,'viewValue':'Reviewer'},{'value':3,'viewValue':'Designer'}];

  constructor(private router: Router,
              private auth: AuthService,private fb: FormBuilder) {
  }

  ngOnInit() {
    this.buildForm();
  }

  signUpWithEmail() {
    this.auth.emailSignUp(this.userRegForm.value['firstname'],this.userRegForm.value['lastname'],this.userRegForm.value['username'],this.userRegForm.value['email'], this.userRegForm.value['password'],this.userRegForm.value['role'])
    .then(() => this.afterSignIn());
  }

  register() {
    this.signUpWithEmail();
  }

  private afterSignIn() {
    this.router.navigate(['/']);
  }
}
