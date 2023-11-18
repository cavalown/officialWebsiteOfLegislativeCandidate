import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { DialogKeyword, DialogState } from '../models/dialog.state';

@Injectable({
  providedIn: 'root',
})
export class DialogComponentStore extends ComponentStore<DialogState> {
  constructor() {
    super({
      isOpen: false,
      title: '',
      switchKeyword: null,
    });
  }

  readonly isOpen$ = this.select((state: DialogState) => state.isOpen);
  readonly switchKeyword$ = this.select(
    (state: DialogState) => state.switchKeyword
  );
  readonly title$ = this.select((state: DialogState) => state.title);

  readonly openDialog = this.updater(
    (
      state: DialogState,
      content: { switchKeyword: DialogKeyword; title: string }
    ) => {
      return {
        ...state,
        isOpen: true,
        switchKeyword: content.switchKeyword,
        title: content.title,
      };
    }
  );

  readonly closeDialog = this.updater((state: DialogState) => {
    return { ...state, isOpen: false, switchKeyword: null, title: '' };
  });
}
