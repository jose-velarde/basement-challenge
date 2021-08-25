import Image from 'next/image';
import {useState} from 'react';

interface Iproduct {
	id: string;
	name: string;
	description: string;
	image: StaticImageData;
	price: string;
	category: string[];
}

type Props = {
	key: string;
	cartItem: Iproduct;
	// setCart: (val: Iproduct[]) => void;
};

const CartItem: React.FC<Props> = ({key, cartItem}) => {
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
	const subtotal = productCounter * Number(cartItem.price);

	return (
		<li key={key} className="flex p-4 pb-5 border">
			<div className="px-4 w-60 self-center bg-gradient-to-t from-dark to-light">
				<Image alt="product" src={cartItem.image} />
			</div>
			<div className="flex flex-col flex-1 pl-5">
				<div className="flex pb-1 text-4xl uppercase align-text-top">{cartItem.name}</div>
				<div className="flex flex-1 text-xl uppercase text-gray">
					{cartItem.description}
				</div>
				<div className="flex pb-1 text-xl">
					<div className="self-center">QUANTITY: </div>
					<div className="flex self-center border-2 mx-4 rounded-full">
						<button
							className="flex items-center justify-center h-8 w-7"
							type="button"
							onClick={() => decreaseProductCounter(productCounter)}
						>
							-
						</button>
						<div className="flex items-center justify-center h-8 w-5">
							{productCounter}
						</div>
						<button
							className="flex items-center justify-center h-8 w-7"
							type="button"
							onClick={() => increaseProductCounter(productCounter)}
						>
							+
						</button>
					</div>
				</div>
				<div className="flex justify-between">
					<div className="self-center text-xl">SIZE: </div>
					<div className="flex self-center flex-1 px-2 text-xl">
						<button
							className="flex items-center justify-center mx-2 focus:ring-2 ring-white rounded-full h-8 w-8"
							type="button"
							onClick={() => setSize('S')}
						>
							S
						</button>
						<button
							className="flex items-center justify-center mx-2 focus:ring-2 ring-white rounded-full h-8 w-8"
							type="button"
							onClick={() => setSize('M')}
						>
							M
						</button>
						<button
							className="flex items-center justify-center mx-2 focus:ring-2 ring-white rounded-full h-8 w-8"
							type="button"
							onClick={() => setSize('L')}
						>
							L
						</button>
						<button
							className="flex items-center justify-center mx-2 focus:ring-2 ring-white rounded-full h-8 w-8"
							type="button"
							onClick={() => setSize('XL')}
						>
							XL
						</button>
					</div>
					<div className="self-center text-right text-4xl w-32">${subtotal}</div>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
