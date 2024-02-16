import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Main from '../components/section/Main'

import VideoSearch from '../components/video/VideoSearch'
import { fetchFromAPI } from '../utils/api'

const Search = () => {  

    const {searchID}=useParams();
    const [videos, setVideos] = useState([]);
    const [nextPageToken, setNextPageToken] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setVideos([]);
        fetchVideos(searchID);   
        setLoading(true);
    }, [searchID]); 

    const fetchVideos = (query, pageToken = '') => {
        fetchFromAPI(`search?part=snippet&type=video&q=${query}&pageToken=${pageToken}`)
            .then((data)=> {
                console.log(data)
                setNextPageToken(data.nextPageToken);
                setVideos((prevVideos) => [...prevVideos, ...data.items]) ;
                setLoading(false);
            })
            .catch((error)=>{
                console.log('Error fetching data', error);
                setLoading(false);
            })
    }

    const handleLoadMore = () => {
        if(nextPageToken){
            fetchVideos(searchID, nextPageToken)
        }
    }

    const searchPageClass = loading ? 'isLoading' : 'isLoaded'

  return (
    <Main
        title= '유튜브 검색'
        description='유튜브 검색 결과입니다.'
    >
        <section id='searchPage' className={searchPageClass}>
            <h2> <em>{searchID}</em> 검색 결과입니다.</h2>
            <div className="video__inner search">
                <VideoSearch videos={videos}/>
            </div>
            <div className="video__more">
                {nextPageToken && (
                    <button onClick={handleLoadMore}>더보기</button>
                )}
            </div>
        </section>

    </Main>
  )
}

export default Search