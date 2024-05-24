import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMultiple]',
  standalone: true
})
export class MultipleDirective {

  constructor(private templateRef:TemplateRef<any>, private viewContainerRef:ViewContainerRef) {
    

}
@Input() set appMultiple(number:number){
      for(let i =0; i <number;i++ ){
          this.viewContainerRef.createEmbeddedView(this.templateRef)
      }
    }
   }


