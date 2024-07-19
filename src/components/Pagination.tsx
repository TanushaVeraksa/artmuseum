import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../hooks/redux';
import { fetchArts } from '../store/actions/ActionCreators';
import PaginationUl from '../styles/PaginationUl';
import PaginationLI from '../styles/PaginationLI';
import { ReactComponent as Shape } from '../assets/Shape.svg';


const Pagination = () => {

const NUMBER_OF_PAGE = 5;
const FIRST_PAGE = 1;

const [currentPage, setCurrentPage] = useState(1);
const numbers = Array(NUMBER_OF_PAGE).fill(0).map((e, i) => i+1);
const dispatch = useAppDispatch();


useEffect(()=> {
    dispatch(fetchArts(currentPage, 3));
  }, [currentPage])


const prevPage = () => {
    if(currentPage !== 1) {
        setCurrentPage(currentPage - 1);
    }
}

const changePage = (n: number) => {
    setCurrentPage(n);
}

const nextPage = () => {
    if(currentPage !== NUMBER_OF_PAGE) {
        setCurrentPage(currentPage + 1);
    }
}

  return (
    <div>
        <PaginationUl>
        <PaginationLI transform='rotate(180deg)' display={`${currentPage === FIRST_PAGE ? 'none' : ''}`}>
            <Shape onClick={prevPage}/>
        </PaginationLI>
        {
            numbers.map((n, i) => (
            <PaginationLI 
                background={`${currentPage === n ? '#F17900' : 'none'}`}
                color={`${currentPage === n ? '#FFFFFF' : '#393939'}`}
                onClick={() => changePage(n)} 
            >{n}
            </PaginationLI>
            ))
        }
        <PaginationLI 
        display={`${currentPage === NUMBER_OF_PAGE ? 'none' : ''}`}
        >
            <Shape onClick={nextPage}/>
        </PaginationLI>
        </PaginationUl>
    </div>
  )
}

export default Pagination