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
import { HomeAboutComponent } from './components/about/about.component';
import { HomeServiceComponent } from './components/service/service.component';
import { HomeActivityComponent } from './components/activity/activity.component';
import { HomeProductComponent } from './components/product/product.component';
import { HomePolicyComponent } from './components/policy/policy.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavdropdownComponent } from './components/navdropdown/navdropdown.component';
import { FooterComponent } from './components/footer/footer.component';
import { TitleComponent } from './components/title/title.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { CollapseComponent } from './components/collapse/collapse.component';
import { DrawCardComponent } from './components/draw-card/draw-card.component';
import { PolicyCardComponent } from './components/policy-card/policy-card.component';
import { ActivityCardComponent } from './components/activity-card/activity-card.component';
import { ImageBlockComponent } from './components/image-block/image-block.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivityComponent,
    PolicyComponent,
    ProductComponent,
    DonateComponent,
    PageNotFoundComponent,
    HomeAboutComponent,
    HomeServiceComponent,
    HomeActivityComponent,
    HomeProductComponent,
    HomePolicyComponent,
    NavbarComponent,
    NavdropdownComponent,
    FooterComponent,
    TitleComponent,
    CarouselComponent,
    DialogComponent,
    CollapseComponent,
    DrawCardComponent,
    PolicyCardComponent,
    ActivityCardComponent,
    ImageBlockComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
