import React, { useState, useEffect } from 'react';
import Produto from '../produto';
import Paginator from '../paginator';
import './styles.css';

export default function Produtos(props) {
    const [offset, setOffset] = useState(props.offset)
    const [page, setPage] = useState(props.page)

    useEffect(() => {
        props.offsetChanged(offset)
        props.pageChanged(page)
    },[offset,page,props])

    return (
        <div>
            {props.produtos.map((p, idx) => (
                <Produto key={idx} produto={p} />
            ))}
            <div className="paginator">
                <div className="pageNumber">
                    <select onChange={(e) => setOffset(e.target.value)}>
                        <option value="5">5 produtos por página</option>
                        <option value="10">10 produtos por página</option>
                        <option value="15">15 produtos por página</option>
                        <option value="30">30 produtos por página</option>
                        <option value="60">60 produtos por página</option>
                        <option value="100">100 produtos por página</option>
                    </select>
                </div>
                <span className="spacer"></span>

                <Paginator page={page} offset={offset} count={props.results} changePage={setPage}/>
            </div>
        </div>
    );
}