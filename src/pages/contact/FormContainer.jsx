import { useState } from 'react';
import { useValidateForm } from '../../hooks/useValidateForm';
import { toast } from 'react-toastify';
import errorIcon from '../../assets/contact/desktop/icon-error.svg';

function FormContainer() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
		invalid: {
			name: '',
			email: '',
			phone: '',
			message: '',
		},
	});

	const { validateEmail, validateForm, validatePhone } = useValidateForm();

	const { name, email, phone, message, invalid } = formData;

	// Reset all fields
	const resetFields = () => {
		setFormData({
			name: '',
			phone: '',
			email: '',
			message: '',
			invalid: {
				name: '',
				email: '',
				phone: '',
				message: '',
			},
		});
	};

	// Handle onChange & validation
	const handleChange = (e) => {
		const { id, value } = e.target;
		let invalid = formData.invalid;

		switch (id) {
			case 'name':
				invalid.name = value.length === 0 ? "Can't be empty" : '';
				break;
			case 'message':
				invalid.message = value.length === 0 ? "Can't be empty" : '';
				break;
			case 'email':
				if (value === '') {
					invalid.email = "Can't be empty";
				} else {
					invalid.email = validateEmail(value) ? '' : 'Invalid email';
				}
				break;
			case 'phone':
				if (value === '') {
					invalid.phone = '';
				} else {
					invalid.phone = validatePhone(value) ? '' : 'Invalid phone number';
				}
				break;
			default:
				break;
		}

		setFormData((prevData) => ({
			...prevData,
			[id]: value,
			invalid,
		}));
	};

	// Handle Form Submit
	const handleSubmit = (e) => {
		e.preventDefault();

		const isSubmitable = name !== '' && message !== '' && email !== '';

		console.log(isSubmitable);

		if (!isSubmitable) {
			setFormData((prevData) => ({
				...prevData,
				invalid: {
					...prevData.invalid,
					name: name === '' ? "Can't be empty" : '',
					message: message === '' ? "Can't be empty" : '',
					email: email === '' ? "Can't be empty" : '',
				},
			}));
			toast.error('Invalid input - please try again');
		} else if (isSubmitable && validateForm(formData.invalid)) {
			toast.success(
				'Your message has been received! We will contact you as soon as possible'
			);
			resetFields();
		} else {
			toast.error('Invalid input - please try again');
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
						onChange={handleChange}
						id='name'
					/>
					{name === '' && invalid.message !== '' && (
						<div className='error-block flex'>
							<p>
								<em>{invalid.name}</em>
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
						onChange={handleChange}
						id='email'
					/>
					{((email === '' && invalid.email === "Can't be empty") ||
						(email !== '' && invalid.email === 'Invalid email')) && (
						<div className='error-block flex'>
							<p>
								<em>{invalid.email}</em>
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
						onChange={handleChange}
						id='phone'
					/>
					{invalid.phone !== '' && (
						<div className='error-block flex'>
							<p>
								<em>{invalid.phone}</em>
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
						onChange={handleChange}
						id='message'
					/>
					{message === '' && invalid.message !== '' && (
						<div className='error-block flex'>
							<p>
								<em>{invalid.message}</em>
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
