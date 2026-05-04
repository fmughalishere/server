import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from './models/User.js';
import dotenv from 'dotenv';

dotenv.config();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    callbackURL: "/api/auth/google/callback",
    proxy: true
  },
  async (_accessToken: string, _refreshToken: string, profile: any, done: any) => {
    try {
      let user = await User.findOne({ email: profile.emails?.[0].value });

      if (!user) {
        user = await (User as any).create({
          name: profile.displayName,
          email: profile.emails?.[0].value,
          googleId: profile.id,
          avatar: profile.photos?.[0].value,
          role: "jobseeker"
        });
      }
      return done(null, user);
    } catch (err) {
      return done(err, null);
    }
  }
));

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

export default passport;