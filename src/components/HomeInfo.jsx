import { Link } from "react-router-dom"

import { arrow } from "../assets/icons"

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
      <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
    </Link>
  </div>
)

const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Olá. O meu nome é
      <span className='font-semibold mx-2 text-white'>Camila</span>👋🤓
      <br />
      Eu sou uma desenvolvedora Front-end!
    </h1>
  ),
  2: (
    <InfoBox 
      text="Eu estou muito animada para aplicar minhas habilidades e paixões na indústria de tecnologia, contribuindo para projetos inovadores e impactantes."
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
    <InfoBox 
      text="Procurando por uma desenvolvedora? Eu estou a apenas alguns cliques de distância."
      link="/contact"
      btnText="Vamos conversar"
    />
  ),
}

const HomeInfo = ( {currentStage} ) => {
  return renderContent[currentStage] || null
}

export default HomeInfo