import DeviceInfo from 'react-native-device-info';
import RNOtpVerify from 'react-native-otp-verify';
import {
  IS_DEBUG_MODE,
  IS_IOS,
  IS_SIT,
  IS_UAT,
  STORAGE_KEY,
} from '../constants';
import { getLocalTimeZone, getScreenResolution } from './common';
import { isAndroidEmulator } from './emulator-detector';
import { Storage } from './storage';

const APP_VERSION_REGEX = /.*([0-9]+\.[0-9]+\.[0-9]+).*/;

class Device {
  ID: string = '';

  HASH: string = '';

  APP_VERSION: string = '';

  APP_BUNDLE_ID = DeviceInfo.getBundleId();

  INFO: Record<string, string | boolean> = {};

  init = async () => {
    const nativeAppVersion = DeviceInfo.getVersion();
    const versionMatches = nativeAppVersion.match(APP_VERSION_REGEX);
    this.APP_VERSION =
      versionMatches && versionMatches.length > 1
        ? (versionMatches[1] ?? '')
        : nativeAppVersion;
    //
    const mockDeviceId = Storage.retrieve(STORAGE_KEY.MOCK_DEVICE_ID);
    const realDeviceId = await DeviceInfo.getUniqueId();

    // TODO Thuc Phan enable for WS6
    this.ID =
      IS_DEBUG_MODE || IS_SIT || IS_UAT
        ? mockDeviceId || realDeviceId
        : realDeviceId;
    //
    if (!IS_IOS) {
      const deviceHashes = await RNOtpVerify.getHash();
      this.HASH = deviceHashes.length > 0 ? deviceHashes[0]! : '';
    } else {
      this.HASH = '';
    }
    this.INFO = {
      deviceId: this.ID,
      brand: DeviceInfo.getBrand(),
      model: DeviceInfo.getModel(),
      isTablet: DeviceInfo.isTablet(),
      systemName: DeviceInfo.getSystemName(),
      localTimeZone: getLocalTimeZone(),
      // TODO enable later
      // localLanguage: getCurrentLanguage(),
      screenResolution: getScreenResolution(),
      systemVersion: DeviceInfo.getSystemVersion(),
      buildId: await DeviceInfo.getBuildId(),
      serialNumber: await DeviceInfo.getSerialNumber(),
      isEmulator:
        (await DeviceInfo.isEmulator()) || (await isAndroidEmulator()),
      manufacturer: await DeviceInfo.getManufacturer(),
      isCameraPresent: await DeviceInfo.isCameraPresent(),
      buildNumber: DeviceInfo.getBuildNumber(),
    };
  };
}

const instance = new Device();
export { instance as Device };
