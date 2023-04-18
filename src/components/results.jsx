import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useResultContext } from '../context/ResultContextProvider';
import { Loading } from './loading';

export const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();
  const apikey = '643ec04eb53405e9ff0f3386';

  useEffect(() => {

    if (searchTerm !== '') {
      getResults(`${location.pathname}?api_key=${apikey}&q=${searchTerm}&num=11&gl=DO&hl=ES`);
    }
    
  }, [searchTerm, location.pathname]);

  if(isLoading) return <Loading />;

  switch (location.pathname) {
    case '/search':
      return (
        <div className='flex flex-wrap justify between space-y-4 sm:px-56'>
          {results?.organic_results?.map(({ link, title, snippet }, index)=>(
            <div key={index} className='md:2/5 w-full'>
              <a href={link} target="_blank" rel="noreferrer">
                <p className='text-sm truncate ...'>
                  {link}
                </p>
                <p className='text-lg font-semibold hover:underline dark:text-blue-300 text-blue-700'>
                  {title}
                </p>
                <p className='text-sm'>
                  {link}
                </p>
                <p>
                  {snippet}
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
            <img src={original} alt={title} loading="lazy" className="h-auto w-auto max-h-64 max-w-64" />
            <p className="sm:w-36 w-64 break-words text-sm mt-2">{title}</p>
          </a>
        ))}
      </div>
    );
    case '/news':
      return (
        <div className="sm:px-56 flex flex-wrap justify-between items-center space-y-6">
          {results?.news_results?.map(({title, source, snippet, url }, index) => (
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
                <p>
                  {url}
                </p>             
                </div>
            </div>
          ))}
        </div>
      );
    case '/videos':
      return (
        <div className="sm:px-56 flex flex-wrap justify-between items-center space-y-6">
          {results?.video_results?.map(({link, title, displayed_link}, index) => (
            <div key={index} className="md:2/5 w-full m-1">
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
