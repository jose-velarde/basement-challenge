import type {NextPage} from 'next';
import Image from 'next/image';

import logo from '../public/logo.svg';
import header from '../public/header.svg';
import footer from '../public/footer.svg';
import item1 from '../public/products/shirt.png';
import item2 from '../public/products/hoodie.png';
import item3 from '../public/products/cap.png';

const products = {
	product1: {
		id: '1',
		name: 'Black t-shirt',
		image: item1,
		price: '7.95',
		category: ['t-shirt', 'summer'],
	},
	product2: {
		id: '2',
		name: 'Black hoodie',
		image: item2,
		price: '13',
		category: ['hoodie', 'winter'],
	},
	product3: {
		id: '3',
		name: 'Black cap',
		image: item3,
		price: '7.95',
		category: ['cap', 'summer'],
	},
};

const MiddleThing = () => {
	return (
		<svg
			fill="none"
			height="auto"
			viewBox="0 0 284 24"
			width="auto"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M11.7812 11.9999H22.9715C22.9715 18.0637 17.9613 22.9796 11.7812 22.9796V11.9999Z"
				fill="white"
			/>
			<path
				d="M11.7811 1.02026V12H0.59082C0.59082 5.93621 5.60106 1.02026 11.7811 1.02026Z"
				fill="white"
			/>
			<path
				d="M11.7811 22.9797C17.9614 22.9797 22.9714 18.0639 22.9714 12C22.9714 5.93605 17.9614 1.02026 11.7811 1.02026C5.60089 1.02026 0.59082 5.93605 0.59082 12C0.59082 18.0639 5.60089 22.9797 11.7811 22.9797Z"
				stroke="white"
				strokeMiterlimit="10"
			/>
			<path
				d="M142.414 22.029C165.072 22.029 183.441 17.5389 183.441 12.0001C183.441 6.4612 165.072 1.97107 142.414 1.97107C119.755 1.97107 101.386 6.4612 101.386 12.0001C101.386 17.5389 119.755 22.029 142.414 22.029Z"
				stroke="white"
				strokeMiterlimit="10"
			/>
			<path
				d="M142.414 22.029C148.059 22.029 152.635 17.5389 152.635 12.0001C152.635 6.4612 148.059 1.97107 142.414 1.97107C136.769 1.97107 132.192 6.4612 132.192 12.0001C132.192 17.5389 136.769 22.029 142.414 22.029Z"
				stroke="white"
				strokeMiterlimit="10"
			/>
			<path
				d="M142.414 13.8435C143.451 13.8435 144.292 13.0182 144.292 12C144.292 10.9819 143.451 10.1566 142.414 10.1566C141.376 10.1566 140.535 10.9819 140.535 12C140.535 13.0182 141.376 13.8435 142.414 13.8435Z"
				fill="white"
			/>
			<path
				d="M243.233 24H205.632C204.297 24 203.21 22.9333 203.21 21.6232V2.37681C203.21 1.06667 204.297 0 205.632 0H243.233C244.568 0 245.655 1.06667 245.655 2.37681V21.6116C245.667 22.9333 244.58 24 243.233 24Z"
				fill="white"
			/>
			<path
				d="M210.253 15.003V12.9624L217.579 7.14209H221.254V13.1363H223.322V15.003H221.254V17.1711H218.323V15.003H210.253ZM218.312 9.29861H218.241L213.526 13.0667V13.1479H218.323V9.29861H218.312Z"
				fill="black"
			/>
			<path
				d="M238.813 17.171H234.985L230.754 12.1855L227.895 14.2493V17.171H224.87V6.91016H227.895V11.4087L233.969 6.91016H238.057L233.071 10.516L238.813 17.171Z"
				fill="black"
			/>
			<path
				d="M79.4312 24H41.8308C40.4955 24 39.4084 22.9333 39.4084 21.6232V2.37681C39.3965 1.06667 40.4837 0 41.8308 0H79.4312C80.7664 0 81.8536 1.06667 81.8536 2.37681V21.6116C81.8536 22.9333 80.7664 24 79.4312 24Z"
				fill="white"
			/>
			<path
				d="M59.6029 6.91016V17.171H56.5779V13.0087H49.2279V17.171H46.2029V6.91016H49.2279V10.829H56.5779V6.91016H59.6029Z"
				fill="black"
			/>
			<path
				d="M75.4726 12.0464C75.4726 15.7333 73.2274 17.171 69.1744 17.171H61.8126V6.91016H69.1744C73.2156 6.91016 75.4726 8.35943 75.4726 12.0464ZM64.8377 9.05508V15.0261H68.5126C70.8169 15.0261 72.1403 14.1797 72.1403 12.0348C72.1403 9.88987 70.8169 9.04349 68.5126 9.04349H64.8377V9.05508Z"
				fill="black"
			/>
			<path
				d="M283.705 22.5159C275.705 22.5159 267.717 22.5159 259.717 22.5159C259.705 22.5043 259.693 22.5043 259.681 22.4927C259.551 22.4463 259.469 22.3536 259.421 22.226C259.41 22.2028 259.41 22.1913 259.386 22.1681C259.386 22.1101 259.386 22.0637 259.386 22.0057C259.398 21.9942 259.41 21.971 259.41 21.9594C259.433 21.913 259.457 21.8666 259.481 21.8202C259.811 21.2521 260.142 20.684 260.485 20.1275C260.91 19.397 261.336 18.6782 261.761 17.9478C262.317 16.997 262.884 16.0463 263.439 15.0956C263.971 14.1913 264.503 13.2985 265.023 12.3942C265.578 11.4434 266.145 10.4811 266.712 9.53038C267.22 8.67241 267.729 7.81444 268.237 6.94488C268.804 5.99415 269.359 5.03183 269.926 4.08111C270.387 3.2927 270.848 2.51589 271.309 1.72748C271.38 1.61154 271.474 1.51879 271.604 1.48401C271.616 1.48401 271.616 1.47241 271.628 1.47241C271.687 1.47241 271.746 1.47241 271.805 1.47241C271.817 1.48401 271.841 1.48401 271.853 1.4956C271.959 1.53038 272.03 1.59995 272.089 1.6927C272.101 1.71589 272.124 1.73908 272.136 1.77386C272.455 2.31879 272.774 2.85212 273.093 3.39705C273.72 4.47531 274.358 5.54198 274.984 6.62024C275.894 8.16227 276.804 9.71589 277.714 11.2579C278.553 12.684 279.403 14.1217 280.242 15.5478C280.892 16.6608 281.554 17.7739 282.204 18.8869C282.783 19.8608 283.362 20.8463 283.929 21.8202C283.953 21.8666 283.988 21.9246 284 21.971C284 22.0521 284 22.1217 284 22.2028C283.953 22.342 283.87 22.4347 283.74 22.4927C283.728 22.5043 283.716 22.5043 283.705 22.5159ZM271.711 8.18546C270.99 8.18546 270.281 8.18546 269.56 8.18546C269.525 8.18546 269.501 8.18546 269.466 8.18546C269.418 8.18546 269.406 8.20864 269.406 8.25502C269.406 8.26661 269.406 8.27821 269.406 8.2898C269.418 8.41734 269.418 8.55647 269.43 8.6956C269.442 8.82314 269.454 8.95067 269.454 9.07821C269.466 9.19415 269.466 9.31009 269.477 9.43763C269.489 9.64633 269.513 9.84343 269.525 10.0521C269.536 10.2608 269.548 10.4811 269.56 10.6898C269.56 10.7826 269.572 10.8753 269.584 10.9681C269.596 11.084 269.607 11.1999 269.607 11.3275C269.619 11.455 269.619 11.5826 269.631 11.7101C269.631 11.8028 269.643 11.8956 269.655 11.9884C269.666 12.1159 269.678 12.2318 269.678 12.3594C269.69 12.4753 269.69 12.6028 269.702 12.7188C269.702 12.8115 269.714 12.9043 269.726 12.9971C269.737 13.1246 269.749 13.2521 269.749 13.3797C269.761 13.4956 269.761 13.6231 269.773 13.7391C269.773 13.8318 269.785 13.9246 269.796 14.0173C269.808 14.1449 269.82 14.2724 269.82 14.3999C269.832 14.5159 269.832 14.6434 269.844 14.7594C269.844 14.8521 269.856 14.9449 269.867 15.0376C269.879 15.1768 269.891 15.3159 269.891 15.455C269.903 15.5594 269.903 15.571 270.009 15.571C271.144 15.571 272.266 15.571 273.4 15.571C273.424 15.571 273.448 15.571 273.471 15.571C273.507 15.571 273.519 15.5478 273.53 15.5246C273.53 15.5014 273.53 15.4782 273.542 15.455C273.554 15.3391 273.554 15.2231 273.566 15.0956C273.578 14.9797 273.578 14.8637 273.59 14.7362C273.601 14.6202 273.601 14.5043 273.613 14.3999C273.625 14.2144 273.637 14.0173 273.66 13.8318C273.672 13.6347 273.684 13.4376 273.696 13.2289C273.696 13.1362 273.708 13.055 273.72 12.9623C273.731 12.8579 273.731 12.742 273.743 12.6376C273.755 12.5217 273.755 12.4057 273.767 12.2782C273.767 12.1855 273.779 12.1043 273.79 12.0115C273.802 11.8956 273.814 11.7797 273.814 11.6521C273.826 11.5362 273.826 11.4202 273.838 11.3159C273.85 11.2231 273.85 11.142 273.861 11.0492C273.873 10.9333 273.873 10.8289 273.885 10.713C273.897 10.597 273.897 10.4811 273.909 10.3652C273.909 10.284 273.92 10.2028 273.932 10.1101C273.944 9.99415 273.944 9.87821 273.956 9.75067C273.968 9.63473 273.968 9.51879 273.979 9.41444C273.979 9.33328 273.991 9.24053 274.003 9.15937C274.015 9.04343 274.015 8.92748 274.027 8.81154C274.039 8.67241 274.05 8.54488 274.05 8.40575C274.05 8.34777 274.062 8.3014 274.062 8.24343C274.062 8.20864 274.05 8.18546 274.003 8.18546C273.968 8.18546 273.944 8.18546 273.909 8.18546C273.141 8.18546 272.42 8.18546 271.711 8.18546ZM271.711 16.4405C271.014 16.4405 270.305 16.4405 269.607 16.4405C269.584 16.4405 269.548 16.4405 269.525 16.4405C269.489 16.4405 269.466 16.4637 269.466 16.4985C269.466 16.5333 269.466 16.5565 269.466 16.5913C269.466 17.1594 269.466 17.7275 269.466 18.2956C269.466 18.8869 269.466 19.4782 269.466 20.0579C269.466 20.0927 269.466 20.1275 269.466 20.1507C269.466 20.1855 269.489 20.197 269.513 20.197C269.548 20.197 269.584 20.197 269.607 20.197C270.86 20.197 272.124 20.197 273.377 20.197C273.519 20.197 273.672 20.197 273.814 20.197C273.838 20.197 273.861 20.197 273.885 20.197C273.909 20.197 273.932 20.1739 273.932 20.1507C273.932 20.1159 273.932 20.0811 273.932 20.0579C273.932 19.4318 273.932 18.7941 273.932 18.1681C273.932 17.6463 273.932 17.113 273.932 16.5913C273.932 16.5565 273.932 16.5333 273.932 16.4985C273.932 16.4637 273.909 16.4405 273.873 16.4405C273.85 16.4405 273.814 16.4405 273.79 16.4405C273.105 16.4405 272.408 16.4405 271.711 16.4405Z"
				fill="white"
			/>
		</svg>
	);
};

