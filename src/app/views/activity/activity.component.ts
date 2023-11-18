import { Component } from '@angular/core';
import { NavigateService } from 'src/app/service/navigate.service';

interface Activity {
  id: string;
  title: string;
  images1: string[];
  images2: string[];
  date: string;
  description: string;
  content: string[];
}
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent {
  imageGroup1: string[] = [];
  imageGroup2: string[] = [];
  activity: Activity | null | undefined = null;
  otherActivities: Activity[] = [];
  activities: Activity[] = [
    {
      id: 'activity-Id1',
      title: '參與台北環保論壇，爭取海洋友善環境！',
      images1: [
        'assets/image/activity-1-1.jpg',
        'assets/image/activity-1-2.jpg',
        'assets/image/activity-1-3.jpg',
        'assets/image/activity-1-4.jpg',
        'assets/image/activity-1-5.jpg',
      ],
      date: '2023/10/26',
      description:
        '炎炎夏日的周六，我走進了台北環保論壇，決定要全力宣傳「鯨魚至上」的理念！我相信，鯨魚在海洋中，每一隻都應該有自己的 VIP 休憩空間。',
      content: [
        '在一個美麗的夏日早晨，台北舉辦了一場重要的環保論壇，重點討論如何建立一個海洋友善的環境。這次論壇吸引了來自政府、學術界、環保組織和當地社區的代表，他們都熱衷於保護台灣的海洋生態系統。',
        '陳英渝是這次論壇的主要參與者之一。她一直以來都關心海洋環保議題，並且她提出了相關的法案。當她站在論壇的講台上，她分享了自己的熱情和承諾，以及她的願景，即建立一個海洋友善的台灣。',
        '陳英渝提到了海洋污染、過度捕撈和海洋生態系統的崩壞，並指出這些問題對台灣的經濟和環境都帶來了嚴重影響。她提出了一系列政策建議，包括提高海洋保護區的規模，加強海洋監測和執法，以及推動環保教育。',
        '此外，陳英渝強調了社區參與的重要性，她鼓勵當地社區和環保團體共同參與保護台灣的海洋環境。她分享了一個案例，講述當地一個小漁村如何透過清潔海灘和減少塑料使用，改變了他們的社區，使之變得更加環保友善。',
        '論壇結束後，陳英渝與其他與會者互動，收集了更多意見和建議。她承諾將努力推動相應的法案。她感到非常滿足，因為她知道她不僅參與了一個重要的環保討論，還鼓勵了更多人一同努力，以建立一個更加海洋友善的台灣。這次論壇標誌著一個新的開始，為台灣的海洋環境保護帶來了希望。',
      ],
      images2: [
        'assets/image/activity-1-6.jpg',
        'assets/image/activity-1-7.jpg',
        'assets/image/activity-1-8.jpg',
        'assets/image/activity-1-9.jpg',
        'assets/image/activity-1-10.jpg',
      ],
    },
    {
      id: 'activity-Id2',
      title: '掃街模式開啟！帶起鯨魚帽來和我一起走！',
      images1: [
        'assets/image/activity-2-1.jpg',
        'assets/image/activity-2-2.jpg',
        'assets/image/activity-2-3.jpg',
        'assets/image/activity-2-4.jpg',
        'assets/image/activity-2-5.jpg',
      ],
      date: '2023/11/15',
      description:
        '街上氣氛真的很棒，從小孩到大人，甚至有些朋友都穿著由義大利知名設計師Sit Down Please所打造的經典龍蝦裝來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「海洋友善環境」政策的決心。',
      content: [
        '經驗豐富的立法委員候選人陳英渝，充滿活力和熱情地開始了掃街活動之旅。陳英渝一直以來都深受選區居民的支持，因為她不僅是他們的代表，還是他們的朋友。',
        '一個星期天的早晨，陳英渝和她的選舉團隊來到當地一個繞鬧的街上，計畫進行一場特別的選舉活動。他們裝飾了一個小舞台，擺放了一些彩旗和選舉海報。莉莉穿著的T恤，握著麥克風，熱情洋溢地和市民互動。',
        '街上的人們開始湧向小舞台，他們對陳英渝充滿好奇和期待，因為他們知道陳英渝一直以來都是一個傾聽和解決問題的代表。當陳英渝開始演講時，她講述了她在議會中的工作，以及她對保護海洋的承諾。她的話語充滿希望和信心，人們紛紛鼓掌並高呼口號。',
        '然後，陳英渝決定讓活動更加互動和有趣。她邀請市民提出問題，並親自回答每個問題。這種直接的互動讓人們感到自己的聲音被聽到，並且感受到陳英渝真誠的關心。在場的年輕人和長者們都表達了他們的支持，並紛紛加入了陳英渝的志願團隊。',
        '當選活動結束時，市場裡充滿歡樂和笑聲。陳英渝感到非常開心，因為她知道她不僅獲得了市民的支持，還建立了更多的社區聯繫。她明白，這個選舉季節充滿希望，並且充滿了她為當地海洋做出更多積極改變的動力。',
        '街上氣氛真的很棒，從小孩到大人，甚至有些朋友都穿著由義大利知名設計師Sit Down Please所打造的經典龍蝦裝來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「海洋友善環境」政策的決心。',
      ],
      images2: [
        'assets/image/activity-2-6.jpg',
        'assets/image/activity-2-7.jpg',
        'assets/image/activity-2-8.jpg',
        'assets/image/activity-2-9.jpg',
        'assets/image/activity-2-10.jpg',
      ],
    },
    {
      id: 'activity-Id3',
      title: '香香的烤魷魚活動！',
      images1: [
        'assets/image/activity-3-1.jpg',
        'assets/image/activity-3-2.jpg',
        'assets/image/activity-3-3.jpg',
        'assets/image/activity-3-4.jpg',
        'assets/image/activity-3-5.jpg',
      ],
      date: '2023/12/06',
      description:
        '為了推廣海洋生物永續生存的重要，讓更多人一起愛護海洋，我們舉辦了一場前所未有的「烤魷魚活動」！',
      content: [
        '陳英渝與「海洋之愛」的海洋保護單位決定舉辦一個獨特的活動，以唤起人們對海洋的保護意識。他們計畫了一場盛大的「烤魷魚節」，旨在讓參與者體驗美味的海鮮，同時強調保護海洋和海洋生物的重要性。',
        '活動當天，一片歡樂的氛圍籠罩著整個海灘。保護單位的成員在沙灘上搭建了簡單的烤架和用來烤海鮮的設備。當地漁夫捐贈了新鮮的魷魚，都是當地可持續捕撈的，以確保不會對海洋生態造成傷害。',
        '活動開始後，參與者可以品嚐到美味的烤魷魚。同時，保護單位的成員向人們提供有關海洋保護的資訊，解釋了海洋污染、過度捕撈和海洋生態系統的現狀。他們還舉辦了互動活動，如收拾沙灘上的垃圾和討論可持續漁業的工作坊。',
        '當夜幕降臨時，活動進行了一個特別的儀式。參與者們點燃了蠟燭，將它們放在沙灘上，形成一個大大的愛心。這象徵著每個人對海洋的承諾，保護海洋生物和環境。',
        '這場「烤魷魚節」不僅讓人們享受美味的食物，還成功地喚起了參與者對海洋保護的關注。參與者離開時，帶走了更多的知識和對行動的決心，並答應將這個重要信息傳遞給他們的家人和朋友。陳英渝和「海洋之愛」保護單位的這個活動成為了一個啟發人心的例子，呼籲人們共同保護海洋和海洋生物，以確保它們的永續存在。',
      ],
      images2: [
        'assets/image/activity-3-6.jpg',
        'assets/image/activity-3-7.jpg',
        'assets/image/activity-3-8.jpg',
        'assets/image/activity-3-9.jpg',
        'assets/image/activity-3-10.jpg',
      ],
    },
  ];
  constructor(private _navigateService: NavigateService) {
    sessionStorage.setItem('activityId', 'activity-Id1');
    const activityId = sessionStorage.getItem('activityId');
    if (!activityId) this._navigateService.goHome();
    this.activity = this.activities.find(
      (activity) => activity.id === activityId
    );
    console.log('*', this.activity, this.otherActivities)
    this.otherActivities = this.activities.filter((activity) => activity.id !== activityId);
  }
}
