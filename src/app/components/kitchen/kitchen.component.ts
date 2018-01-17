import { Component, OnInit } from '@angular/core';
import { KitchenService } from '../../services/kitchen.service';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {

  itensOrdered = [];
  orderedItem: any;
  itensCooking = [];
  cookingItem: any;
  itensCooked = [];
  cookedItem: any;
  user: any;

  constructor(private kitchenService: KitchenService, private router: Router,
              private authService: AuthService, private flashMessage: FlashMessagesService) { }

  ngOnInit() {

    this.getData();

    setTimeout(() => {
      window.location.reload();
    }, 10000);
  }

  // ---------------- ITEMS TO COOK ---------------------------------------
  selectAllItensToCook() {
    this.itensOrdered.forEach(item => {
      item.isSelected = !item.isSelected;
    });
  }

  cookItens() {
    let updateItemData = {};
    this.itensOrdered.forEach(itemToCook => {
      if (itemToCook.isSelected) {
        itemToCook.status = 'Cooking';
        updateItemData = {
          accountId: itemToCook.accountId,
          orderedItens: itemToCook
        };
        console.log(updateItemData);
        this.kitchenService.updateItensAccount(updateItemData)
          .subscribe((res) => {
            console.log(res);
          });
      }
    });

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  // -------------------- ITEMS TO FINISH -----------------------

  selectAllItensToFinish() {
    this.itensCooking.forEach(item => {
      item.isSelected = !item.isSelected;
    });
  }

  finishItens() {
    let updateItemData = {};
    this.itensCooking.forEach(itemToFinish => {
      if (itemToFinish.isSelected) {
        itemToFinish.status = 'Cooked';
        updateItemData = {
          accountId: itemToFinish.accountId,
          orderedItens: itemToFinish
        };
        console.log(updateItemData);
        this.kitchenService.updateItensAccount(updateItemData)
          .subscribe((res) => {
            console.log(res);
          });
      }
    });

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  // -----------------ITENS TO DELIVERY ------------------

  selectAllItensToDelivery() {
    this.itensCooked.forEach(item => {
      item.isSelected = !item.isSelected;
    });
  }

  deliveryItens() {
    let updateItemData = {};
    this.itensCooked.forEach(itemToDelivery => {
      if (itemToDelivery.isSelected) {
        itemToDelivery.status = 'Delivered';
        updateItemData = {
          accountId: itemToDelivery.accountId,
          orderedItens: itemToDelivery
        };
        console.log(updateItemData);
        this.kitchenService.updateItensAccount(updateItemData)
          .subscribe((res) => {
            console.log(res);
          });
      }
    });

    setTimeout(() => {
      window.location.reload();
    }, 1000);

  }

  // -------- GET DATA -------------------
  getData() {
    this.itensCooked = [];
    this.itensCooking = [];
    this.itensCooked = [];
    this.kitchenService.getKitchenItens().subscribe((accounts) => {
      console.log(accounts);

      accounts.forEach(account => {
        account.orderedItens.forEach(item => {
          if (item.status === 'Ordered') {
            this.orderedItem = {
              accountId: account._id,
              counter: account.counter,
              customer: account.customer,
              table: account.table,
              isSelected: false,
              _id: item._id,
              orderedItemUpdatedAt: item.updatedAt,
              status: item.status,
              orderedItem: item.orderedItem,
              comments: item.comments
            };
            this.itensOrdered.push(this.orderedItem);
          } else if (item.status === 'Cooking') {
            this.cookingItem = {
              accountId: account._id,
              counter: account.counter,
              customer: account.customer,
              table: account.table,
              isSelected: false,
              _id: item._id,
              orderedItemUpdatedAt: item.updatedAt,
              status: item.status,
              orderedItem: item.orderedItem,
              comments: item.comments
            };
            this.itensCooking.push(this.cookingItem);
          } else if (item.status === 'Cooked') {
            this.cookedItem = {
              accountId: account._id,
              counter: account.counter,
              customer: account.customer,
              table: account.table,
              isSelected: false,
              _id: item._id,
              orderedItemUpdatedAt: item.updatedAt,
              status: item.status,
              orderedItem: item.orderedItem,
              comments: item.comments
            };
            this.itensCooked.push(this.cookedItem);
          }
        });
      });

      console.log(this.itensCooked);
      console.log(this.itensCooking);
      console.log(this.itensOrdered);
    },
    (err) => {
      console.log(err);
      if (err.status === 403) {
        console.log('token error');
        this.flashMessage.show('Please authenticate to access a restricted area.', {cssClass: 'alert-warning', timeout: 5000});
        this.router.navigate(['']);
        this.authService.logout();
      }
    });
  }

}
