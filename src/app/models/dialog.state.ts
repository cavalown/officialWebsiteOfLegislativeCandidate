export type DialogKeyword = 'donate';

export interface DialogState {
  isOpen: boolean;
  title: string;
  switchKeyword: DialogKeyword| null;
}
