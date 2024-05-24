
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appButton]',
  standalone: true
})
export class AppButtonDirective {

  constructor(private elementRef:ElementRef) { 
 this.elementRef.nativeElement.style.cssText ='background-color:white; border:1px solid blue;color:blue;border-radius:10px;'
    
  }

}
