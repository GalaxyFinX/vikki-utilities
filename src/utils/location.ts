import Geolocation, {
  type GeolocationResponse,
} from '@react-native-community/geolocation';

export const getCurrentLocation = () => {
  try {
    return new Promise<GeolocationResponse | undefined>((resolve, reject) => {
      Geolocation.getCurrentPosition(
        (result) => {
          resolve(result as GeolocationResponse);
        },
        (error) => {
          reject(error);
        },
      );
    });
  } catch (err) {
    console.log(err);
  } finally {
    return undefined;
  }
};
