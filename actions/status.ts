import { sendDirectusApiRequest } from '@/lib/directusApi';
import { Location } from '@/types/general';

const getStatus = async (location: Location) => {
  const endpoint = '/items/status';
  const method = 'GET';
  // const bodyData = {  location }; We don't need to send the location for now as we only have one location
  const bodyData = {};
  return sendDirectusApiRequest(endpoint, method, bodyData, true);
};
