export const useValidateForm = () => {
	// Validate email format
	const validateEmail = (email) => {
		// Handle simple anything@anything.com situation only
		const emailRegExp = /\S+@\S+\.\S+/;

		if (email !== '' && !email.match(emailRegExp)) {
			return false;
		}

		return true;
	};

	// Validate phone number format
	const validatePhone = (phone) => {
		const phoneRegExp = /^\d{10}$/;

		if (phone !== '' && !phone.match(phoneRegExp)) {
			return false;
		}

		return true;
	};

	// Validate form
	const validateForm = (errors) => {
		let valid = true;
		console.log(Object.values(errors));

		Object.values(errors).forEach((val) => {
			valid = val.length === 0 && valid;
		});

		return valid;
	};

	return { validateEmail, validateForm, validatePhone };
};
