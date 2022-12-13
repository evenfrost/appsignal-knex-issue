import { Entity, Property } from '@mikro-orm/core';

import BaseEntity from './BaseEntity';

@Entity()
export default class User extends BaseEntity {
  @Property({ columnType: 'text' })
  email!: string;

  @Property({ columnType: 'text' })
  password!: string;
}
