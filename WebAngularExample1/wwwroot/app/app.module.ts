import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "../app/app.component";
import { RouterModule } from '@angular/router';
import { DemoComponent } from '../app/Demo.Component';
import { HomeComponent } from '../app/Home.Component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule,

        RouterModule.forRoot([
            {
                path: 'Home',
                component: HomeComponent
            },
            {
                path: 'Demo',
                component: DemoComponent
            },         
            { path: '', redirectTo: '/Home', pathMatch: 'full' }],
            { useHash: true }
            )],
    declarations: [AppComponent, DemoComponent, HomeComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }