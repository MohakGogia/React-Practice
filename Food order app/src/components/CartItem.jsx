import { currencyFormatter } from '../util';

export default function CartItem({
	name,
	quantity,
	price,
	onIncrease,
	onDecrease,
}) {
	return (
		<li className='cart-item'>
			<p>
				{name} - {quantity} x {currencyFormatter.format(price)}
			</p>
			<p className='cart-item-actions'>
				<button onClick={onDecrease}>-</button>
				<button>{quantity}</button>
				<button onClick={onIncrease}>+</button>
			</p>
		</li>
	);
}