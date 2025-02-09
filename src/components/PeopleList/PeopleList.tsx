import React, { useState } from 'react';
import { CharacterProps } from '../../types/character';
import useFetch from '../../hooks/useFetch';
import Loader from './../Looader/Loader';
import ViewCard from '../ViewCard/ViewCard';
import Pagination from '../Pagination/Pagination';
import './PeopleList.css';

const PeopleList: React.FC = () => {
    const prefix = 'people';
    const [search, setSearch] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number | string>(1);
    const [param, setParam] = useState<string>('page'); 
    const { data, loading, error } = useFetch<CharacterProps>(prefix, `?${param}=${currentPage}`);

    const pageSwich = (i: number) => {
        setCurrentPage(i);
    }

    const hableSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParam('search');
        setCurrentPage(e.target.value);
        setSearch(e.target.value);
    }

    if (loading) return <div><Loader /></div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <div className='header'>
                <h2>Star Wars Characters</h2>
                <input
                    type="text"
                    placeholder="Search for a character..."
                    value={search}
                    onChange={(e) => hableSearch(e)}
                />
            </div>

            <Pagination fetchedData={data} pageSwich={pageSwich} />
            <div className="card-container">
                {data?.results.map((character, index) => {
                    return (
                        <ViewCard character={character} index={index} key={index} />
                    )
                })}
            </div>
        </>
    );
};

export default PeopleList;