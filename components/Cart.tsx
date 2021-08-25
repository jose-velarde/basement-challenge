import Image from 'next/image';
import {useState} from 'react';

import YourCartSvg from './svg/YourCartSvg';
import CheckoutLargeSvg from './svg/CheckoutLargeSvg';
import CartItem from './CartItem';

interface Iproduct {
	id: string;
	name: string;
	description: string;
	image: StaticImageData;
	price: string;
	category: string[];
}

type Props = {
	showModal: boolean;
	setShowModal: (val: boolean) => void;
	cart: Iproduct[];
};

const Cart: React.FC<Props> = ({showModal, setShowModal, cart}) => {
	const [size, setSize] = useState('');
	const [productCounter, setProductCounter] = useState(1);

	const decreaseProductCounter = (currentCount: number) => {
		if (currentCount - 1 >= 0) {
			setProductCounter(currentCount - 1);
		}
	};

	const increaseProductCounter = (currentCount: number) => {
		if (currentCount + 1 <= 5) {
			setProductCounter(currentCount + 1);
		}
	};
	const productPrice = 5;
	const subtotal = productCounter * productPrice;

	return showModal ? (
		<>
			<div className="absolute top-0 z-50 flex justify-end w-screen overflow-x-hidden  lg:w-85vw">
				<div className="flex justify-between flex-col w-7/12 bg-black border-b border-l max-h-screen overflow-y-auto">
					<div className="flex justify-end">
						<button
							className="flex items-center justify-center px-8 pt-10 pb-8 text-2xl sm:text-2xl sm:px-8"
							onClick={() => setShowModal(false)}
						>
							-&gt; CLOSE
						</button>
					</div>
					<div className="px-8">
						<YourCartSvg />
					</div>
					<ul className="flex flex-col flex-auto px-8 py-8">
						{cart.map((item, index) => {
							return <CartItem key={'product'} cartItem={item} />;
						})}
					</ul>
					<div className="flex items-center justify-between uppercase border-t border-solid sticky">
						<div className="px-8 py-6 text-4xl ">Total: $37.50</div>
						<div className="flex items-center px-8 py-6 border-l ">
							<button
								className="h-10 w-52"
								type="button"
								onClick={() => setShowModal(false)}
							>
								<CheckoutLargeSvg />
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="fixed inset-0 z-40 bg-black opacity-50" />
		</>
	) : null;
};

export default Cart;
