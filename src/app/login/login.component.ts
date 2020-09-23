import { Component, OnInit } from '@angular/core';
import { LogginObject } from '../dto/logginObject';
import { Session } from '../dto/session';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logginObject: LogginObject = new LogginObject();
  session : Session = new Session();

  logear(){
    this.loginSer.logear(this.logginObject).subscribe(
      (resp) =>{
        this.session = resp;
        alert(this.session.token)
      },(error) =>{
        alert('error');
      }
    )
  }

  constructor(private loginSer: LoginService) { }

  ngOnInit(): void {
  }

}
