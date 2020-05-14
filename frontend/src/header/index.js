import React, { useState, useEffect } from "react";
import './styles.css';

import logo from '../assets/logo_martan.png';

export default function Header(props) {
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    props.applyFilter(pesquisa)
  }, [props,pesquisa])

  return (
    <div className="header">
      <img className="logo" src={logo} alt="MMartan" />
      <span className="spacer"></span>
      <div className="searchWrapper">
        <input
          type="search"
          placeholder="Pesquisar"
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
        />
      </div>
    </div>
  );
}
