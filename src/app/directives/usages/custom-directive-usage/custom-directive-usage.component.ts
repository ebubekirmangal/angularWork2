import { Component } from '@angular/core';
import { AppButtonDirective } from '../../customDirectives/app-button.directive';
import { NoCharacterInputDirective } from '../../customDirectives/no-character-input.directive';
import { FormsModule } from '@angular/forms';
import { MultipleDirective } from '../../customDirectives/multiple.directive';

@Component({
  selector: 'app-custom-directive-usage',
  standalone: true,
  imports: [AppButtonDirective,NoCharacterInputDirective,FormsModule,MultipleDirective],
  templateUrl: './custom-directive-usage.component.html',
  styles: `.app-button{
    background-color:white;
    border:1px solid blue;
    color: blue;
  }`
})
export class CustomDirectiveUsageComponent {
value: any;

}
