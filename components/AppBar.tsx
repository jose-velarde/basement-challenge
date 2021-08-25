import Image from 'next/image';

import BasementLogoMediumSvg from '../public/logo.svg';

import BasementLogoSmallSvg from './svg/BasementLogoSmallSvg';
import MiddleLogoSvg from './svg/MiddleLogoSvg';

type Props = {
	setShowModal: (val: boolean) => void;
};

const AppBar: React.FC<Props> = ({setShowModal}) => {
	// const [showModal, setShowModal] = useState<boolean>(false);

	return (
		<>
			<div className="hidden h-12 sm:flex">
				<Image alt="LogoMd" src={BasementLogoMediumSvg} />
			</div>
			<div className="h-12 sm:hidden">
				<BasementLogoSmallSvg />
			</div>
			<div className="self-center hidden h-6 sm:flex">
				<MiddleLogoSvg />
			</div>
			<button
				className="flex items-center justify-center h-10 px-6 border-2 rounded-full sm:text-lg sm:px-10 sm:h-12"
				type="button"
				onClick={() => setShowModal(true)}
			>
				CART (0)
			</button>
		</>
	);
};

export default AppBar;
