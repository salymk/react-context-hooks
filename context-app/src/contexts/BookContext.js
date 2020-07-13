import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvieder = (props) => {
	const [books, setBooks] = useState([
		{ title: 'name of the wind', id: 1 },
		{ title: 'the way of the kings', id: 2 },
		{ title: 'the final empire', id: 3 },
		{ title: 'the heor of ages', id: 1 },
	]);
	return (
		<BookContext.Provider value={{ books }}>
			{props.children}
		</BookContext.Provider>
	);
};

export default BookContextProvieder;
