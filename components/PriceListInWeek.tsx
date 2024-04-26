export type TPriceListInWeek = {
	PriceBase: number;
	Periods: {
		Price: number;
		WeekdayFrom: number;
		WeekdayTo: number;
		TimeFrom: string;
		TimeTo: string;
	}[];
};

export const PriceListInWeek = ({ data }: { data: TPriceListInWeek }) => {
	const daysInWeek = ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"];
	const daysPerWeek = 7;
	const minutesPerWeek = 1440;

	const countDays = (weekdayFrom: number, weekdayTo: number) => {
		return weekdayTo - weekdayFrom + 1;
	};

	const getMinutes = (timeFrom: string, timeTo: string) => {
		const timeFromArray = timeFrom.split(":");

		const minutesFrom =
			Number(timeFromArray[0]) * 60 + Number(timeFromArray[1]);

		return getMinutesOffset(timeTo) - minutesFrom;
	};

	const getMinutesOffset = (timeFrom: string) => {
		const timeFromArray = timeFrom.split(":");

		return Number(timeFromArray[0]) * 60 + Number(timeFromArray[1]);
	};

	const getColorByPrice = (price: number) => {
		if (price < 10) {
			return { backgroundColor: "#f87171", color: "white" };
		}

		if (price < 20) {
			return { backgroundColor: "#dc2626", color: "white" };
		}

		return { backgroundColor: "#991b1b", color: "white" };
	};

	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<h2 className="text-lg font-bold text-slate-700">
					Přehled tarifních cen
				</h2>
				<button className="bg-slate-500 px-3 py-1.5 text-white">
					Přidat nový čas
				</button>
			</div>
			<div className="grid grid-cols-8 grid-rows-12 items-stretch justify-center text-center">
				<div className="col-start-1 row-start-1">&nbsp;</div>
				<div className="row-span-12 row-start-2 grid items-center justify-center text-sm">
					<div>00:00</div>
					<div>03:00</div>
					<div>06:00</div>
					<div>09:00</div>
					<div>12:00</div>
					<div>15:00</div>
					<div>18:00</div>
					<div>21:00</div>
					<div>24:00</div>
				</div>
				{daysInWeek.map((day, index) => (
					<div
						key={index}
						className={[
							"text-sm",
							daysInWeek.length === index + 1
								? "border-r-0"
								: "border-r",
						].join(" ")}
					>
						{day}
					</div>
				))}
				<div className="col-span-7 row-span-11 bg-green-100 text-sm">
					<div className="relative grid h-full grid-cols-7 grid-rows-11">
						{daysInWeek.map((day, index) => (
							<div
								key={index}
								className={[
									"row-span-full text-sm",
									daysInWeek.length === index + 1
										? "border-r-0"
										: "border-r",
								].join(" ")}
							></div>
						))}
						{data?.Periods?.map((period: any, index: number) => (
							<div
								key={index}
								className="absolute flex flex-col items-center justify-center overflow-hidden text-sm"
								style={{
									left: `${(100 / daysPerWeek) * period.WeekdayFrom}%`,
									width: `${(100 / daysPerWeek) * countDays(period.WeekdayFrom, period.WeekdayTo)}%`,
									top: `${(100 / minutesPerWeek) * getMinutesOffset(period.TimeFrom)}%`,
									height: `${(100 / minutesPerWeek) * getMinutes(period.TimeFrom, period.TimeTo)}%`,
									...getColorByPrice(period.Price),
								}}
							>
								<div>
									{`${period.TimeFrom} - ${period.TimeTo}`}
								</div>
								<div>Cena: {period?.Price}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
