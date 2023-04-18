import React, {createContext, useContext, useState} from "react";

const ResultContext = createContext();
const baseUrl = 'https://api.serpdog.io';


export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('Gatos');

    // get videos, images...
    const getResults = async (type) => {
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET'

        });
        
        // mostrar resultado
        const data = await response.json();

        setResults(data);
        setIsLoading(false);
    }
    return(
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);