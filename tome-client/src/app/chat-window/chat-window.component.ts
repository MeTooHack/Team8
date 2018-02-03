import { Component, OnInit, HostBinding } from '@angular/core';
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
            { text: 'Hej jag heter Clara, hur kan jag hjälpa dig?', direction: 'in' } as ChatMessage,
            { text: 'Jag har en jättedålig dag', direction: 'out' } as ChatMessage
        ];
    }

    ngOnInit() {
    }

}
