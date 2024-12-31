import moment from 'moment';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from './vikkiverseV3';

export const getLocalTimeZone = () => {
  return moment().format('Z');
};

export const getScreenResolution = () => {
  return DEVICE_WIDTH + ' X ' + DEVICE_HEIGHT;
};
