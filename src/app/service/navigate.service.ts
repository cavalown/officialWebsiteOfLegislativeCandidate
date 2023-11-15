import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigateService {
  constructor(private router: Router) {}

  public goHome(): Promise<boolean> {
    return this.router.navigate(['/home']);
  }

  public goDonate():void {
    this.router.navigate(['/donate']);
  }

  public goActivity():void{
    this.router.navigate(['/activity']);
  }

  public goPolicy():void {
    this.router.navigate(['/policy'])
  }
}
