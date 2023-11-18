import { Component, Input } from '@angular/core';
import { Subscription, debounceTime } from 'rxjs';
import { DialogComponentStore } from 'src/app/component-store/dialog-component-store';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  title = '';
  subscriptions: Subscription = new Subscription();
  constructor(private _dialogCS: DialogComponentStore) {
    const titleSub = this._dialogCS.title$
      .pipe(debounceTime(100))
      .subscribe((title) => {
        this.title = title;
      });
  }
  close() {
    this._dialogCS.closeDialog();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
