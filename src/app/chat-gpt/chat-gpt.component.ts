import { Component } from '@angular/core';
import {ChatGptServiceService} from '../chat-gpt-service.service';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-chat-gpt',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './chat-gpt.component.html',
  styleUrl: './chat-gpt.component.css'
})
export class ChatGptComponent {
  userMessage: string = '';
  response: string | null = null;

  constructor(private chatGptService: ChatGptServiceService) {}

  sendMessage() {
    if (this.userMessage.trim()) {
      this.chatGptService.sendMessage(this.userMessage).subscribe({
        next: (res) => {
          this.response = res.choices[0].message.content;
        },
        error: (err) => {
          console.error('Errore durante la richiesta:', err);
        }
      });
    }
  }
}
