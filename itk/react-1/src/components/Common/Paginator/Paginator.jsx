import React, { useState } from 'react';
import s from './Paginator.module.css';
import cn from "classnames";

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }

    let portionCount = Math.ceil(pages.length / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;

    return (
        <div className = {s.paginator}>
            {portionNumber > 1 &&
            <button onClick = {() => {setPortionNumber(portionNumber - 1)}}> Prev </button>}
            {
                pages
                .filter((p) => p >= leftPortionNumber && p <= rightPortionNumber)
                .map((p) =>
                     <span className = {cn({[s.selectedPage] : currentPage === p }, s.pageNumber) }
                    onClick = {() => {onPageChanged(p)}}>{p}</span>
                )
            }
            {portionCount > portionNumber &&
            <button onClick ={ () => {setPortionNumber(portionNumber + 1)}}> Next </button>}
        </div>
    )
}                   

export default Paginator;