const Home: NextPage = () => {
	return (
		<div className="flex justify-center h-full w-screen bg-black overflow-x-hidden">
			<div className="flex flex-col justify-between h-full w-75vw ">
				<div className="flex justify-between align-middle">
					<Image alt="logo" src={logo} />
					<div className="flex self-center">
						<MiddleThing />
					</div>
					<button className="border-2 rounded-full py-1 px-5">CART</button>
				</div>
				<div className="flex self-center text-white text-center">
					<Image alt="header" src={header} />
				</div>
				<div className="h-8 ">
					<ul className="flex h-full font-medium	 xs:text-xl md:text-2xl lg:text-4xl tracking-wider animate-marquee ">
						<li className="flex justify-center items-center w-75vw flex-shrink-0 whitespace-no-wrap">
							A man can&apos;t have enough basement. swag
						</li>
						<li className="flex justify-center items-center">-</li>
						<li className="flex justify-center items-center w-75vw flex-shrink-0 whitespace-no-wrap">
							A man can&apos;t have enough basement. swag
						</li>
						<li className="flex justify-center items-center">-</li>
						<li className="flex justify-center items-center w-75vw flex-shrink-0 whitespace-no-wrap">
							A man can&apos;t have enough basement. swag
						</li>
						<li className="flex justify-center items-center">-</li>
						<li className="flex justify-center items-center w-75vw flex-shrink-0 whitespace-no-wrap">
							A man can&apos;t have enough basement. swag
						</li>
						<li className="flex justify-center items-center">-</li>
					</ul>
				</div>
				<div className="flex flex-grow">
					<ul className="flex flex-col sm:flex-row justify-between w-full px-4">
						<li className="px-4">
							<Image
								alt={'product' + products.product1.id}
								className="border-white bg-gradient-to-t from-dark to-light"
								src={products.product1.image}
							/>
							<ul className="relative -inset-y-2 flex justify-between border-white border-t-3px">
								<li>{products.product1.name}</li>
								<li>${products.product1.price}</li>
							</ul>
						</li>
						<li className="px-4">
							<Image
								alt={'product' + products.product2.id}
								className="bg-gradient-to-t from-dark to-light"
								src={products.product2.image}
							/>
							<ul className="relative -inset-y-2 flex justify-between border-white border-t-3px">
								<li>{products.product2.name}</li>
								<li>${products.product2.price}</li>
							</ul>
						</li>
						<li className="px-4">
							<Image
								alt={'product' + products.product3.id}
								className="bg-gradient-to-t from-dark to-light "
								src={products.product3.image}
							/>
							<ul className="relative -inset-y-2 flex justify-between border-white border-t-3px">
								<li>{products.product3.name}</li>
								<li>${products.product3.price}</li>
							</ul>
						</li>
					</ul>
				</div>
				<div className="flex self-center text-white text-center">
					<Image alt="footer" src={footer} />
				</div>
			</div>
		</div>
	);
};

export default Home;
