import Share, { type ShareOptions } from 'react-native-share';
import ViewShot, { type CaptureOptions } from 'react-native-view-shot';
import RNFS from 'react-native-fs';
import uuid from 'react-native-uuid';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import { IS_IOS } from '../constants';

const VIEW_SHOT_OPTION: CaptureOptions = {
  format: 'jpg',
  quality: 0.85,
  result: 'base64',
};

const captureViewAndShare = async (
  view?: ViewShot | null,
  title = 'VIKKI',
  fileName = uuid.v4().toString(),
) => {
  let url = '';

  try {
    if (!view) {
      return;
    }

    let base64 = await view.capture!();

    if (!base64) {
      return;
    }

    url = RNFS.CachesDirectoryPath + `/${fileName}.jpg`;
    await RNFS.writeFile(url, base64, 'base64');

    const options: ShareOptions = IS_IOS
      ? {
          activityItemSources: [
            {
              placeholderItem: { type: 'url', content: url },
              item: { default: { type: 'url', content: url } },
              subject: { default: title },
              linkMetadata: { title },
            },
          ],
        }
      : { url: `file://${url}` };
    await Share.open(options);
  } catch (err) {
  } finally {
    url && RNFS.unlink(url).catch();
  }
};

const saveViewShot = async (
  view?: ViewShot | null,
  fileName = uuid.v4().toString(),
) => {
  let url = '';

  try {
    if (!view) {
      return;
    }

    let base64 = await view.capture!();

    if (!base64) {
      return;
    }

    url = RNFS.CachesDirectoryPath + `/${fileName}.jpg`;
    await RNFS.writeFile(url, base64, 'base64');

    await CameraRoll.save(IS_IOS ? url : `file://${url}`);
  } catch (err) {
  } finally {
    url && RNFS.unlink(url).catch();
  }
};

export { VIEW_SHOT_OPTION, captureViewAndShare, saveViewShot };
