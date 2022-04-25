import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstallersService {
  appList: Array<{name: string, empoloyeeID: number}> = []; 
  applicationNames = ['Sublime Text Editor', 'NodeJs']
  versions = ['3.2.11', '8.2.2']
  installers = []

  constructor() { }

  // addData(appName, vNo) {
  //   this.appList.push({ name: appName, empoloyeeID: vNo });
  // }

  addData(appName, vNo, file) {
    this.applicationNames.push(appName)
    this.versions.push(vNo)
    this.installers.push(file)
  }

  getCourses(){
    return ["course1", "course2", "course3"];
  }

  // getData() {
  //   return this.appList
  // }

  getAppName() {
    return this.applicationNames
  }
  getVersions() {
    return this.versions
  }
  getInstallers() {
    return this.installers
  }

}
