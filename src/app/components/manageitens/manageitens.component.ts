import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ManageitensService } from '../../services/manageitens.service';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { ItemComponent } from '../../components/item/item.component';

@Component({
  selector: 'app-manageitens',
  templateUrl: './manageitens.component.html',
  styleUrls: ['./manageitens.component.css']
})
export class ManageitensComponent implements OnInit {

  itens: any[];
  categories: any[];
  dialogRef: MatDialogRef<any>;
  searchText = '';

  constructor(private manageItensService: ManageitensService, private router: Router,
    private authService: AuthService, private flashMessage: FlashMessagesService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.loadItens();
  }

  loadItens() {
    this.manageItensService.getAllItens()
      .subscribe((res) => {
        console.log(res);
        this.itens = res;
        console.log(localStorage.getItem('id_token'));
      },
      (err) => {
        console.log(err);
        if (err.status === 403 || err.status === 401) {
          console.log('erro do usuario');
          this.flashMessage.show('Please authenticate to access a restricted area.', { cssClass: 'alert-warning', timeout: 5000 });
          this.router.navigate(['home']);
          console.log(localStorage.getItem('id_token'));
          this.authService.logout();

        }
      });
  }

  loadCategories() {
    this.manageItensService.getAllCategories()
      .subscribe((res) => {
        console.log(res);
      });
  }

  removeItem(item) {
    console.log(item);
    this.dialogRef = this.dialog.open(DialogComponent);
    this.dialogRef.componentInstance.message = 'Are you sure you want to delete this item?';
    this.dialogRef.componentInstance.itemId = item._id;

    this.dialogRef.afterClosed()
      .subscribe((res) => {
        console.log('After closed');
        this.loadItens();
      });
  }

  editItem(item) {
    this.dialogRef = this.dialog.open(ItemComponent, {
      width: '400px',
      height: '500px'
    });
    this.dialogRef.componentInstance.item = item;

    this.dialogRef.afterClosed()
      .subscribe((res) => {
        console.log('After closed');
        this.loadItens();
      });
  }

  createItem() {
    this.dialogRef = this.dialog.open(ItemComponent, {
      width: '400px',
      height: '500px'
    });

    this.dialogRef.afterClosed()
      .subscribe((res) => {
        console.log('After closed');
        this.loadItens();
      });
  }

}
