import React from 'react';
import './Pagination.css';

const Pagination: React.FC<any> = ({ fetchedData, pageSwich }) => {
    const buildPagination = (count: number) => {
        const buttons = [];
        for (let i = 1; i <= count; i++) {
            buttons.push(
                <button key={i} onClick={() => pageSwich(i)} className={i === fetchedData?.next?.toString()?.split('=')[1] - 1 ? 'page-link-marked' : 'page-link'}>
                    {i}
                </button>
            );
        }
        return <div>{buttons}</div>;
    }

    return (
        <nav>
            <ul className="pagination">
                {buildPagination(fetchedData?.count.toString()[0])}
            </ul>
        </nav>
    )
}
export default Pagination;