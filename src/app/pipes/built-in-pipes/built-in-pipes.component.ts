import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface ProductItem{
  id:number;
  categoryId:number;
  name:string;
  unitPrice:number;
}
@Component({
  selector: 'app-built-in-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './built-in-pipes.component.html',
})
export class BuiltInPipesComponent {
headers:string[] =["başlık bir","başlık iki","başlık üç"];
products:ProductItem[] = [{id:1,categoryId:1,name:"Apple Mac",unitPrice:2500},{id:2,categoryId:1,name:"Asus Rog",unitPrice:2500},{id:3,categoryId:1,name:"Excalibur G770",unitPrice:2500},{id:4,categoryId:1,name:"Monster Abra",unitPrice:2500}]
}
