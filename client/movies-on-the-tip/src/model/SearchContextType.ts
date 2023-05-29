import { Dispatch, SetStateAction } from 'react';

export default interface SearchContextType {
	searchText: string;
	setSearchText: Dispatch<SetStateAction<string>>;
}