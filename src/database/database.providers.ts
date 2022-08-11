import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb+srv://citi:Fatfatbee01@cluster0.yri7j3a.mongodb.net/?retryWrites=true&w=majority',
      ),
  },
];
