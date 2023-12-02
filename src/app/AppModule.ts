import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from "./component/navbar/navbar.component";
import { HomeComponent } from "./component/home/home.component";
import { SidebarComponent } from "./component/sidebar/sidebar.component";
import { FooterComponent } from './component/footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NavbarComponent,
        HomeComponent,
        SidebarComponent,
        FooterComponent,
        FormsModule,
        childone,
        childtwo,
    ]
})
export class AppModule {
}
