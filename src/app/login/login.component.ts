import { Component, OnInit } from '@angular/core';
import { LogginObject } from '../dto/logginObject';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logginObject: LogginObject = new LogginObject();

  logear(){
    this.loginSer.logear(this.logginObject).subscribe(
      (resp) =>{
        alert('logeado');
      },(error) =>{
        alert('error');
      }
    )
  }

  constructor(private loginSer: LoginService) { }

  ngOnInit(): void {
  }

}
