import { useAccordionContext } from './Accordion';

export default function AccordionItem({ id, title, children, className }) {
	const { openItemId, toggleItem } = useAccordionContext();

	const isOpen = id === openItemId;

	return (
		<li className={className}>
			<h3
				className='accordion-item-title'
				id='local-guides'
				onClick={() => toggleItem(id)}
			>
				{title}
			</h3>
			<div
				className={
					isOpen ? 'accordion-item-content open' : 'accordion-item-content'
				}
			>
				{children}
			</div>
		</li>
	);
}
