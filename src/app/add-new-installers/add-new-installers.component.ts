import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { InstallersService } from '../installers.service'
import * as filesaver from 'file-saver';

@Component({
  selector: 'add-new-installers',
  templateUrl: './add-new-installers.component.html',
  styleUrls: ['./add-new-installers.component.css']
})
export class AddNewInstallersComponent {
  file=null;
  constructor(public toastr: ToastrManager, private service: InstallersService) {}
  
  form = new FormGroup ({
    applicationName: new FormControl(),
    version: new FormControl(),
    uploadInstaller: new FormControl()
  })

  submit(f: any){
    console.log(f.value.applicationName)
    console.log(f.value.version)
    console.log(f.value.uploadInstaller)
    this.service.addData(f.value.applicationName, f.value.version, this.file)
    // filesaver.saveAs(this.file,`${f.value.applicationName}.exe`);
    // console.log("called");

    f.reset()
  }

  
  showSuccess() {
      this.toastr.successToastr('File uploaded.', 'Success!');
  }

  // showError() {
  //     this.toastr.errorToastr('This is error toast.', 'Oops!');
  // }

  // showWarning() {
  //     this.toastr.warningToastr('This is warning toast.', 'Alert!');
  // }

  // showInfo() {
  //     this.toastr.infoToastr('This is info toast.', 'Info');
  // }

  // showCustom() {
  //     this.toastr.customToastr('Custom Toast', null, { enableHTML: true });
  // }

  showToast(position: any = 'top-left') {
      this.toastr.infoToastr('This is a toast.', 'Toast', { position: position });
  }

  save(){
    filesaver.saveAs(this.file,"x.exe");
    console.log("called");
  }
  
  onselected(event){
   this.file=event.target.files[0];
   console.log("called onselected")
  }

}
