import Accordion from './components/Accordion';

function App() {
	return (
		<main>
			<section>
				<h2>Why work with us?</h2>
				<Accordion className='accordion'>
					<Accordion.Item
						id='experience'
						className='accordion-item'
						title='We got 20yrs of experience'
					>
						<article>
							<p>You can't go wrong with us.</p>
							<p>We are in the business of making your life easier.</p>
						</article>
					</Accordion.Item>
					<Accordion.Item
						id='team'
						className='accordion-item'
						title='We are a team'
					>
						<article>
							<p>We are there for you.</p>
							<p>Our team is always here for you.</p>
						</article>
					</Accordion.Item>
				</Accordion>
			</section>
		</main>
	);
}

export default App;
