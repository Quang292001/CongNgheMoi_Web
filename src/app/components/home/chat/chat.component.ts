import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  // Các thuộc tính
  searchText: string = '';

  // Các phương thức
  searchMessages(): void {
    // Thực hiện tìm kiếm tin nhắn dựa trên searchText
  }
}
