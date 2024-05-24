import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoCharacterInput]',
  standalone: true
})
export class NoCharacterInputDirective {
  private numbersPattern: RegExp = /\d/;

  constructor(private elementRef: ElementRef) {}

  @HostListener('input', ['$event'])
  handleInputEvent(event: Event) {
    let inputElement = this.elementRef.nativeElement;
    let value: string = inputElement.value;

    // Rakamları kaldır
    if (this.numbersPattern.test(value)) {
      inputElement.value = value.replace(/\d/g, '');
    }
  }
}