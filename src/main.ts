import { createStream } from 'rotating-file-stream';
import morgan from 'morgan';
import app from './app';
import logNameGenerator from './utils/morgan-log-name-generator';

require('dotenv').config();

const stream = createStream(logNameGenerator, {
  compress: 'gzip',
  path: './logs',
  interval: '1d',
  size: '1MB',
});

app.use(morgan('combined', { stream }));

app.listen(process.env.PORT || 8080, () => console.log('🎉 Server is running'));
