import React, { useState, useEffect } from "react";
import styled from "../NAVBARS/style.module.css";
import { AiOutlineMan } from "react-icons/ai";
import { AiOutlineWoman } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className={styled.container}>
      <h1>
        <AiOutlineWoman /> Emagreça Bem <AiOutlineMan />{" "}
      </h1>

      <div className={styled.teste}></div>
      <div>
        <h3 className={styled.txtheader}>
          Cuidar da sua saúde e bem-estar também é se amar.
        </h3>
      </div>
    </div>
  );
}
