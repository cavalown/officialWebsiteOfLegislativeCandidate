import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import * as HomeData from '../../assets/data/home.json';
import * as ActivityData from '../../assets/data/activity.json';
import * as PolicyData from '../../assets/data/policy.json';

@Injectable()
export class HttpResInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.endsWith('/api/home')) {
      return of(new HttpResponse({ status: 200, body: HomeData }));
    } else if (request.url.endsWith('/api/activity')) {
      return of(new HttpResponse({ status: 200, body: ActivityData }));
    } else if (request.url.endsWith('/api/policy')) {
      return of(new HttpResponse({ status: 200, body: PolicyData }));
    }
    return next.handle(request);
  }
}
