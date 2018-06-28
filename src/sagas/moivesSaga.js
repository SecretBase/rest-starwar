import {fork, put, takeLatest} from 'redux-saga/effects';
import {fetchMoivesDone} from '../actions/moives';
import {FETCH_MOIVES_REQUEST} from '../constants/actions';

export function * fetchMoivesRequestSaga () {
	try {
		const response = yield fetch("https://swapi.co/api/films/").then(response => response.json());
		yield put(fetchMoivesDone(response.results))
		return response;
	} catch (error) {
		return error;
	}
}


export default function* moivesSagas () {
	yield fork(takeLatest, FETCH_MOIVES_REQUEST, fetchMoivesRequestSaga);
}
