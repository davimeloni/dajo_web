import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ManageitensService } from '../../services/manageitens.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  message: string;
  itemId: any;

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
              public manageItensService: ManageitensService, public flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  reallyRemoveItem() {
    console.log(this.itemId);

    this.manageItensService.deleteItem(this.itemId)
      .subscribe((res) => {
        console.log(res);
        this.flashMessage.show('Item deleted successfully.', { cssClass: 'alert-success', timeout: 5000 });
    });
    
    this.dialogRef.close();
  }

}
