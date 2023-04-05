import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class RegisterComponent implements OnInit {

  RegisterForm!: FormGroup;
  submitted = false;

  constructor(
  ) { }

  ngOnInit(): void {
    this.RegisterForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required]),
      ConfirmarSenha: new FormControl('', [Validators.required]),
      nome: new FormControl('', [Validators.required])
    }
    );
  }

  get email() {
    return this.RegisterForm.get('email')!;
  }
  get senha() {
    return this.RegisterForm.get('senha')!;
  }
  get ConfirmarSenha() {
    return this.RegisterForm.get('ConfirmarSenha')!;
  }
  get nome() {
    return this.RegisterForm.get('nome')!;
  }

  submit() {
    if (this.RegisterForm.invalid) {
      return;
    }

    console.log("Enviou Formulario");
  }

}

