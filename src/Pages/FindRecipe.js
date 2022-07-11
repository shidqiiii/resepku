import React, { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate, useParams } from 'react-router-dom';
import { BaseApi } from '../Api/BaseApi';
import RecipeCategoryCard from '../Components/Home Page/RecipeCategoryCard';
import Loading from '../Components/Loading';

export default function FindRecipe() {
    const { key } = useParams();

    //Hit End Point (API)
    const getSearchResult = async (key) => {
        const data = await BaseApi.recipeFinder(key);
        if (data.status === true) {
            setSearchResult(data.results);
            setCurrent(data.results.slice(count.prev, count.next))
        }
    }
    useEffect(() => {
        getSearchResult(key);
    }, []);

    //Passing Data to State
    const [searchResult, setSearchResult] = useState([]);

    // Navigate Route
    const navigate = useNavigate();
    const navigateToRecipeDetail = (key) => {
        navigate(`/resep/${key}`);
        window.location.reload();
    };

    // Handle Infinity Scroll
    const [count, setCount] = useState({
        prev: 0,
        next: 10
    })
    const [hasMore, setHasMore] = useState(true);
    const [current, setCurrent] = useState([]);

    // Get Next Data
    const getMoreData = () => {
        // If all data is finished loading
        if (current.length === searchResult.length) {
            setHasMore(false);
        }

        setTimeout(() => {
            setCurrent([...current, ...searchResult.slice(count.prev + 10, count.next + 10)])
        }, 2000)

        setCount({
            prev: count.prev + 10,
            next: count.next + 10
        })
    }

    //Loading Data
    const LoadingData = () => {
        if (current !== null) {
            return (
                <InfiniteScroll
                    dataLength={current.length}
                    next={getMoreData}
                    hasMore={hasMore}
                    loader={<Loading />}
                >
                    <Container>
                        <Card.Title className='fw-bolder fs-3 my-5'>Hasil Pencarian dengan kata kunci : {key}</Card.Title>
                        <RecipeCategoryCard
                            recipe={current}
                            navigateToRecipeDetail={navigateToRecipeDetail}
                        />
                    </Container>
                </InfiniteScroll>
            )
        }
        return (<Loading />)
    }


    return (
        <>
            {LoadingData()}
        </>
    )
}
