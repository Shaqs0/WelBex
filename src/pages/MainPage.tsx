import { telegramIcon, viberIcon, whatsappIcon } from '../assets';

export function MainPage() {
	return (
		<div className="min-w-screen min-h-screen bg-black relative overflow-hidden">
			<div>
				<div className="custom-background bg-purple-color w-64 h-64 top-[0%] right-[20%]"></div>
				<div className="custom-background bg-gold-color w-64 h-64 top-[65%] left-[40%]"></div>
				<div className="custom-background bg-red-color w-64 h-64 top-[30%] left-[-5%]"></div>
			</div>

			<div className="z-10 flex justify-center pt-14 px-3">
				<div className="flex justify-between items-center w-full lg:w-base-width" data-qa='header'>

					<div className="flex flex-col items-start gap-1">
						<div className="flex items-center gap-3 pr-3">
							<img src="src/assets/logo.svg" alt="Logo" className="w-9 lg:w-9 md:w-8" />
							<img src="src/assets/name_logo.svg" className="w-24 lg:w-24 md:w-20" />
						</div>
						<p className="text-grey-color text-xs lg:text-xs md:text-[10px] font-light w-44 mt-3">крупный интегратор AmoCRM в Росcии и ещё 8 странах</p>
					</div>

					<div className='flex ml-0 lg:ml-0 md:-ml-10'>
						<ul className="flex gap-8 lg:gap-8 md:gap-3 font-inter text-grey-color text-base lg:text-base md:text-sm font-medium mb-12">
							<li><a href="#">Услуги</a></li>
							<li><a href="#">Виджеты</a></li>
							<li><a href="#">Интеграция</a></li>
							<li><a href="#">Кейсы</a></li>
							<li><a href="#">Сертификаты</a></li>
						</ul>
					</div>

					<div className="flex items-center gap-7 lg:gap-7 md:gap-3 pr-3">
						<p className="text-white font-inter text-base lg:text-base md:text-sm font-light mb-11">+7 495 471-41-63</p>
						<div className="flex gap-5 lg:gap-5 md:gap-3 h-5 mb-11">
							<img src={telegramIcon} alt="Telegram" />
							<img src={viberIcon} alt="Viber" />
							<img src={whatsappIcon} alt="WhatsApp" />
						</div>
					</div>
				</div>
			</div>
			<div className='' data-qa='content'>

			</div>
		</div>
	);
}
