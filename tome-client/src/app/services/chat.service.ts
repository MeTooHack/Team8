import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatMessage } from '../models/chat-message';

@Injectable()
export class ChatService {

    apiUrl = 'https://tome-bot.azurewebsites.net/api/messages';

    constructor(private http: HttpClient) {

    }

    public sendMessage(message: ChatMessage) {
        this.http.post(this.apiUrl, JSON.stringify(message));
    }

}
