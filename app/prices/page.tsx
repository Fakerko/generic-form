import { PriceListInWeek, TPriceListInWeek } from "@/components/PriceListInWeek";

/* 
TODO: Validation:

WeekdayFrom: 0-6
WeekdayTo: 0-6
TimeFrom: 00:00-24:00
TimeTo: 00:00-24:00

*/

const data = {
	PriceBase: 0,
	Periods: [
		{
			Price: 10,
			WeekdayFrom: 0,
			WeekdayTo: 1,
			TimeFrom: "01:00",
			TimeTo: "09:30",
		},
		{
			Price: 20,
			WeekdayFrom: 1,
			WeekdayTo: 2,
			TimeFrom: "10:29",
			TimeTo: "15:14",
		},
		{
			Price: 5,
			WeekdayFrom: 4,
			WeekdayTo: 5,
			TimeFrom: "10:29",
			TimeTo: "15:14",
		},
	],
} as TPriceListInWeek;

const Page = () => {
	return (
		<section className="mx-auto my-10 max-w-3xl px-4">
			<PriceListInWeek data={data} />
		</section>
	);
};

export default Page;
