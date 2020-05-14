import React, { useEffect, useState } from 'react';
import './styles.css';

export default function Produto(props) {
    const [pictures, setPictures] = useState([]);
    const [selectedImage, setSelectedImage] = useState('')
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        setPictures(props.produto.pictures.split(';'));
    }, [props.produto.pictures]);

    function doShowModal(picture) {
        setSelectedImage(pictures[picture]);
        setShowModal(true);
    }

    function doCloseModal() {
        setSelectedImage('');
        setShowModal(false);
    }

    return (
        <div className="lista">
            <div className="item-lista">
                <div className="images-wraper">
                    <img onClick={() => doShowModal(0)} src={pictures[0]} alt="Foto Produto" />
                    <img onClick={() => doShowModal(1)} src={pictures[1]} alt="Foto Produto" />
                    <img onClick={() => doShowModal(2)} src={pictures[2]} alt="Foto Produto" />
                    <img onClick={() => doShowModal(3)} src={pictures[3]} alt="Foto Produto" />
                </div>
                <div className="main-content">
                    <div className="descricao">
                        <h3>{props.produto.description}</h3>
                        <p>{props.produto.details}</p>
                    </div>
                    <span className="spacer"></span>
                    <div className="preco">
                        <span className="tachado">
                            { Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(props.produto.valueFrom)}
                        </span> 
                        <span className="text-por">&nbsp;por&nbsp;</span>
                        <strong>
                            { Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(props.produto.valueTo)}
                        </strong>
                    </div>
                </div>
            </div>

            <div id="myModal" onClick={() => doCloseModal()} className="modal" style={showModal ? {display: 'block'} : {}}>
                <span onClick={() => doCloseModal()} className="close">&times;</span>
                <img className="modal-content" src={selectedImage} alt="Foto produto" />
            </div>
        </div>
    )
}