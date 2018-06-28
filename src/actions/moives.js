import {FETCH_MOIVES_DONE, FETCH_MOIVES_REQUEST} from '../constants/actions';

export const fetchMoivesDone = (data) => {
	return {
		type: FETCH_MOIVES_DONE,
		payload: data
	}
}


export const fetchMoivesRequest = () => {
	return {
		type: FETCH_MOIVES_REQUEST,
	}
}
