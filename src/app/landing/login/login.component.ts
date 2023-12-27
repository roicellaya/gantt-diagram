import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginResponse } from 'src/app/roadmap/models/loginResponse.model';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  login() {
    if (!this.loginForm.valid) {
      return;
    }
    const email = this.loginForm.get('email')?.value || '';
    const password = this.loginForm.get('password')?.value || '';
    this.loginService.login(email, password).subscribe({
      next: (response: LoginResponse) => {
        // TODO: guardar el token en localStorage
      },
      error: (err: HttpErrorResponse) => {
        //TODO: handle error
        console.error(err);
      }
    })
  }

}
