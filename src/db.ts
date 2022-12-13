import { MikroORM } from '@mikro-orm/core';
import type { EntityManager, PostgreSqlDriver } from '@mikro-orm/postgresql';

import { EntityCaseNamingStrategy, ReflectMetadataProvider } from '@mikro-orm/core';
import type { Options, Configuration } from '@mikro-orm/core';
import _ from 'lodash';
import pluralize from 'pluralize';

import BaseEntity from './entities/BaseEntity';
import User from './entities/User';

class CamelCaseNamingStrategy extends EntityCaseNamingStrategy {
  classToTableName(entityName: string): string {
    return _.camelCase(pluralize(entityName));
  }
}

const mikroOrmConfig: Options<PostgreSqlDriver> | Configuration<PostgreSqlDriver> = {
  entities: [
    BaseEntity,
    User,
  ],
  type: 'postgresql',
  dbName: 'NAME',
  host: 'HOST',
  port: 5432,
  password: 'PASSWORD',
  namingStrategy: CamelCaseNamingStrategy,
  metadataProvider: ReflectMetadataProvider,
  pool: {
    min: 0,
    max: 100,
  },
};

const db = {} as {
  orm: MikroORM<PostgreSqlDriver>;
  em: EntityManager<PostgreSqlDriver>;
};

export const initialize = async (): Promise<void> => {
  db.orm = await MikroORM.init<PostgreSqlDriver>(mikroOrmConfig);

  db.em = db.orm.em;
};

export default db;
