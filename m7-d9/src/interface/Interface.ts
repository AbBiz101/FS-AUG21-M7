export interface IData {
	id: number;
	name: string;
	image: string;
	category: string;
	label: string;
	price: string;
	description: string;
	comments: [
		{
			id: number;
			rating: number;
			comment: string;
			author: string;
			date: string;
		},
	];
}
