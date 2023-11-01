import { env } from 'process';
import { getResponseMessage } from './utils';

const handleApiResponse = async (response: Response) => {
  try {
    const data = await response.json();
    // console.log(data)

    if (!data.errors) {
      return {
        data: data,
        message: 'Operation successful',
        success: true,
      };
    }

    const errorMessage = await getResponseMessage(data);
    // console.log(errorMessage)
    return {
      message: errorMessage,
      success: false,
    };
  } catch (err) {
    // console.error(err)
    return {
      message: 'Something went wrong',
      success: false,
    };
  }
};

export const sendDirectusApiRequest = async (
  endpoint: string,
  method: string,
  bodyData: any,
  useAuthHeader: boolean = false,
  userToken: string | undefined = undefined,
  cache: boolean = false
) => {
  try {
    let headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (useAuthHeader) {
      const token = userToken ? userToken : env.DIRECTUS_STATIC_TOKEN;
      headers['Authorization'] = `Bearer ${token}`;
    }

    if (!cache) {
      const response = await fetch(`${env.DIRECTUS_URL}${endpoint}`, {
        method: method,
        headers: headers,
        body: bodyData ? JSON.stringify(bodyData) : undefined,
        cache: 'no-store',
      });
      // console.log("response from", endpoint, "is : ", JSON.stringify(response))

      return handleApiResponse(response);
    }

    const response = await fetch(`${env.DIRECTUS_URL}${endpoint}`, {
      method: method,
      headers: headers,
      body: bodyData ? JSON.stringify(bodyData) : undefined,
    });
    // console.log("response from", endpoint, "is : ", JSON.stringify(response))

    return handleApiResponse(response);
  } catch (err) {
    // console.error(err)
    return {
      message: 'Something went wrong',
      success: false,
    };
  }
};
