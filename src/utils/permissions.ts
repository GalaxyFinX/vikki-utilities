import {
  check,
  request,
  RESULTS,
  type Permission,
  type PermissionStatus,
} from 'react-native-permissions';

const checkAndRequestPermission = async (
  permission: Permission,
): Promise<PermissionStatus> => {
  let result = await check(permission);

  if (result === RESULTS.DENIED) {
    result = await request(permission);
  }

  return result;
};

export { checkAndRequestPermission };
