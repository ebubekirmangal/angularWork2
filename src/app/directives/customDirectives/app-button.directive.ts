
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appButton]',
  standalone: true
})
export class AppButtonDirective {

  constructor(private elementRef:ElementRef) { 
 this.elementRef.nativeElement.style.color = "red";
    
  }

}
