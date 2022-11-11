import { deviceQuery } from 'constants/deviceInfo';

export const applyMediaQuery = (...deviceList) =>
  '@media screen and ' + deviceList.map((device) => deviceQuery[device]).join(',');
