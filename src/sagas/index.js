import {all, fork} from 'redux-saga/effects';

import moivesSagas from './moivesSaga';

export default function* sagas() {
	yield all([
		fork(moivesSagas)
	])
}
