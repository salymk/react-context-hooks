import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
	const [books, setBooks] = useState([
		{ title: 'name of the wind', author: 'patrick rothfuss', id: 1 },
		{ title: 'the final empire', author: 'brandon sanderson', id: 2 },
	]);
};
