import { Component, OnInit } from '@angular/core';
import { ManageaccountsService } from '../../services/manageaccounts.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { IMyDpOptions } from 'mydatepicker';

@Component({
  selector: 'app-manageaccounts',
  templateUrl: './manageaccounts.component.html',
  styleUrls: ['./manageaccounts.component.css']
})
export class ManageaccountsComponent implements OnInit {

  preAccounts: any[];
  accounts: any[];
  toggle: any = {};
  searchText = '';
  startDateValue: any;
  endDateValue: any;

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd/mm/yyyy',
  };

  constructor(private manageAccountsService: ManageaccountsService, private router: Router,
    private authService: AuthService, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.loadAccounts();
  }

  loadAccounts() {
    this.accounts = [];

    this.manageAccountsService.getAllAccounts()
      .subscribe((res) => {
        console.log(res);
        this.preAccounts = res;

        this.preAccounts.forEach(account => {
          if (account.customer) {
            this.accounts.push(account);
          }
        });
      },
      (err) => {
        console.log(err);
        if (err.status === 403) {
          console.log('erro do token');
          this.flashMessage.show('Please authenticate to access a restricted area.', { cssClass: 'alert-warning', timeout: 5000 });
          this.router.navigate(['']);
          this.authService.logout();
        }
      });
  }

}
