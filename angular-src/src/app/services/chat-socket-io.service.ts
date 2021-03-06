import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socket, io } from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { SocketioService } from '../services/socketio.service';

@Injectable({
  providedIn: 'root'
})
export class ChatSocketIOService {

  constructor(private socketioService:SocketioService) {   }

  socket!: Socket;
  socketID: any;
  roomPin:any;

  ngOnInit(){
    this.socket = this.socketioService.getSocket();
    this.roomPin = this.socketioService.getRoomPin();
  }

  chatMessage(roomPin:any, message:any, player:any){
    this.socket.emit('chatMessage', {gameId:roomPin, message:message, player:player});
  }

  receiveChatMessage(){
    return new Observable((observer) => {
      this.socket.on('chatMessage', (message: any) => {
        observer.next(message);
      });
    });
  }
}
