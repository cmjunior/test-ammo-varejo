import React, { useState, useEffect } from 'react';
import './styles.css';

export default function Paginator(props) {
    const [count, setCount] = useState(props.results)
    const [page, setPage] = useState(props.page);
    const [currPages, setCurrPages] = useState([])
    
    useEffect(() => {
        let _count = Math.ceil(props.count / props.offset)
        setCount(_count)
        setPage(props.page)
        
        let _currPages = []
        if ( page === 0 ) {
            _currPages = [0, 1, 2]            
        } else {
            if ( page === count-1 ) {
                _currPages = [page-2, page-1, page]
            } else {
                _currPages = [page-1, page, page+1]
            }
        }
        setCurrPages(_currPages)
    }, [page,props])

    function handleChangePage(newPage) {
        let _page = newPage
        if ( typeof newPage === 'string' ) {
            if ( newPage === 'prev' && page === 0 ) { return; }
            if ( newPage === 'next' && page === count-1 ) { return; }
                
            _page = page + (newPage === 'next' ? 1 : -1)
        } 
        setPage(_page)
        props.changePage(_page)
    }

    return (
        <div className="pagination">
            {page > 1 ? <a href="/#" onClick={() => handleChangePage(0)}>&23ee;</a> : ''}
            {page !== 0 ? <a href="/#" onClick={() => handleChangePage('prev')}>&laquo;</a> : ''}
            {currPages.map((p, idx) => (
                <a href="/#" key={idx} className={page === p ? 'active' : ''} onClick={() => handleChangePage(p)}>{p+1}</a>
            ))}
            {page !== count-1 ? <a href="/#" onClick={() => handleChangePage('next')}>&raquo;</a> : ''}
            {page < count-2 ? <a href="/#" onClick={() => handleChangePage(count-1)}>&23ee;</a> : ''}
        </div>
    )
}