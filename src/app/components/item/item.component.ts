import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ManageitensService } from '../../services/manageitens.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item = {
    'name': '',
    'description': '',
    'price': null,
    'isActive': false
  };
  categories: any[];
  selectedCategory: any;
  selectedCategoryType: any;

  constructor(public dialogRef: MatDialogRef<ItemComponent>,
              public manageItensService: ManageitensService,
              public flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.selectedCategory = {};

    this.manageItensService.getAllCategories()
      .subscribe((res) => {
        console.log(res);
        this.categories = res;
        console.log(this.categories);

      });
  }

  onClose() {
    this.dialogRef.close();
  }

  saveItem(item) {
    if (item.name === '' || this.selectedCategory === undefined || this.selectedCategoryType === undefined ||
        item.price === undefined) {
          console.log('reaching here?');
          alert('Please fill all required fields');
          return false;
        }

    item.category = this.selectedCategory.category;
    item.categorytype = this.selectedCategoryType;
    console.log(item);

    if (item._id) {
      console.log('edit');
      this.manageItensService.updateItem(item)
        .subscribe((res) => {
          console.log(res);
          this.flashMessage.show('Item edited successfully.', { cssClass: 'alert-success', timeout: 5000 });
        });
    } else {
      console.log('create');
      this.manageItensService.createItem(item)
        .subscribe((res) => {
          console.log(res);
          this.flashMessage.show('Item created successfully.', { cssClass: 'alert-success', timeout: 5000 });
        });
    }

    this.dialogRef.close();

  }

}
