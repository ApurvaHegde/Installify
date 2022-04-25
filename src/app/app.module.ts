import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InstallersService } from './installers.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectInstallerComponent } from './project-installer/project-installer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AddNewInstallersComponent } from './add-new-installers/add-new-installers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ng6-toastr-notifications';

@NgModule({
  declarations: [
    AppComponent,
    ProjectInstallerComponent,
    AddNewInstallersComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    MatTabsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '', 
        component: ProjectInstallerComponent
      },
      {
        path: 'project-installer', 
        component: ProjectInstallerComponent
      },
      {
        path: 'add-new-installers', 
        component: AddNewInstallersComponent
      },
      {
        path: '**', 
        component: NotFoundComponent
      }
    ])
  ],
  providers: [InstallersService],
  bootstrap: [AppComponent]
})
export class AppModule { matTabGroup }
