import React, { useState } from 'react';

const NewSongForm = () => {
	return (
		<form>
			<label>Song name:</label>
			<input type='text' required />
			<input type='submit' value='Add song' />
		</form>
	);
};

export default NewSongForm;
