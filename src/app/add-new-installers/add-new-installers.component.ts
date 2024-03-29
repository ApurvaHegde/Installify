import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { InstallersService } from '../installers.service'

@Component({
  selector: 'add-new-installers',
  templateUrl: './add-new-installers.component.html',
  styleUrls: ['./add-new-installers.component.css']
})
export class AddNewInstallersComponent {
  file=null;
  constructor(public toastr: ToastrManager, private service: InstallersService) {}
  
  form = new FormGroup ({
    applicationName: new FormControl('', Validators.required),
    version: new FormControl('', Validators.required),
    uploadInstaller: new FormControl('', Validators.required)
  })

  submit(f: any){
    console.log(f.value.applicationName)
    console.log(f.value.version)
    console.log(this.file)
    this.service.addData(f.value.applicationName, f.value.version, this.file)
    f.reset()
  }
    
  showSuccess() {
      this.toastr.successToastr('File uploaded.', 'Success!');
  }

  showToast(position: any = 'top-left') {
      this.toastr.infoToastr('This is a toast.', 'Toast', { position: position });
  }
  
  onselected(event){
   this.file=event.target.files[0];
   console.log("called onselected")
  }

}
