import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ActivityComponent } from './views/activity/activity.component';
import { PolicyComponent } from './views/policy/policy.component';
import { ProductComponent } from './views/product/product.component';
import { DonateComponent } from './views/donate/donate.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
    // children: [
    //   { path: 'tomato-clock', pathMatch: 'full', component: TomatoClockComponent },
    //   { path: 'todo-list', pathMatch: 'full', component: TodoListComponent }
    // ]
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'activity',
    component: ActivityComponent,
  },
  {
    path: 'policy',
    component: PolicyComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'donate',
    component: DonateComponent,
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
})
export class AppRoutingModule {}
