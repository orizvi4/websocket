import { Module } from '@nestjs/common';
import { EventsGateway } from './events.gateway';
import { eventsController } from './events.controller';

@Module({
  controllers: [eventsController],
  providers: [EventsGateway],
})
export class EventsModule {}