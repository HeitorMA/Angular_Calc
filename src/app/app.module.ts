import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';  

@NgModule({
  declarations: [
    AppComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormComponent  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
