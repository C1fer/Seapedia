import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useResultContext } from '../context/ResultContextProvider';
import { Loading } from './loading';

export const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();
  const apikey = '643f592719f0755d0a63abc1';

  useEffect(() => {

    if (searchTerm !== '') {
      getResults(`${location.pathname}?api_key=${apikey}&q=${searchTerm}&gl=DO&hl=ES`);
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
            <img src={original} alt={title} loading="lazy" className=" object-cover h-96 w-96" />
            <p className="sm:w-[23rem] w-[23rem] truncate text-base mt-2">{title}</p>
          </a>
        ))}
      </div>
    );
    case '/news':
      return (
        <div className="sm:px-56 flex flex-wrap justify-between items-center space-y-6">
          {results?.news_results?.map(({title, source, snippet, url, lastUpdated, imgSrc }, index) => (
            <div key={index} className="md:w-2/5 w-full ">
              <p>
                {source}
              </p>        
              <a href={url} target="_blank" rel="noreferrer">
                <p className="text-lg font-semibold hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
              <p>
                {snippet}
              </p>
              <img src={imgSrc} alt={title} loading="lazy" className=" object-cover h-[92px] w-[92px]" />
              <p className='mt-1 text-sm text-slate-500'>
                  {lastUpdated}
              </p>  
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
                <p className='text-lg font-semibold hover:underline dark:text-blue-300 text-blue-700 truncate ...'>{title}</p>
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
