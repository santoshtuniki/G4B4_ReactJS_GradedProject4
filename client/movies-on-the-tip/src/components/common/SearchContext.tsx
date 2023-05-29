import React, { ReactNode, createContext, useState, useContext } from 'react';
import SearchContextType from '../../model/SearchContextType';

type Props = {
	children: ReactNode
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

const SearchProvider = ({ children }: Props) => {
	const [searchText, setSearchText] = useState('');

	return (
		<SearchContext.Provider value={{ searchText, setSearchText }}>
			{children}
		</SearchContext.Provider>
	);
};

const useSearchContext = () => {
	const context = useContext(SearchContext);
	if (!context) {
		throw new Error(
			"useSearchContext must be used within a SearchProvider"
		);
	}
	return context;
};

export {
	SearchContext,
	SearchProvider,
	useSearchContext
}