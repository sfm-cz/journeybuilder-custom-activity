const winston = require('winston');

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.json(),
  defaultMeta: {
    service: 'user-service',
  },
});

const alignColorsAndTime = winston.format.combine(
  winston.format.colorize({
    all: true,
  }),
  winston.format.label({
    label: '[LOGGER]',
  }),
  winston.format.timestamp({
    format: 'YY-MM-DD HH:MM:SS',
  }),
  winston.format.printf(
    (info) => ` ${info.label}  ${info.timestamp}  ${info.level} : ${info.message}`,
  ),
);

logger.add(new (winston.transports.Console)({
  format: winston.format.combine(winston.format.colorize(), alignColorsAndTime),
}));

module.exports = logger;
