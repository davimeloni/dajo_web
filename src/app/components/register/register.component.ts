import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(
    private validateService: ValidateService,
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    console.log('reaching here?');
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password,
      kind: 'Employee'
    };

    console.log(user);

    // Required Fields
    if (this.name === undefined || this.email === undefined ||
    this.username === undefined || this.password === undefined) {
      console.log('reaching here?');
      this.flashMessage.show('Please fill all fields', {cssClass: 'alert-warning', timeout: 3000});
      return false;
    }

    console.log(user);
    // Register user
    this.authService.registerUser(user).subscribe(data => {
      console.log('here?');
      if (data.success) {
        //window.location.reload();
        this.router.navigate(['/login']);
        this.flashMessage.show('Registered successfully!', {cssClass: 'alert-success', timeout: 3000});
      } else {
        this.flashMessage.show('User or e-mail already exist', {cssClass: 'alert-warning', timeout: 3000});
        //this.router.navigate(['/register']);
      }
    });

  }

}
