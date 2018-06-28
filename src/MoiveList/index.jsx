import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {fetchMoivesRequest} from '../actions/moives';
import MoiveList from './MoiveList'

class DataFetcher extends PureComponent {
	componentDidMount () {
		this.props.fetchMoivesRequest();
	}
	render () {
		return <MoiveList {...this.props} />
	}
}

const mapDispatchToProps = {
	fetchMoivesRequest
}

const mapStateToProps = (state) => {
	return {
		moives: state.moives
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DataFetcher)
