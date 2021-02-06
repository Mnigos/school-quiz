import type { Generator } from 'rotating-file-stream';
import pad from './pad';

const logNameGenerator: Generator = (time, index) => {
  console.log(time, index);
  if (!time || typeof time === 'number') return 'current.log';

  const month = pad(time.getMonth() + 1);
  const day = pad(time.getDate());
  const hour = pad(time.getHours());
  const minute = pad(time.getMinutes());

  return `${month}/${day}/${hour}-${minute}.${index}.log`;
};

export default logNameGenerator;
