import React, { Component } from 'react';

class BookList extends Component {
	state = {};
	render() {
		return (
			<div className='book-list'>
				<ul>
					<li>The way of kings</li>
					<li>The of the wind</li>
					<li>The final empire</li>
				</ul>
			</div>
		);
	}
}

export default BookList;
