import { Component, OnInit } from '@angular/core';
import { ChatMessage } from '../models/chat-message';

@Component({
    selector: 'tome-chat-window',
    templateUrl: './chat-window.component.html',
    styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {

    public messages: ChatMessage[];
    constructor() {
        this.messages = [
            { text: 'Hello' } as ChatMessage
        ];
    }

    ngOnInit() {
    }

}
