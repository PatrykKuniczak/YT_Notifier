import 'express-session';

declare module 'express-session' {
  interface SessionData {
    id: string;
    passport: {
      user: {
        id: number;
        accessToken: string;
      };
    };
  }
}
