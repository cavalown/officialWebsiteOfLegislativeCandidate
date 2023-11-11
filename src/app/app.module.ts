import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ActivityComponent } from './views/activity/activity.component';
import { PolicyComponent } from './views/policy/policy.component';
import { ProductComponent } from './views/product/product.component';
import { DonateComponent } from './views/donate/donate.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpResInterceptor } from './interceptor/http-res.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivityComponent,
    PolicyComponent,
    ProductComponent,
    DonateComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpResInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
