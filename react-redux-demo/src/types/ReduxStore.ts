import { Book } from './Book';

export interface ReduxStore {
	cart: {
		products: Book[];
	};
	user: {
		firstName: string;
	};
	books: {
		stock: Book[];
		isError: boolean;
		loading: boolean;
	};
}
