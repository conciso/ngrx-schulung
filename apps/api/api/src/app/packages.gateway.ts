import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { BehaviorSubject, interval, Subscription, timer } from 'rxjs';
import { tap } from 'rxjs/operators';
import { InMemoryDBEntity, InMemoryDBService } from '@nestjs-addons/in-memory-db';
import {v4 as uuid} from 'uuid';

export enum PreparationState {
  ordered = 'ordered',
  preparation = 'preparation',
  delivered = 'delivered',
  error = 'error'
}

interface FoodEntity extends InMemoryDBEntity {
  id: string,
  name: string;
  state: PreparationState
}

@WebSocketGateway()
export class KitchenGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  private logger = new Logger('KitchenGateway');

  @WebSocketServer() server: Server;

  private subscription: Subscription;
  private running$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(private database: InMemoryDBService<FoodEntity>) {
  }

  afterInit(server: Socket): any {
    this.logger.log('Init');
  }

  handleConnection(client: Socket, ...args: any[]): any {
    this.logger.log('Connected...');

    this.subscription = timer(0, 15000).pipe(
      tap(() => {
        const id = uuid();
        const pkg: FoodEntity = { id: id, name: `Cheeseburger`, state: PreparationState.ordered};
        this.database.create(pkg);
        
        this.server.emit('kitchen', pkg);
      })
    ).subscribe();
  }

  handleDisconnect(client: Socket): any {
    this.logger.log('Disconnected...');
    this.database.deleteMany(this.database.getAll().map(pkg => pkg.id));
    this.subscription.unsubscribe();
  }
}
