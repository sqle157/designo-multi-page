import { useState } from 'react';
import { toast } from 'react-toastify';
import errorIcon from '../../assets/contact/desktop/icon-error.svg';

function FormContainer() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');

	// Set 4 local states to handle error for each input field
	const [nameErrorMsg, setNameErrorMsg] = useState('');
	const [emailErrorMsg, setEmailErrorMsg] = useState('');
	const [phoneErrorMsg, setPhoneErrorMsg] = useState('');
	const [textErrorMsg, setTextErrorMsg] = useState('');

	// Validate all the input fields
	const validateFields = () => {
		// Validate name & message fields
		if (name === '') setNameErrorMsg("Can't be empty");
		if (message === '') setTextErrorMsg("Can't be empty");

		// Validate Email Field
		if (email === '') {
			setEmailErrorMsg("Can't be empty");
		} else {
			validateEmail();
		}

		// Validate Phone Field
		if (phone !== '') {
			validatePhone();
		}
	};

	// Validate email format
	const validateEmail = () => {
		// Handle simple anything@anything.com situation only
		const emailRegExp = /\S+@\S+\.\S+/;

		if (email !== '' && !email.match(emailRegExp)) {
			setEmailErrorMsg('Invalid Email Address');
		}
	};

	// Validate phone number format
	const validatePhone = () => {
		const phoneRegExp = /^\d{10}$/;

		if (phone !== '' && !phone.match(phoneRegExp)) {
			setPhoneErrorMsg('Invalid Phone Number');
		}
	};

	// Reset all error message
	const resetErrorMsg = () => {
		setNameErrorMsg('');
		setTextErrorMsg('');
		setEmailErrorMsg('');
		setPhoneErrorMsg('');
	};

	// Reset all fields
	const resetFields = () => {
		setName('');
		setEmail('');
		setMessage('');
		setPhone('');
	};

	// Handle Form Submit
	const handleSubmit = (e) => {
		e.preventDefault();
		resetErrorMsg();
		validateFields();
		if (
			nameErrorMsg !== '' &&
			textErrorMsg !== '' &&
			phoneErrorMsg !== '' &&
			emailErrorMsg !== ''
		) {
			toast.success(
				'Your message has been received! We will contact you as soon as possible'
			);
			resetFields();
		}
	};

	return (
		<section className='form-container grid'>
			<div className='form__intro'>
				<h1>Contact Us</h1>
				<p className='text-white'>
					Ready to take it to the next level? Let’s talk about your project or
					idea and find out how we can help your business grow. If you are
					looking for unique digital experiences that’s relatable to your users,
					drop us a line.
				</p>
			</div>
			<form onSubmit={handleSubmit} className='contact-form flex'>
				<input
					autoComplete='false'
					name='hidden'
					type='text'
					style={{ display: 'none' }}></input>

				<div className='form-group flex'>
					<input
						type='text'
						placeholder='Name'
						value={name}
						onChange={(e) => setName(e.target.value)}
						id='name'
					/>
					{nameErrorMsg !== '' && (
						<div className='error-block flex'>
							<p>
								<em>{nameErrorMsg}</em>
							</p>
							<i>
								<img src={errorIcon} alt='' />
							</i>
						</div>
					)}
				</div>

				<div className='form-group flex'>
					<input
						type='email'
						placeholder='Email Address'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						id='email'
					/>
					{emailErrorMsg !== '' && (
						<div className='error-block flex'>
							<p>
								<em>{emailErrorMsg}</em>
							</p>
							<i>
								<img src={errorIcon} alt='' />
							</i>
						</div>
					)}
				</div>

				<div className='form-group flex'>
					<input
						type='number'
						placeholder='Phone'
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						id='phone'
					/>
					{phoneErrorMsg !== '' && (
						<div className='error-block flex'>
							<p>
								<em>{phoneErrorMsg}</em>
							</p>
							<i>
								<img src={errorIcon} alt='' />
							</i>
						</div>
					)}
				</div>

				<div className='form-group flex'>
					<textarea
						placeholder='Your Message'
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						id='message'
					/>
					{textErrorMsg !== '' && (
						<div className='error-block flex'>
							<p>
								<em>{textErrorMsg}</em>
							</p>
							<i>
								<img src={errorIcon} alt='' />
							</i>
						</div>
					)}
				</div>

				<button className='btn btn-white'>Submit</button>
			</form>
		</section>
	);
}
export default FormContainer;
