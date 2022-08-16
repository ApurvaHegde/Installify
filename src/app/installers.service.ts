import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstallersService {
  appList: Array<{name: string, empoloyeeID: number}> = []; 
  applicationNames = []
  versions = []
  installers = []
  edit = []

  constructor() { }

  addData(appName, vNo, file) {
    this.applicationNames.push(appName)
    this.versions.push(vNo)
    this.installers.push(file)
  }

  // Get the whole list
  getAppNames() {
    return this.applicationNames
  }
  getVersions() {
    return this.versions
  }
  getInstallers() {
    return this.installers
  }
  
  editData(i) {
    this.edit.push(i)
    this.edit.push(this.applicationNames[i])
    this.edit.push(this.versions[i])
    this.edit.push(this.installers[i])
  }

  getEditData() {
    return this.edit
  }

  modifyData(index, appName, version) {
    this.applicationNames[index] = appName
    this.versions[index] = version
  }

  clearEditData() {
    this.edit = []
  }

  // Get single items of the list
  getAppName(i) {
    return this.applicationNames[i]
  }
  getVersion(i) {
    return this.versions[i]
  }
  getInstaller(i) {
    return this.installers[i]
  }

  deleteInstaller(index) {
    this.applicationNames.splice(index, 1)
    this.versions.splice(index, 1)
    this.installers.splice(index, 1)
  }

}
