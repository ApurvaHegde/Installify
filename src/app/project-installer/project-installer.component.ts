import { Component } from '@angular/core';
import { InstallersService } from '../installers.service'
import * as filesaver from 'file-saver';

@Component({
  selector: 'project-installer',
  templateUrl: './project-installer.component.html',
  styleUrls: ['./project-installer.component.css']
})
export class ProjectInstallerComponent {
  // appList: Array<{name: string, empoloyeeID: number}> = []; 
  appNames = [];
  versions = [];
  installers = [];
  // To use a service we need to make an obj for it
  constructor(service: InstallersService) {
    //  this.courses = service.getCourses(); 
    this.appNames = service.getAppName()
    this.versions = service.getVersions()
    this.installers = service.getInstallers()
  }   

  save(){
    filesaver.saveAs(this.installers,`${this.appNames[0]}.exe`);
    console.log("called");
  }
}
