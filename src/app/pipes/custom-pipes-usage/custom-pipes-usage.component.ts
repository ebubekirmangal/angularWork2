import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControlErrorMessage } from '../customPipes/custom-pipes1.pipe';


@Component({
    selector: 'app-custom-pipes-usage',
    standalone: true,
    templateUrl: './custom-pipes-usage.component.html',
    imports: [ReactiveFormsModule, FormControlErrorMessage]
})
export class CustomPipesUsageComponent {

form:FormGroup;
  constructor(private fb: FormBuilder){
this.form =this.fb.group({
  email: ['',[Validators.required,Validators.email]],
  password: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(9)]]
})
  }

  viewForm() {
    console.log("Email: "+this.form.value['email']+", Password: "+ this.form.value['password']);
    }
      
}
