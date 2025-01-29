import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { AngularApiModule } from './modules/angular-api.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularApiModule,
    BrowserModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }