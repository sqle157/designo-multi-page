import Button from '../button/Button';

function CallToAction() {
	return (
		<section className='secondary-container flex action'>
			<div>
				<h2 className='action__heading'>Let's talk about your project</h2>
				<p className='text-white'>
					Ready to take it to the next level? Contact us today and find out how our expertise
					can help your business grow.
				</p>
			</div>
			<div className='flex'>
				<Button text='Get in touch' to={'/contact'} btnType='white' />
			</div>
		</section>
	);
}
export default CallToAction;
