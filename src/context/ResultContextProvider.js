import React, {createContext, useContext, useState} from "react"; 
import supabase from "../components/supabase";
import { useLocation } from "react-router-dom";


const ResultContext = createContext();
const baseUrl = 'https://api.serpdog.io';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const loc = useLocation(); 
    let contentType = '';

    switch (loc.pathname){
        case '/search':
            contentType = '2';
            break;
        case '/images':
            contentType = '3';
            break;
        case '/news':
            contentType = '4';
            break;
        case '/videos':
            contentType = '5';
            break;
        default:
            break;
    }

  // get videos, images...
    const getResults = async (type) => {
      setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET'

        });
        const data = await response.json()
        setResults(data);
        setIsLoading(false);
        try {
            const {error} = await supabase
            .from('Searches')
            .insert([
                {
                    search_query: searchTerm,
                    id_content_type: contentType,
                    language: navigator.language,
                    country_code: data.meta.gl,
                    user_agent: navigator.userAgent   
                }])

            if (error) throw error;
        }
        catch (error) {
            console.error(error.message);
        } 
    }

    return(
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);