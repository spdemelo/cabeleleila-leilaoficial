import Image from 'next/image'
import Link from "next/link";
import styles from "./styles.css"

export default function DesempenhoSemanal() {
  return (
    <>
        <div className = "h1_desempenho_semanal">
        <h1>📊 Desempenho mensal: </h1></div>
        <p> Seja bem vindo, colaborador! Confira abaixo os parâmetros utilizados para avaliar o desempenho de nosso salão, 
            foco na meta! 💪🏻 </p>
        <table border = "1">
        <caption id = "nomedatabela2">  📊 Nossos parâmetros: </caption>
            <thead>
            <tr>
                <th> Indicadores de produtividade: </th>
                <th> Indicadores de capacidade de atendimento: </th>
                <th> Satisfação do cliente: </th>
                <th> Indicadores de lucratividade: </th>
                <th> Nível de acompanhamento pós serviço: </th>
                <th> Chat e telefone: </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td> 83.6% </td>
                <td> 76.8% </td>
                <td> 96.9% </td>
                <td> Bom </td>
                <td> Ótimo </td>
                <td> 98.7% </td>
            </tr>
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
