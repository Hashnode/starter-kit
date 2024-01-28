import { Db, MongoClient } from 'mongodb';

declare global {
  namespace NodeJS {
    type MongoConnection = {
      client: MongoClient;
      db: Db;
    };

    interface Global {
      mongo: {
        conn: MongoConnection | null;
        promise: Promise<MongoConnection> | null;
      };
    }
  }
}
