import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { io, Socket } from 'socket.io-client';


@Injectable()
export class SocketService implements OnModuleInit{
    private readonly logger = new Logger(SocketService.name);
  private socket: Socket;

  onModuleInit() {
    this.connectToServer();
  }

  private connectToServer() {
    // Connect to the WebSocket server
    // this.socket = io('http://localhost:3000', {
    //   auth: {
    //     token: process.env.TOKEN,
    //   },
    // });
    let token= process.env.TOKEN
    this.socket = io('http://localhost:3000', {
      transports: ['websocket'],  // Ensure that WebSocket transport is used
      extraHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

// Handle connection
this.socket.on('connect', () => {
    this.logger.log(`Connected to WebSocket server: ${this.socket.id}`);
  });

  // Handle disconnection
  this.socket.on('disconnect', () => {
    this.logger.warn('Disconnected from WebSocket server');
  });

  // Listen to room events
  this.socket.on('room', (message) => {
    this.logger.log(`Room event received: ${JSON.stringify(message)}`);
  });

  // Listen to private messages
  this.socket.on('private-message', (message) => {
    this.logger.log(`Private message received: ${JSON.stringify(message)}`);
  });

  // Handle errors
  this.socket.on('error', (error) => {
    this.logger.error(`Error received: ${JSON.stringify(error)}`);
  });
}

// Send a message to the server
sendMessage(event: string, data: any) {
    this.socket.emit(event, data);
  }

  // Send a private message
  sendPrivateMessage(targetClientId: string, message: string) {
    this.socket.emit('private-message', { targetClientId, message });
  }
}
