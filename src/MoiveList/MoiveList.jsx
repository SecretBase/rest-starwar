import React, {PureComponent} from 'react';
import {shape, string} from 'prop-types';

class MoiveItem extends PureComponent {
	static propTypes = {
		title: string.isRequired,
		opening_crawl: string.isRequired
	}
	render () {
		return (
			<li>
				<h2>{this.props.title}</h2>
				<p>{this.props.opening_crawl}</p>
			</li>
		)
	}
}

export default class MoiveList extends PureComponent {
	static propTypes = {
		movies: shape({
			id: string.isRequired,
			title: string.isRequired,
			opening_crawl: string.isRequired,
		})
	}

	render () {
		return (
			<ul>
				{this.props.moives.map(moive => <MoiveItem key={moive.id} {...moive}/>)}
			</ul>
		)
	}
}
