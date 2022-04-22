import React, { useState, useEffect, useCallback } from "react";
import styled from "../SECTIONDICA/style.module.css";
import { AiFillPropertySafety, AiOutlineWoman } from "react-icons/ai";

/* #### API ####
https://sujeitoprogramador.com/rn-api/?api=posts
*/

export default function Dicas(props) {
  const [dica, setDica] = useState([]);

  useEffect(() => {
    function loadApi() {
      let url = "https://sujeitoprogramador.com/rn-api/?api=posts";

      fetch(url)
        .then((result) => result.json())
        .then((JSON) => {
          setDica(JSON);
        });
    }
    loadApi();
  }, []);

  return (
    <div className={styled.containerDicas}>
      {dica.map((item) => {
        return (
          <article key={item.id} className={styled.post}>
            <div className={styled.containerTitulo}>
              <strong className={styled.titulo}>{item.titulo}</strong>
            </div>
            <div className={styled.containerImg}>
              <img
                src={item.capa}
                alt={item.titulo}
                className={styled.imagem}
              />
            </div>

            <div className={styled.containerTxt}>
              <p className={styled.subtitulo}>{item.subtitulo}</p>
            </div>
            <div className={styled.btnAcessar}>
              <a href="http://www.google.com" className={styled.botao}>
                Acessar
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
}
