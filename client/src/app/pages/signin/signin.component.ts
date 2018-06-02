import { Subscription } from 'rxjs';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  isInvalidCredential:boolean=false;
  userForm: FormGroup;
  formErrors = {
    'username': '',
    'password': ''
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
    }
  };

  constructor(private router: Router,
              private fb: FormBuilder,
              private auth: AuthService) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.userForm = this.fb.group({
      'username': ['', [
        Validators.required,
        //Validators.email
      ]
      ],
      'password': ['', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25)
      ]
      ],
    });

    this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.userForm) {
      return;
    }
    const form = this.userForm;
    for (const field in this.formErrors) {
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  signInWithGoogle() {
    this.auth.googleLogin().then(() => this.afterSignIn());
  }

  signInWithGithub() {
    this.auth.githubLogin().then(() => this.afterSignIn());
  }

  signInWithEmail() {
    this.auth.emailLogin(this.userForm.value['username'], this.userForm.value['password'])
     .then(
       () => {    
            this.afterSignIn();
       },
       () => {
        this.isInvalidCredential=true;        
       },
     );       
  }

  signInAnonymously() {
    this.auth.anonymousLogin().then(() => this.afterSignIn());
  }

  login() {
    this.signInWithEmail();
  }

  private afterSignIn() {    
    this.router.navigate(['/']);
  }


  ngOnChanges(changes: SimpleChanges) { 
    
    console.log('datta changed');
  }
}
