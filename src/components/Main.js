import React, { PropTypes, Component } from 'react'

export default class Main extends Component {
	render() {
    const { children } = this.props
		return (
			<div className="h_w_100">
				<div className="h_w_100">
					{children}
				</div>
			</div>
		)
	}
}
