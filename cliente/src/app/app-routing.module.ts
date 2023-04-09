import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './cadastro/cadastro.component';
import { EsqueciComponent } from './esqueci/esqueci.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'cadastro', component: RegisterComponent },
    { path: 'esqueci_senha', component: EsqueciComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }