console.log(Number(process.env.PORT));

export const ENV_API = {
  PORT: Number.isInteger(Number(process.env.PORT))
    ? Number(process.env.PORT)
    : 4000,
  HOST: process.env.HOST ?? 'http://localhost',
  VERSION: process.env.VERSION ?? 'v0',
  ENVIRONMENT: process.env.ENVIRONMENT ?? 'development',
  BCRYPT_SALT: process.env.BCRYPT_SALT ?? 10
};
