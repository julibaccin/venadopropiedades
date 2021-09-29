import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    passwordRepeat: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  async handleRegister() {
    const { email, password, passwordRepeat } = this.registerForm.value;

    if (this.registerForm.invalid) {
      console.log('Formulario Invalido');
      return;
    }

    if (password !== passwordRepeat) {
      console.log('Las contraseñas no coinciden');
      return;
    }

    await this.auth.register(email, password);
    this.router.navigateByUrl('/panel');
  }

  ngOnInit(): void {}
}
