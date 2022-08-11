export class userLoginDTO {
  username: string;
  password: string;
}

export class userLoginSuccessDTO {
  userId: string;
  name: string;
  token: string;
  tokenExpiration: string;
}

export class userDTO {
  userId: string;
  name: string;
  nationality: string;
  age: number;
  interest: string;
}

export class userSignUpDTO {
  name: string;
  password: string;
  nationality: string;
  age: number;
  interest: string;
}
