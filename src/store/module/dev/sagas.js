import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';
import { addNewDevSuccess } from './actions';

export function* addDev({ payload }) {
  const { github_username, techs, latitude, longitude } = payload.data;

  const response = yield call(api.post, 'devs', {
    github_username,
    techs,
    latitude,
    longitude
  });

  yield put(addNewDevSuccess(response.data));
}

export default all([takeLatest('@dev/ADD_NEW_DEV_REQUEST', addDev)]);

