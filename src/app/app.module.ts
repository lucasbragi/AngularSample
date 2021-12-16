import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { StudenteModule } from './modules/studente/studente.module';
import { View1Component } from './view/view1/view1.component';
import { ContentView2Component } from './view/view2/content-view2/content-view2.component';
import { View2Component } from './view/view2/view2.component';


@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    View2Component,
    ContentView2Component,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
