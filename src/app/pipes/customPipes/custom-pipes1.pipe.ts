import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formControlErrorMessage',
  standalone: true
})
export class FormControlErrorMessage implements PipeTransform {
//AbtractControl: Form kontrollerinintemel davranışlarını tanımlar ve önemli özellikler taşır.
  transform(control: AbstractControl): string | null {
    if(!control || !control.errors) return null;

    const errors: ValidationErrors = control.errors;
    for(const errorKey in errors){
      if(this.errorMesages[errorKey]){
        return this.errorMesages[errorKey];
      }
    }
    return 'Invalid'
  }

  private errorMesages: {[key:string]:string} ={
    required: 'This field is required',
    minlength: 'The value is too short',
    maxlength: 'The value is too long',
    email: 'Invalid email address'
  }
}
