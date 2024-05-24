import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BuiltInPipesComponent } from "./pipes/built-in-pipes/built-in-pipes.component";
import { CustomPipesUsageComponent } from "./pipes/custom-pipes-usage/custom-pipes-usage.component";
import { CustomDirectiveUsageComponent } from "./directives/usages/custom-directive-usage/custom-directive-usage.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, BuiltInPipesComponent, CustomPipesUsageComponent, CustomDirectiveUsageComponent]
})
export class AppComponent {
  title = 'pipes-directives';
}
