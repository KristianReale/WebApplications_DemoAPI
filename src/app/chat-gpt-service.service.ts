import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatGptServiceService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions'; // URL API di ChatGPT
  private apiKey = 'YOUR_API_KEY'; // Sostituisci con la tua chiave API

  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    const body = {
      model: "gpt-3.5-turbo", // Specifica il modello da usare
      messages: [
        { role: "system", content: "Sei un assistente utile." },
        { role: "user", content: message }
      ]
    };

    return this.http.post(this.apiUrl, body, { headers });
  }

}
