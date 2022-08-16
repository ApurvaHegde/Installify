import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { InstallersService } from '../installers.service'

@Component({
  selector: 'edit-installer',
  templateUrl: './edit-installer.component.html',
  styleUrls: ['./edit-installer.component.css']
})
export class EditInstallerComponent {

  file=null;
  index=null;
  form = new FormGroup ({
    applicationName: new FormControl('', Validators.required),
    version: new FormControl('', Validators.required),
  })
  constructor(public toastr: ToastrManager, private service: InstallersService) { 
    const data = service.getEditData()
    this.index = data[0]
    this.form.setValue({
      applicationName: data[1],
      version: data[2],
    })
  }

  submit(f: any){
    console.log(f.value.applicationName)
    console.log(f.value.version)
    console.log(this.file)
    this.service.modifyData(this.index, f.value.applicationName, f.value.version)
    f.reset()
    this.service.clearEditData()
  }

  
  showSuccess() {
      this.toastr.successToastr('Updated data.', 'Success!');
  }

  showToast(position: any = 'top-left') {
      this.toastr.infoToastr('This is a toast.', 'Toast', { position: position });
  }
  
  onselected(event){
   this.file=event.target.files[0];
   console.log("called onselected")
  }

}
