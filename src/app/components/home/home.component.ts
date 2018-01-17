import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dialogRef: MatDialogRef<any>;

  constructor(public dialog: MatDialog, private authService: AuthService) { }

  ngOnInit() {
    this.authService.verifyToken()
      .subscribe((res) => {
        console.log('success');
        console.log(res);

      },
      (err) => {
        console.log('erro');
        console.log(err);
        this.authService.logout();
      });
  }

  testDialog() {
    this.dialogRef = this.dialog.open(DialogComponent);
  }

}
