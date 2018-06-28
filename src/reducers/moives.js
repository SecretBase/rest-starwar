import {FETCH_MOIVES_DONE} from '../constants/actions';

const moives = (state = [], action) => {
	switch (action.type) {
		case FETCH_MOIVES_DONE:
			return action.payload;
		default:
			return state;
	}
}

export default moives;
