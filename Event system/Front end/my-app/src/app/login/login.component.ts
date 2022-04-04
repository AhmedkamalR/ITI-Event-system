import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../_models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User("", "");
  constructor(public authSer: AuthService, public router: Router) { }
  login() {
    this.authSer.login(this.user).subscribe(
      a => {
        console.log(a);
        localStorage.setItem("token", (<any>a).token)
        this.router.navigate(['/home']);
      }
    );

  }

  ngOnInit(): void {
  }

}
