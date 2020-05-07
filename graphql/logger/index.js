const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const customFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
  });
export const logger = createLogger({
    format: combine(
      label({ label: 'eStore' }),
      timestamp(),
      customFormat
    ),
    level: 'info',
    transports: [
      new transports.Console()
    ]
})
