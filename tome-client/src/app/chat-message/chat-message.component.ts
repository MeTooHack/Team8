import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage } from '../models/chat-message';

@Component({
    selector: 'tome-chat-message',
    templateUrl: './chat-message.component.html',
    styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {

    @Input() public chatMessage: ChatMessage;

    constructor() { }

    ngOnInit() {
    }

}
