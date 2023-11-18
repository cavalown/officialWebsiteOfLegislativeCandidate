import { Component, HostListener } from '@angular/core';
import { DialogComponentStore } from './component-store/dialog-component-store';
import { Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isShowGoTop = false;
  isOpenDialog = false;
  dialogSwitchKeyword: string | null = null;
  subscriptions: Subscription = new Subscription();
  constructor(private _dialogCS: DialogComponentStore) {}
  @HostListener('window:scroll', ['$event'])
  ngOnInit() {
    const dialogKeywordSub = this._dialogCS.switchKeyword$
      .pipe(debounceTime(100))
      .subscribe((keyword) => {
        this.dialogSwitchKeyword = keyword;
      });
    this.subscriptions.add(dialogKeywordSub);
    const openSub = this._dialogCS.isOpen$
      .pipe(debounceTime(100))
      .subscribe((isOpen) => {
        this.isOpenDialog = isOpen;
      });
    this.subscriptions.add(openSub);
  }

  onWindowScroll() {
    this.isShowGoTop = window.scrollY > 100;
  }
  scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
