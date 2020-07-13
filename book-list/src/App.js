import React from 'react';
import BookContextProvider from './contexts/BookContext';

function App() {
	return (
		<div>
			<BookContextProvider>
				<Navbar />
			</BookContextProvider>
		</div>
	);
}

export default App;
