import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthGuard} from './guards/auth.guard';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { KitchenService } from './services/kitchen.service';

import { MatDialogModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './components/dialog/dialog.component';
import { ManageaccountsComponent } from './components/manageaccounts/manageaccounts.component';
import { ManageaccountsService } from './services/manageaccounts.service';
import { ManageitensComponent } from './components/manageitens/manageitens.component';
import { ManageitensService } from './services/manageitens.service';
import { ItemComponent } from './components/item/item.component';
import { FiltersPipe } from './pipes/filters.pipe';
import { DatefilterPipe } from './pipes/datefilter.pipe';
import { MyDatePickerModule } from 'mydatepicker';


const appRoutes: Routes =  [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'kitchen', component: KitchenComponent},
  {path: 'manageaccounts', component: ManageaccountsComponent},
  {path: 'manageitens', component: ManageitensComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    KitchenComponent,
    DialogComponent,
    ManageaccountsComponent,
    ManageitensComponent,
    ItemComponent,
    FiltersPipe,
    DatefilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MyDatePickerModule
  ],
  entryComponents: [ DialogComponent, ItemComponent ],
  providers: [
    ValidateService,
    AuthService,
    AuthGuard,
    KitchenService,
    ManageaccountsService,
    ManageitensService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
