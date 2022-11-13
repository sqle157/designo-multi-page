import './Error.css';

function Error() {
	document.body.className = 'error';

	return (
		<div className='error secondary-container grid'>
			<h1 className='error__msg'>404 Error - No Page Found</h1>
		</div>
	);
}
export default Error;
