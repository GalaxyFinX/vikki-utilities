# vikki-ulitilies

// Start Generation Here
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
