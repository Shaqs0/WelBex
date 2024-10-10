export function MainPage () {
	return (
		<div className="w-screen h-screen bg-black relative overflow-hidden">
			<div className="custom-background bg-purple-color w-64 h-64 top-[5%] right-[5%]"></div>
			<div className="custom-background bg-gold-color w-64 h-64 top-[40%] left-[40%]"></div>
			<div className="custom-background bg-red-color w-64 h-64 top-[70%] left-[65%]"></div>

			<div className="relative z-10">
				<div className="">
					<img src="src/assets/logo.svg" alt="Logo"></img>
				</div>
			</div>
		</div>
	);
}
