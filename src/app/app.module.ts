import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InstallersService } from './installers.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectInstallerComponent } from './project-installer/project-installer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddNewInstallersComponent } from './add-new-installers/add-new-installers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ng6-toastr-notifications';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EditInstallerComponent } from './edit-installer/edit-installer.component';
import { TrialComponent } from './trial/trial.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectInstallerComponent,
    AddNewInstallersComponent,
    NavbarComponent,
    NotFoundComponent,
    EditInstallerComponent,
    TrialComponent,
  ],
  imports: [
    MatTabsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
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
        path: 'project-installer/edit-installer',
        component: EditInstallerComponent
      },
      {
        path: 'edit-installer',
        component: EditInstallerComponent
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
