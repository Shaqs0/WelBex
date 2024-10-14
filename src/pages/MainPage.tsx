import { noicePng, telegramIcon, viberIcon, whatsappIcon } from '../assets';

export function MainPage() {
	return (
		<div className="min-w-screen min-h-screen bg-black relative overflow-hidden">
			<div data-qa="background circles">
				<div className="custom-background bg-purple-color top-[0%] right-[20%]"></div>
				<div className="custom-background bg-gold-color top-[65%] left-[40%]"></div>
				<div className="custom-background bg-red-color top-[30%] left-[-5%]"></div>
			</div>

			{/* Основной контент с текстом */}
			<div className="absolute w-png-width h-png-height flex items-center justify-center bg-white bg-opacity-5 border-opacity-20">
				<img 
					src={noicePng} 
					alt="" 
					className="absolute z-0 w-png-width h-png-height blur-3xl opacity-30" 
				/>
				<div className="absolute z-10 w-80">
					{/* Блок с текстом */}
					<div className="flex flex-col items-start"> 
						<p className="text-grey-color font-inter text-5xl font-normal leading-12">Зарабатывайте больше</p>
						<p className="flex text-5xl font-inter font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FCB045] to-[#FF3F78] mt-3">
							с AmoCRM.
						</p>
						<p className="flex text-lg font-montserrat text-grey-color font-light mt-7">Развиваем и контролируем продажи за вас</p>
					</div>
				</div>
			</div>

			{/* Шапка сайта с логотипом и контактами */}
			<div className="z-10 flex justify-center pt-14 px-3">
				<div className="flex justify-between items-center w-full lg:w-base-width" data-qa="header">
					{/* Логотип и подпись */}
					<div className="flex flex-col items-start gap-1 pl-3">
						<div className="flex items-center gap-3">
							<img src="src/assets/logo.svg" alt="Logo" className="w-9 lg:w-9 md:w-8" />
							<img src="src/assets/name_logo.svg" className="w-24 lg:w-24 md:w-20" />
						</div>
						<p className="text-grey-color text-xs lg:text-xs font-light w-44 mt-3">
							крупный интегратор AmoCRM в Росcии и ещё 8 странах
						</p>
					</div>

					{/* Меню навигации */}
					<div className="flex ml-0 lg:ml-0 md:-ml-10">
						<ul className="flex gap-8 lg:gap-8 md:gap-3 font-inter text-grey-color text-base lg:text-base md:text-sm font-medium mb-12">
							<li><a href="#">Услуги</a></li>
							<li><a href="#">Виджеты</a></li>
							<li><a href="#">Интеграция</a></li>
							<li><a href="#">Кейсы</a></li>
							<li><a href="#">Сертификаты</a></li>
						</ul>
					</div>

					{/* Контакты */}
					<div className="flex items-center gap-7 lg:gap-7 md:gap-3 pr-3">
						<p className="text-white font-inter text-base lg:text-base md:text-sm font-light mb-11">+7 495 471-41-63</p>
						<div className="flex gap-5 md:gap-3 h-5 mb-11">
							<img src={telegramIcon} alt="Telegram" />
							<img src={viberIcon} alt="Viber" />
							<img src={whatsappIcon} alt="WhatsApp" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
