const RollingText = () => {
	return (
		<div className="relative inline-block border-t border-b border-white ">
			<ul className="flex h-full py-1 text-2xl font-medium sm:text-2xl md:text-3xl lg:text-4xl sm:py-3 w-75vw animate-marquee150vw md:animate-marquee75vw ">
				<li className="flex items-center justify-center flex-shrink-0 whitespace-no-wrap w-150vw sm:w-75vw">
					A man can&apos;t have enough basement. swag
				</li>
				<li className="flex items-center justify-center flex-shrink-0 whitespace-no-wrap w-150vw sm:w-75vw">
					A man can&apos;t have enough basement. swag
				</li>
			</ul>
			<div className="absolute lg:visible invisible w-50vw h-16 top-0 left-70% z-10 bg-gradient-to-r from-blackAlpha0 via-black to-blackAlpha1" />
			<div className="absolute lg:visible invisible w-50vw h-16 top-0 right-70% z-10 bg-gradient-to-l from-blackAlpha0 via-black to-blackAlpha1" />
		</div>
	);
};

export default RollingText;
