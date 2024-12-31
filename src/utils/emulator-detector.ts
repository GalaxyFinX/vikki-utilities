import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import RNFS from 'react-native-fs';

// const QEMU_DRIVERS = ['goldfish'];
const GENY_FILES = ['/dev/socket/genyd', '/dev/socket/baseband_genyd'];
const PIPES = ['/dev/socket/qemud', '/dev/qemu_pipe'];
const X86_FILES = [
  'ueventd.android_x86.rc',
  'x86.prop',
  'ueventd.ttVM_x86.rc',
  'init.ttVM_x86.rc',
  'fstab.ttVM_x86',
  'fstab.vbox86',
  'init.vbox86.rc',
  'ueventd.vbox86.rc',
];

const ANDY_FILES = ['fstab.andy', 'ueventd.andy.rc'];
const NOX_FILES = ['fstab.nox', 'init.nox.rc', 'ueventd.nox.rc'];
const SUSPICIOUS_INSTALLER_KEY = ['nox', 'bluestacks', 'microvirt'];
const SUSPICIOUS_FILES = [
  '/storage/emulated/0/storage/secure',
  '/storage/emulated/0/Android/data/com.android.ld.appstore',
  '/storage/emulated/0/Android/data/com.microvirt.launcher2',
  '/storage/emulated/0/Android/data/com.microvirt.guide',
];

export const isAndroidEmulator = async () => {
  if (Platform.OS === 'ios') {
    return false;
  }
  try {
    const flag =
      checkBasic() ||
      checkModel() ||
      checkManufacturer() ||
      checkHardware() ||
      checkProduct() ||
      checkBootLoader() ||
      checkOther() ||
      (await checkAdvanced()) ||
      checkPackageInstaller();
    return flag;
  } catch (e) {}

  return false;
};

const checkAdvanced = async () => {
  return (
    (await checkFiles(GENY_FILES)) ||
    (await checkFiles(ANDY_FILES)) ||
    (await checkFiles(NOX_FILES)) ||
    (await checkFiles(PIPES)) ||
    (await checkFiles(X86_FILES)) ||
    (await checkFiles(SUSPICIOUS_FILES))
  );
};

const checkBasic = () => {
  let rating = 0;
  const product = DeviceInfo.getProductSync();

  if (
    product === 'sdk_x86_64' ||
    product === 'sdk_google_phone_x86' ||
    product === 'sdk_google_phone_x86_64' ||
    product === 'sdk_google_phone_arm64' ||
    product === 'vbox86p'
  ) {
    rating++;
  }
  const bootLoader = DeviceInfo.getBootloaderSync();
  if (bootLoader === 'unknown') {
    rating++;
  }
  const brand = DeviceInfo.getBrand().toLowerCase();
  if (
    brand === 'generic' ||
    brand === 'android' ||
    brand === 'generic_arm64' ||
    brand === 'generic_x86' ||
    brand === 'generic_x86_64'
  ) {
    rating++;
  }
  const device = DeviceInfo.getDeviceSync();
  if (
    device === 'generic' ||
    device === 'generic_arm64' ||
    device === 'generic_x86' ||
    device === 'generic_x86_64' ||
    device === 'vbox86p' ||
    device === 'emu64a'
  ) {
    rating++;
  }
  const model = DeviceInfo.getModel();

  if (
    model === 'sdk' ||
    model === 'Android SDK built for arm64' ||
    model === 'Android SDK built for armv7' ||
    model === 'Android SDK built for x86' ||
    model === 'Android SDK built for x86_64'
  ) {
    rating++;
  }
  const hardware = DeviceInfo.getHardwareSync();
  if (hardware === 'ranchu') {
    rating++;
  }
  const fingerPrint = DeviceInfo.getFingerprintSync();

  if (
    fingerPrint.includes('sdk_google_phone_arm64') ||
    fingerPrint.includes('sdk_google_phone_armv7')
  ) {
    rating++;
  }

  return rating >= 2;
};

const checkModel = () => {
  const model = DeviceInfo.getModel();
  return (
    model.includes('google_sdk') ||
    model.toLowerCase().includes('droid4x') ||
    model.includes('Emulator') ||
    model.includes('Android SDK built for x86') ||
    model.startsWith('iToolsAVM')
  );
};
const checkManufacturer = () => {
  const manufacturer = DeviceInfo.getManufacturerSync();

  return (
    manufacturer.includes('Genymotion') || manufacturer.includes('iToolsAVM')
  );
};
const checkHardware = () => {
  const hardware = DeviceInfo.getHardwareSync();
  return (
    hardware === 'goldfish' ||
    hardware === 'vbox86' ||
    hardware.toLowerCase().includes('nox') ||
    hardware.startsWith('vbox86')
  );
};

const checkProduct = () => {
  const product = DeviceInfo.getProductSync();
  return (
    product === 'sdk' ||
    product === 'sdk_x86' ||
    product === 'vbox86p' ||
    product.toLowerCase().includes('nox') ||
    product.startsWith('google_sdk')
  );
};
const checkBootLoader = () => {
  const bootLoader = DeviceInfo.getBootloaderSync();
  return bootLoader.toLowerCase().includes('nox');
};

const checkOther = () => {
  const device = DeviceInfo.getDeviceSync();
  const model = DeviceInfo.getModel();
  const brand = DeviceInfo.getBrand();
  const host = DeviceInfo.getHostSync();
  const board = DeviceInfo.getDeviceId();

  return (
    device.startsWith('iToolsAVM') ||
    model.startsWith('iToolsAVM') ||
    brand.startsWith('generic') ||
    host.includes('Droid4x-BuildStation') ||
    board.toLowerCase().includes('nox')
  );
};

const checkFiles = async (files: string[]) => {
  for await (const file of files) {
    try {
      const exist = await RNFS.exists(file);
      if (exist) {
        return true;
      }
    } catch (e) {}
  }
  return false;
};

const checkPackageInstaller = () => {
  const packageInstaller = DeviceInfo.getInstallerPackageNameSync();
  if (packageInstaller === 'unknown') {
    return true;
  }
  for (const name of SUSPICIOUS_INSTALLER_KEY) {
    if (packageInstaller.includes(name)) {
      return true;
    }
  }
  return false;
};
