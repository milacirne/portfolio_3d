import { Link } from "react-router-dom"

import { arrow } from "../assets/icons"
import { linkedin_white } from "../assets/icons"
import { github_white } from "../assets/icons"

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-lg text-center">{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
      <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
    </Link>
  </div>
)

const renderContent = {
  1: (
    <h1 className='sm:text-lg sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Olá. O meu nome é
      <span className='font-semibold mx-2 text-white'>Camila</span>👋🤓
      <br />
      Eu sou uma desenvolvedora Front-end!
    </h1>
  ),
  2: (
    <InfoBox 
      text="Estou animada para aplicar minhas habilidades na indústria de tecnologia, contribuindo para projetos inovadores e impactantes."
      link="/about"
      btnText="Saiba mais"
    />
  ),
  3: (
    <InfoBox 
      text="Trabalhei em diversos projetos pessoais ao longo do meu caminho. Quer saber mais sobre eles?"
      link="/projects"
      btnText="Visite o meu portifólio"
    />
  ),
  4: (
    <h1 className='sm:text-lg sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Procurando por uma desenvolvedora?
      <br />
      Eu estou a apenas alguns cliques de distância!
      <br />
      <div className='flex justify-center space-x-2 mt-2'>
        <a href="https://github.com/milacirne" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center rounded-full transition-transform duration-300 hover:scale-110'>
          <img src={github_white} alt='GitHub' className='w-7 h-7' />
        </a>
        <a href="https://www.linkedin.com/in/camila-cirne/" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center rounded-full transition-transform duration-300 hover:scale-110'>
          <img src={linkedin_white} alt='LinkedIn' className='w-7 h-7' />
        </a>
      </div>
    </h1>
  ),
}

const HomeInfo = ( {currentStage} ) => {
  return renderContent[currentStage] || null
}

export default HomeInfo