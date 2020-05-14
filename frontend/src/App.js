import React, { useEffect, useState } from 'react';
import './App.css';

import api from './services/api';
import Header from './header';
import Produtos from './produtos';
import Loading from './loading';

function App() {
  const [produtos, setProdutos] = useState([]);
  const [filter, setFilter] = useState('')
  const [offset, setOffset] = useState(5)
  const [page, setPage] = useState(0)
  const [totalRecords, setTotalRecords] = useState(0)
  const [loading, setLoading] = useState(false)

  async function loadProducts() {
    setLoading(true)
    const response = await api.get('products', {
      params: { filter, offset, page }
    })
    setProdutos([...response.data.products])
    setTotalRecords(response.data.totalRecords)
    setLoading(false)
  }

  useEffect(() => {
    loadProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset, page]);

  useEffect(() => {
    setOffset(0)
    setPage(0)
  }, [filter])

  function reloadData(value) {
    setOffset(value)
  }

  // function doFilter(filter) {
    
  //   setFilter(filter)
  // }

  return (
    <div className="main-container">
      <Header applyFilter={setFilter}/>
      {loading ? (<Loading show={loading}/>) : ''}
      
      <div className="subheader">
        <p>{filter !== '' ? `Buscando: ${filter}` : 'Lista de Produtos'}</p>
      </div>
      <div className="container">
        <div>
          {filter !== '' ? <span className="search-results">{totalRecords} PRODUTOS ENCONTRADOS</span> : ''}
        </div>
        <Produtos offset={offset} page={page} produtos={produtos} results={totalRecords} offsetChanged={reloadData} pageChanged={setPage}/>
      </div>
    </div>
  );
}

export default App;
