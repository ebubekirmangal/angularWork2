import { Component } from '@angular/core';
import { AppButtonDirective } from '../../customDirectives/app-button.directive';
import { NoCharacterInputDirective } from '../../customDirectives/no-character-input.directive';
import { FormsModule } from '@angular/forms';
import { MultipleDirective } from '../../customDirectives/multiple.directive';
import { WelcomeDirective } from '../../customDirectives/welcome.directive';

@Component({
  selector: 'app-custom-directive-usage',
  standalone: true,
  imports: [AppButtonDirective,NoCharacterInputDirective,FormsModule,MultipleDirective,WelcomeDirective],
  templateUrl: './custom-directive-usage.component.html',
  styles: `
  .main{
    width:80%;
    margin: 0 auto 50px auto;
  }
  `
})
export class CustomDirectiveUsageComponent {
value: any;

}
