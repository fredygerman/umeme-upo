'use server';

import { timeSince } from '@/lib/utils';
import { fetchStatusResponse } from '@/types/general';
import { env } from 'process';

const fetchStatus = async (location: string): Promise<fetchStatusResponse> => {
  let headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  try {
    let url = '';

    switch (location) {
      case 'makumbusho':
        url = `${env.MAKUMBUSHO_STATUS_URL}` || '';
        break;
      default:
        throw new Error('Invalid location');
    }

    const res = await fetch(url, {
      method: 'GET',
      headers: headers,
      cache: 'no-store',
    });
    const data = await res.json();
    // console.log('the data is ', data);
    const lastUpdated = new Date(data.data[0].date_created);
    // console.log('the last updated is ', lastUpdated);
    const now = new Date();
    const difference = Math.abs(now.getTime() - lastUpdated.getTime()) / 60000;
    console.log('the total difference in minutes ', difference);

    const lastTimeOnline = timeSince(lastUpdated);
    console.log('the last online is ', lastTimeOnline);

    // console log the last updated and now in easier to read format
    // console.log('the last updated is ', lastUpdated.toLocaleString());
    // console.log('the now is ', now.toLocaleString());

    // if the difference is more than 6 minutes, return offline
    if (difference > 10) {
      console.log('the status is offline');
      return {
        lastTimeOnline: lastTimeOnline,
        status: 'off',
      };
    } else {
      console.log('the status is online');
      return {
        lastTimeOnline: lastTimeOnline,
        status: 'on',
      };
    }
  } catch (err) {
    console.log('something went wrong', err);
    return {
      lastTimeOnline: 'unknown',
      status: 'unknown',
    };
  }
};

//   Example response
//   {
//     "data": [
//         {
//             "id": 1109,
//             "status": "online",
//             "date_created": "2023-11-09T06:04:20.679Z"
//         }
//     ]
// }

export { fetchStatus };
