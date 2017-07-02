import { Component } from '@angular/core'
@Component({
    selector: 'app-loader',
    template: `
 <div>
     <nav class='navbar navbar-inverse'>
          <div class='container-fluid'>
            <ul class='nav navbar-nav'>
              <li><a [routerLink]="['/Home']">Home</a></li>
               <li><a [routerLink]="['/Demo']">Dropdown</a></li>
          </ul>
         </div>
    </nav>    
 <div class='container'>
   <router-outlet></router-outlet>
 </div>
</div>    
`
})
export class AppComponent {
    name: string = "Hello Sai";
}