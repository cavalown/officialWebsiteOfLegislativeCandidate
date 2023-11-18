import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogComponentStore } from 'src/app/component-store/dialog-component-store';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss'],
})
export class DonateComponent {
  questions = [
    {
      title: '捐款收據是以電子郵件、郵寄還是其他方式發送的？',
      content: '為響應環保，採用電子發票或是手機載具。',
    },
    {
      title: '請問該如何修改定期定額捐款金額？',
      content:
        '一但送出捐款金額，無法透過網頁修改，請直撥專線(02) 878-9487，將由專人替您處理。',
    },
    {
      title:
        '如果我在未來需要進一步的協助或信息，可以聯繫組織的哪位負責人或部門？',
      content:
        '可以寫信至meowoffice@linmeow.tw，我們將盡快回覆訊息，若無法得到回應，也可直接聯絡黨部，將由專人替您處理。',
    },
  ];
  donateForm: FormGroup;
  constructor(
    private _dialogCS: DialogComponentStore,
    private _fb: FormBuilder
  ) {
    this.donateForm = this._fb.group({
      amount: [null, [ Validators.min(1)]],
    });
  }
  ngOnInit() {
    window.scrollTo(0, 0);
  }

  goDonate() {
    this._dialogCS.openDialog({
      switchKeyword: 'donate',
      title: '政治獻金捐贈規定',
    });
  }

  updateAmount(amount: number) {
    this.donateForm.patchValue({
      amount: amount,
    });
  }
}
