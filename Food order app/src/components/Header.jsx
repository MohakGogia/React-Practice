import { useContext } from 'react';
import Button from '../UI/Button';
import logoImg from '../assets/logo.jpg';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';

export default function Header() {
	const cartCtx = useContext(CartContext);
	const userProgressCtx = useContext(UserProgressContext);

	const totalItems = cartCtx.items.reduce((totalNoOfItems, item) => {
		return totalNoOfItems + item.quantity;
	}, 0);

	function showCart() {
		userProgressCtx.showCart();
	}

	return (
		<header id='main-header'>
			<div id='title'>
				<img src={logoImg} alt='restaurant' />
				<h1>Food app</h1>
			</div>
			<nav>
				<Button textOnly onClick={showCart}>Cart ({totalItems})</Button>
			</nav>
		</header>
	);
}
