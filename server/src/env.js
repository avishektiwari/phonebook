import dotenv from "dotenv";

/**
 * Initialize environment variables.
 */
dotenv.config();

function setup() {
  const host = process.env.APP_HOST;
  const port = process.env.APP_PORT;
  const name = process.env.APP_NAME;
  const version = process.env.APP_VERSION;
  const dbHost = process.env.DB_HOST;
  const dbPort = process.env.DB_PORT;
  const dbName = process.env.DB_NAME;
  const dbPassword = process.env.DB_PASSWORD;
  const dbUser = process.env.DB_USER;

  return {
    env: process.env.NODE_ENV || "dev",
    app: {
      host,
      port,
      name,
      version,
    },
    database: {
      host: dbHost,
      database: dbName,
      password: dbPassword,
      port: dbPort,
      user: dbUser,
    },
  };
}

const config = setup();

export default config;
