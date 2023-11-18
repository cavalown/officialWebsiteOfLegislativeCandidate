import { Component } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss'],
})
export class DonateComponent {
  questions = [
    {
      title: '捐款收據是以電子郵件、郵寄還是其他方式發送的？',
      content: '為響應環保，採用電子發票或是手機載具。'
    },
    {
      title: '請問該如何修改定期定額捐款金額？',
      content: '一但送出捐款金額，無法透過網頁修改，請直撥專線(02) 878-9487，將由專人替您處理。'
    },
    {
      title: '如果我在未來需要進一步的協助或信息，可以聯繫組織的哪位負責人或部門？',
      content: '可以寫信至meowoffice@linmeow.tw，我們將盡快回覆訊息，若無法得到回應，也可直接聯絡黨部，將由專人替您處理。'
    }
  ]
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
