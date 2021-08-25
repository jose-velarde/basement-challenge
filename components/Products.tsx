import Image from 'next/image';

import item1 from '../public/products/shirt.png';
import item2 from '../public/products/hoodie.png';
import item3 from '../public/products/cap.png';

import AddToCartSvg from './svg/AddToCartSvg';

interface Iproduct {
	id: string;
	name: string;
	description: string;
	image: StaticImageData;
	price: string;
	category: string[];
}

type Props = {
	addToCart: (val: Iproduct) => void;
};

const products = {
	product1: {
		id: '1',
		name: 'Black t-shirt',
		description: 'Unisex Basic Softstyle T-shirt',
		image: item1,
		price: '7.95',
		category: ['t-shirt', 'summer'],
	},
	product2: {
		id: '2',
		name: 'Black hoodie',
		description: 'Unisex Lightweight Hoodie',
		image: item2,
		price: '13',
		category: ['hoodie', 'winter'],
	},
	product3: {
		id: '3',
		name: 'Black cap',
		description: 'Basement Logo Cap',
		image: item3,
		price: '7.95',
		category: ['cap', 'summer'],
	},
};

const Products: React.FC<Props> = ({addToCart}) => {
	return (
		<ul className="flex flex-col items-center justify-between w-full px-4 text-2xl sm:text-xl md:text-2xl sm:flex-row">
			{Object.entries(products).map(([, product]) => {
				return (
					<li key={'product' + product.id} className="py-4 sm:px-4">
						<button className="relative flex group" onClick={() => addToCart(product)}>
							<Image
								alt={'product' + product.id}
								className="border-white bg-gradient-to-t from-dark to-light"
								src={product.image}
							/>
							<div className="absolute invisible w-8/12 transform translate-x-1/2 top-1/3 right-1/2 group-hover:visible">
								<AddToCartSvg />
							</div>
						</button>
						<ul className="relative flex justify-between pt-3 border-white -inset-y-1 border-t-3px">
							<li>{product.name}</li>
							<li>${product.price}</li>
						</ul>
					</li>
				);
			})}
		</ul>
	);
};

export default Products;
