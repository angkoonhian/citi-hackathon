import * as mongoose from 'mongoose';

export interface Iuser extends mongoose.Document {
  id: string;
  username: string;
  password: string;
  email: string;
  phoneNumber: string;
  stocks: [string];
  nationality: string;
  interest: string;
}

const Schema = mongoose.Schema;

export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  stocks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'stocks',
    },
  ],
  nationality: {
    type: String,
    required: true,
  },
  interest: {
    type: String,
    required: true,
  },
});

const User = mongoose.model<Iuser>('users', UserSchema);
export default User;
