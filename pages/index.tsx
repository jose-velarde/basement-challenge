import type {NextPage} from 'next';
import Image from 'next/image';
import {useState} from 'react';

import header from '../public/header.svg';
import footer from '../public/footer.svg';
import Products from '../components/Products';
import RollingText from '../components/RollingText';
import AppBar from '../components/AppBar';
import Cart from '../components/Cart';
interface Iproduct {
	id: string;
	name: string;
	description: string;
	image: StaticImageData;
	price: string;
	category: string[];
}

const Home: NextPage = () => {
	const [showModal, setShowModal] = useState(false);
	const [cart, setCart] = useState<Iproduct[]>([]);

	const handleAddToCart = (product: Iproduct) => {
		setCart((oldCart) => [...oldCart, product]);
	};

	return (
		<div className="flex justify-center w-screen h-full overflow-x-hidden bg-black">
			<div className="flex flex-col justify-between w-screen h-full lg:w-85vw">
				<div className="flex justify-between px-4 pt-8 pb-4 align-middle sm:px-8">
					<AppBar setShowModal={setShowModal} />
				</div>
				<div className="flex self-center px-4 py-2 text-center text-white sm:px-8 sm:py-8">
					<Image alt="header" src={header} />
				</div>
				<RollingText />
				<div className="flex flex-grow py-14">
					<Products addToCart={handleAddToCart} />
				</div>
				<div className="flex self-center px-4 pb-4 text-center text-white sm:px-8 sm:pb-6">
					<Image alt="footer" src={footer} />
				</div>
			</div>
			<Cart cart={cart} setShowModal={setShowModal} showModal={showModal} />
		</div>
	);
};

export default Home;
