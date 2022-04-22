import React, { useState } from "react";
import styled from "../FOOTER/style.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className={styled.containerFooter}>
      <section className={styled.contatos}>
        <div className={styled.contato}>
          <h1>Contato: Tamires Escobar</h1>
          <h2>(21) 96473-3666</h2>
        </div>
      </section>

      <section className={styled.redesSociais}>
        <div className={styled.pessoais}>
         
          <div className={styled.links}>
            <a href="http://" target="_blank">
              Linkdin
            </a>
            <FaLinkedin />
            <a href="http://" target="_blank">
              gitHub
            </a>
            <FaGithub />
            <a href="mailto:escobartamires1@gmail.com">Email</a>
            <MdAlternateEmail />
            <hr />
          </div>
        </div>
      </section>
    </div>
  );
}
