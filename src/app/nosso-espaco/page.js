import Image from 'next/image'

export default function NossoEspaco() {
  return (
  <>
    <div className = "h1_nosso_espaco">
    <h1>🏢 Nosso espaço: </h1>
    </div>
    <p> Olá cabelo lover, estamos localizados na <em> Rua da Hidratação </em>, <em> número 99 </em>na cidade de 
    São Paulo, ao lado da Barbearia do Leilo. Venha conhecer! 🙌🏻 </p>

    <div className = "gallery">
      <figure className = "gallery__item gallery__item--1">
        <img src = "galeria1.jpg" className = "gallery__img" alt = "Imagem 1"/>
      </figure>
      <figure className = "gallery__item gallery__item--2">
        <img src = "galeria2.jpg" className = "gallery__img" alt = "Imagem 2"/>
      </figure>
      <figure className = "gallery__item gallery__item--3">
        <img src = "galeria3.jpg" className = "gallery__img" alt = "Imagem 3"/>
      </figure>
      <figure className = "gallery__item gallery__item--4">
        <img src = "galeria4.jpg" className = "gallery__img" alt = "Imagem 4"/>
      </figure>
      <figure className = "gallery__item gallery__item--5">
        <img src = "galeria5.jpg" className = "gallery__img" alt = "Imagem 5"/>
      </figure> 
      <figure className ="gallery__item gallery__item--6">
        <img src = "galeria6.jpeg" className = "gallery__img" alt = "Imagem 6"/>
      </figure>
    </div>
    <footer>
        <div id = "redes">
            <ul>
                <li><a href = "https://pt-br.facebook.com/"> Facebook </a></li>
                <li><a href = "https://www.instagram.com/"> Instagram </a></li>
                <li><a href = "https://www.tiktok.com/explore"> Tiktok </a></li>
            </ul>
        </div>
        <address> Cabeleleila Leila - Rua da Hidratação, São Paulo | São Paulo </address>
    </footer>
  </>
  )
}
