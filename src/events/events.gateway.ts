import { SubscribeMessage, WebSocketGateway, WebSocketServer, MessageBody } from '@nestjs/websockets';
  import { Server } from 'socket.io';

  @WebSocketGateway(8080, {cors: {origin: '*',}})
  export class EventsGateway {

    @WebSocketServer()
    server: Server;
    
    // @SubscribeMessage('join_room')
    // async handleSetClientDataEvent(
    //   @MessageBody()
    //   payload: any,
    // ) {
    //   console.log(payload);
    //   const roomName = payload.roomName;
    //   await this.emitter(roomName, "ffvww");
    // }
  
    public async emitter(title: string, data: any) {
      // console.log("sending to: " + title + " data: " + JSON.stringify(data));
      this.server.emit(title, data);
    }
  }