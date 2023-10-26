"use client"
import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react';
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [dia, setDia] = useState('')
    const [horario, setHorario] = useState('')
    const [procedimento, setProcedimento] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();    
        try {
          const response = await fetch("/api/agendamentos/new",{
            method: "POST",
            body: JSON.stringify({
              nome, cpf, dia, horario, procedimento
            }),
          });
    
          if (response.ok) {
            router.push("/lista-dos-agendamentos");
          }
        } catch (error) {
          console.log(error);
        }
      };
  return (
  <>
    <form onSubmit = {handleSubmit}>
    <fieldset>
    <legend> 📝 Faça seu agendamento com a Cabeleila Leila:</legend>
    <div>
        <label for = "nome" required> 👤 Nome: </label>
        <input type = "text" name = "usuario_nome"  className = "campo_nome" required size = "46" onChange={(e) => setNome(e.target.value)}/>
    </div>
    <div>
        <label for = "cpf" required> ✔️ CPF: </label>
        <input type = "text" name = "usuario_cpf" className = "campo_cpf" required
        placeholder = "Exemplo do formato: 123.456.789-01" size = "46" onChange={(e) => setCpf(e.target.value)}/>
    </div>
    <div>
        <label for = "data" required> 📆 Data do agendamento: </label> 
        <input type = "date" name = "usuario_data" className = "campo_data" required size = "46" onChange={(e) => setDia(e.target.value)}/>
    </div>
    <div>
        <label for = "horario" required> ⏰ Horário do agendamento: </label>
        <input type = "time" name = "usuario_horario" className = "campo_horario" required size = "46" onChange={(e)=> setHorario(e.target.value)}/>
    </div>
    <div>
      <label for = "procedimento" required> Digite qual(is) seu(s) procedimento(s): </label>
      <input type = "text" name = "usuario_procedimento" className = "campo_procedimento" required size = "46" onChange={(e)=> setProcedimento(e.target.value)}/>
    </div>
    <div className="button">
        <button type = "submit"> CONFIRMAR </button>
      </div>
    </fieldset>
    </form>
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
