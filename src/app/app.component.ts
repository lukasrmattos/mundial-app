import { Component } from '@angular/core';
import { APIService } from './_services/apiservice';
import { UserService } from './_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App Teste Mundial';

  logged: boolean = false;
  email: string = '';
  senha: string = '';

  constructor(private userService : UserService) {

  }

  ngOnInit() {
    
    if(APIService.TOKEN == '') {
      this.logged = false;
    } else {
      this.logged = true;
    }
  }

  login() {
    this.userService.auth(this.email, this.senha)
      .subscribe(
        (response: any) => {
          const token = response.token;
          if (token) {
            APIService.TOKEN = token;
            this.logged = true;
          } else {
            console.error('Autenticação falhou: token não encontrado.');
            this.logged = false;
          }
        },
        error => {
          console.error('Erro de autenticação', error);
          this.logged = false;
        }
      );
  }
}
