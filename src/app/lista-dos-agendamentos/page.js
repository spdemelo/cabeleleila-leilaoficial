"use client"
import Image from 'next/image'
import Link from "next/link";
import styles from "./styles.css"
import { useEffect, useState } from 'react';
import { formatDate } from '../../../utils/format-date';

export default function ListaDosAgendamentos() {
  const [agendamentos, setAgendamentos] = useState([])
  const fetchAgendamentos = async()=>{
    const response = await fetch("api/agendamentos");
    const data = await response.json();

    setAgendamentos(data);
  };

  useEffect(() => {
    fetchAgendamentos();
  }, []);

  console.log(agendamentos)
  return (
  <>
    <div className = "h1_agendamentos">
    <h1>📋 Lista dos agendamentos: </h1>
    </div>
    <p> Olá cliente! Confira abaixo os agendamentos da semana: 🎊 </p>
    <table border = "1">
    <caption id = "nomedatabela"> 📋 Lista completa: </caption>
      <thead>
      <tr>
        <th> Nome: </th>
        <th> CPF: </th>
        <th> Data do agendamento: </th>
        <th> Horário do agendamento: </th>
        <th> Procedimento: </th>
      </tr>
      </thead>
      <tbody>
      {agendamentos.map((agendamento) => (
        <tr>
        <td> {agendamento.nome} </td>
        <td> {agendamento.cpf} </td>
        <td> {formatDate(agendamento.dia)} </td>
        <td> {agendamento.horario} </td>
        <td> {agendamento.procedimento} </td>
      </tr>  
      ))}
      </tbody>
    </table>
  <footer>
    <div id = "redes">
        <ul>
          <li><Link href = "https://pt-br.facebook.com/"> Facebook </Link></li>
          <li><Link href = "https://www.instagram.com/"> Instagram</Link></li>
          <li><Link href = "https://www.tiktok.com/explore"> Tiktok </Link></li>
        </ul>
    </div>
    <address>
        Cabeleleila Leila - Rua da Hidratação, 99 - São Paulo | São Paulo
    </address>
  </footer>
  </>
  )
}