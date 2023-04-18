import React, {useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../context/ResultContextProvider';
import { Loading } from './loading';

export const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();
  const apikey = '643e219ffa3387e9f86288bf&q';


  useEffect(() => {

    if (searchTerm !== '') {
        getResults(`${location.pathname}?api_key=${apikey}=${searchTerm}`);
      }
    
    
  }, [searchTerm, location.pathname]);


  if(isLoading) return <Loading />;

  switch (location.pathname) {
    case '/search':
      return (
        <div className='flex flex-wrap justify between space-y-6 sm:px-56'>
          {results?.organic_results?.map(({ link, title, snippets }, index)=>(
            <div key={index} className='md:2/5 w-full'>
              <a href={link} target="_blank" rel="noreferrer">
                <p className='text-sm'>
                  {link}
                </p>
                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                  {title}
                </p>
                <p>
                  {snippets}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case '/images':
      return (
        <div className='flex flex-wrap justify-center items-center'>
          {results?.image_results?.map(({ link, title, original }, index)=>(
            <a href={link} target="_blank" key={index} rel="noreferrer" className="sm:p-3 p-5">
            <img src={original} alt={title} loading="lazy" />
            <p className="sm:w-36 w-36 break-words text-sm mt-2">{title}</p>
          </a>
        ))}
      </div>
    );
    case '/news':
      return (
        <div className="sm:px-56 flex flex-wrap justify-between items-center space-y-6">
          {results?.news_results?.map(({title, source, snippet }, index) => (
            <div key={index} className="md:w-2/5 w-full ">
              
                <p className="text-lg dark:text-blue-300 text-blue-700">
                  {title}
                </p>
                <p>
                  {snippet}
                </p>
              <div className="flex gap-4">
                <p>
                  {source}
                </p>              
                </div>
            </div>
          ))}
        </div>
      );
    case '/videos':
      return (
        <div className="flex flex-wrap ">
          {results?.video_results?.map(({link, title, displayed_link}, index) => (
            <div key={index} className="p-2">
              <a href={link} target="_blank" rel="noreferrer">
                <p>{displayed_link}</p>
                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>{title}</p>
              </a>
              <ReactPlayer url={link}  controls width="355px" height="200px" />
            </div>
          ))}
        </div>
      );
    default:
      return 'ERROR';
  }
}

export default Results
