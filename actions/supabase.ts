'use server';

import { timeSince } from '@/lib/utils';
import supabase from '@/config/supabaseInstance';
import {
  fetchLocationsResponse,
  fetchStatusResponse,
  fetchStatusResponseError,
} from '@/types/general';

const hardCodedLocations = [
  {
    id: '1',
    location: 'makumbusho',
  },
  {
    id: '2',
    location: 'tabata',
  },
];

const fetchStatus = async (
  location: string
): Promise<fetchStatusResponse | Error> => {
  try {
    const table = `${location}_logs`;

    const { data, error } = await supabase
      .from(table)
      .select('*')
      .limit(1)
      .order('created_at', { ascending: false });

    if (error) {
      console.log(error);
      return new Error(error.message ?? 'Unknown error');
    }

    // console.log('the data is ', data);
    const lastUpdated = new Date(data[0].created_at);
    console.log('the last updated is ', lastUpdated);
    const now = new Date();
    const difference = Math.abs(now.getTime() - lastUpdated.getTime()) / 60000;
    // console.log('the total difference in minutes ', difference);

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
  } catch (error: any) {
    console.log(error);
    return new Error(error.message ?? 'Unknown error');
  }
};

async function fetchLocations(): Promise<fetchLocationsResponse[]> {
  const { data, error } = await supabase.from('locations').select('*');
  // console.log(error);
  if (error) {
    // throw error
    return hardCodedLocations;
  }
  return data;
}

export { fetchStatus, fetchLocations };
