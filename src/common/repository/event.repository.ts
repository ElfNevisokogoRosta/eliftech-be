import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class EventRepository extends Repository<Event> {
  constructor(private readonly dataSource: DataSource) {
    super(Event, dataSource.createEntityManager());
  }
}
