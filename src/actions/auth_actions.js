import { FACEBOOK_LOGIN_SUCCESS } from './types';

import { AsyncStorage } from 'react-native';

export const facebookLogin = () => async (dispatch) => {
  let token = await AsyncStorage.getItem('fb_token');

  if (token) {
    // Dispatch
  } else {
    // Login Process
  }
}