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
  constructor(private service: InstallersService) {
    //  this.courses = service.getCourses(); 
    this.appNames = service.getAppNames()
    this.versions = service.getVersions()
    this.installers = service.getInstallers()
  }   

  save(installer, index){
    console.log(index)
    filesaver.saveAs(installer,`${this.appNames[index]}.exe`);
    console.log("called");
  }

  delete(index) {
    this.service.deleteInstaller(index)
  }

  edit(index) {
    this.service.editData(index)
  }
}
