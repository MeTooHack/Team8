import { Component, OnInit } from '@angular/core';
import { ChatMessage } from '../models/chat-message';

import { DirectLine, Message } from 'botframework-directlinejs';

const secret =
    'SVe9FZYKzrk.cwA.h0w.AauWFDkyr-rXJtwxAt-v-zvyiY8KbaywMA-EJt3ft0A';
// const conversationId = '5NX56vzObSMKrLez05F1w3';
const fromId = '111111';

@Component({
    selector: 'tome-chat-window',
    templateUrl: './chat-window.component.html',
    styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {
    public messages: ChatMessage[];
    public draftMessage: ChatMessage = { text: '', direction: 'out' };

    directLine = new DirectLine({
        secret: secret
        // conversationId: conversationId
    });

    constructor() {
        this.messages = [];
    }

    ngOnInit() {
        this.directLine.activity$
            .filter(
            activity => activity.type === 'message' && activity.from.id !== fromId
            )
            .subscribe((message: Message) => this.messageReceived(message));
    }

    messageReceived(message: Message) {
        console.log(message);
        this.messages.push({ text: message.text, direction: 'in' });
    }

    sendMessage() {
        const message = { ...this.draftMessage };

        this.draftMessage.text = '';
        this.messages.push(message);

        this.directLine
            .postActivity({
                from: { id: fromId },
                type: 'message',
                text: message.text
            })
            .subscribe(
            id => console.log('Posted activity, assigned ID ', id),
            error => console.log('Error posting activity', error)
            );
    }
}
