import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor(private http: HttpClient) { }

  getHomeData() {
    return this.http.get('assets/api/home.json');
  }

  getActivityData() {
    return this.http.get('assets/api/activity.json');
  }

  getPolicyData(){
    return this.http.get('assets/api/policy.json');
  }
}
