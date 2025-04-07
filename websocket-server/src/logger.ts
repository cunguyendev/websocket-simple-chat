import Logger from '@ptkdev/logger';

const logger = new Logger({
  language: 'en',
  colors: true,
  debug: true,
  info: true,
  warning: true,
  error: true,
  sponsor: false,
  write: false,
  type: 'log',
});

export default logger;
