import { Link } from 'react-router-dom';
import './Button.css';

function Button({ text, to, btnType }) {
	return (
		<Link to={to} className={`btn btn-${btnType}`}>
			{text}
		</Link>
	);
}
export default Button;
