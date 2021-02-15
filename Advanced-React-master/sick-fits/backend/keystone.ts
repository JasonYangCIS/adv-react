import { createAuth } from '@keystone-next/auth';
import { config, createSchema } from '@keystone-next/keystone/schema';
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session';
import { User } from './schemas/User';
import 'dotenv/config';

const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

// session configs
const sessionConfigs = {
  maxAge: 60 * 60 * 24 * 360, // signed in duration
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    // TODO: add in initial roles here
  },
});

export default withAuth(
  config({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: 'mongoose',
      url: databaseUrl,
      // TODO: Add data seeding here
    },
    lists: createSchema({
      // Schema items go in here
      User,
    }),
    ui: {
      // Show UI for ppl who pass this test
      isAccessAllowed: ({ session }) => {
        console.log(session);
        return !!session?.data;
      },
    },
    session: withItemData(statelessSessions(sessionConfigs), {
      // GraphQL Query
      User: 'id',
    }),
  })
);
