import { Component } from '@angular/core';
import { DialogComponentStore } from 'src/app/component-store/dialog-component-store';

@Component({
  selector: 'app-donate-dialog',
  templateUrl: './donate-dialog.component.html',
  styleUrls: ['./donate-dialog.component.scss'],
})
export class DonateDialogComponent {
constructor(private _dialogCS: DialogComponentStore) {}
  close() {
    this._dialogCS.closeDialog();
  }
}
