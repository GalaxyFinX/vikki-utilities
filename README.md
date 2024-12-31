# vikki-ulitilies

## Storage Module

The `Storage` class provides a simple interface for storing and retrieving data using the MMKV storage engine. It supports both local storage and in-memory storage.

### Methods

- `init()`: Initializes the storage instance and sets up the encryption key.
- `save(key: StorageKeyType, value: any)`: Saves a value to local storage under the specified key.
- `saveToMemory(key: MemoryKeyType, value: any)`: Saves a value to in-memory storage under the specified key.
- `retrieve(key: StorageKeyType | MemoryKeyType)`: Retrieves a value from local or in-memory storage.
- `clear(key: StorageKeyType | MemoryKeyType)`: Clears a value from local and in-memory storage.
- `clearMemory()`: Clears all in-memory storage.
- `clearLocal()`: Clears all local storage.
- `clearAll()`: Clears both local and in-memory storage, preserving whitelisted keys.
- `reset()`: Resets the storage by clearing all data and reinitializing.

## Encryption Module

The `encryption.ts` file provides functions for encrypting and decrypting data using AES encryption, as well as verifying signatures.

### Functions

- `AESEncrypt(data: any, secretKey: string)`: Encrypts the provided data using AES encryption and the specified secret key.
- `AESDecrypt(cipher_text: string, secretKey: string)`: Decrypts the provided cipher text using AES decryption and the specified secret key.
- `verifySignature(data: string, signature: string, publicKey: string)`: Verifies a signature against the provided data and public key.

## Device Module

The `device.ts` file provides a `Device` class that encapsulates information about the device on which the application is running. It utilizes the `react-native-device-info` library to gather various device-related details.

### Class

- `Device`: A class that manages device information and provides methods to initialize and retrieve device details.

### Properties

- `ID`: A unique identifier for the device.
- `HASH`: A hash value for the device, used for verification.
- `APP_VERSION`: The version of the application running on the device.
- `APP_BUNDLE_ID`: The bundle ID of the application.
- `INFO`: An object containing various details about the device, including:
  - `deviceId`: The unique device ID.
  - `brand`: The brand of the device.
  - `model`: The model of the device.
  - `isTablet`: A boolean indicating if the device is a tablet.
  - `systemName`: The name of the operating system.
  - `localTimeZone`: The local time zone of the device.
  - `screenResolution`: The resolution of the device's screen.
  - `systemVersion`: The version of the operating system.
  - `buildId`: The build ID of the application.
  - `serialNumber`: The serial number of the device.
  - `isEmulator`: A boolean indicating if the device is an emulator.
  - `manufacturer`: The manufacturer of the device.
  - `isCameraPresent`: A boolean indicating if the device has a camera.
  - `buildNumber`: The build number of the application.

### Methods

- `init()`: Initializes the device instance and retrieves device information asynchronously. This includes fetching the unique device ID, app version, and other relevant details.


## Emulator Detector Module

The `emulator-detector.ts` file provides functions to detect if the application is running on an Android emulator. It utilizes the `react-native-device-info` and `react-native` libraries to gather device-related information.

### Functions

- `isAndroidEmulator()`: An asynchronous function that checks various device properties and files to determine if the application is running on an Android emulator.

### Helper Functions

- `checkBasic()`: Checks basic device properties such as product, bootloader, brand, device, model, and hardware to assess if the device is likely an emulator.
- `checkAdvanced()`: Asynchronously checks for the presence of specific files associated with known emulators.
- `checkModel()`: Checks the device model against known emulator models.
- `checkManufacturer()`: Checks the manufacturer of the device for known emulator manufacturers.
- `checkHardware()`: Checks the hardware type for known emulator hardware.
- `checkProduct()`: Checks the product name for known emulator products.
- `checkBootLoader()`: Checks the bootloader for signs of an emulator.
- `checkOther()`: Checks other device properties for additional signs of an emulator.
- `checkFiles(files: string[])`: Asynchronously checks for the existence of specified files.

## Share View Shot Module

The `share-view-shot.ts` file provides functions for capturing a view as an image and sharing it or saving it to the device. It utilizes the `react-native-view-shot`, `react-native-share`, and `react-native-fs` libraries.

### Functions

- `captureViewAndShare(view?: ViewShot | null, title: string, fileName: string)`: Asynchronously captures a view and shares it using the specified title and file name.
- `saveViewShot(view?: ViewShot | null, fileName: string)`: Asynchronously captures a view and saves it to the device's camera roll.

### Constants

- `VIEW_SHOT_OPTION`: An object containing options for capturing the view, including format, quality, and result type.

## Permissions Module

The `permissions.ts` file provides functions to check and request permissions for various features in the application. It utilizes the `react-native-permissions` library.

### Functions

- `checkAndRequestPermission(permission: Permission)`: Asynchronously checks the status of a specified permission and requests it if it is denied. Returns the final status of the permission.

## Location Module

The `location.ts` file provides a function to get the current geographical location of the device. It utilizes the `@react-native-community/geolocation` library.

### Functions

- `getCurrentLocation()`: Returns a promise that resolves with the current location of the device or rejects with an error if the location cannot be retrieved.