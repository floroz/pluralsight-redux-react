import React from 'react';
import { render } from 'react-dom';

function HI() {
	return <p>Hi</p>;
}

render(<HI />, document.getElementById('app'));
