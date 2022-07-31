export const EnvConfig = () => ({
    environment: process.env.NODE_ENV || 'dev',
    mongoDb: process.env.MONGODB || 'mongodb://localhost:27017/pokemon',
    port: process.env.PORT || 3002,
    defaultLimit: +process.env.DEFAULT_LIMIT || 10,
   });