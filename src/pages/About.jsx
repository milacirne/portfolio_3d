import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import { experiences, skills } from "../constants"
import CTA from "../components/CTA"

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Olá, meu nome é{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Camila
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        Como uma Desenvolvedora Front-End comprometida com a excelência, busco continuamente aprimorar minhas habilidades. Quero aplicar o meu conhecimento na criação de experiências digitais envolventes e responsivas, com um código limpo e eficiente. Estou entusiasmada em colaborar em projetos inovadores, onde possa contribuir com minha criatividade e paixão pelo desenvolvimento web.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>Minhas habilidades</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
        {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Experiências de trabalho</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
          Atualmente em transição de carreira, minha trajetória como Desenvolvedora Front-end tem sido enriquecida pela exploração de uma variedade de ferramentas essenciais. Essas tecnologias não apenas foram instrumentais para a execução dos meus projetos, mas também pavimentaram o caminho para um crescimento significativo na minha carreira:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p 
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}>
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                  <li 
                    key={`experience-point-${index}`}
                    className='text-black-500/50 font-normal pl-1 text-sm'
                  >
                    {point}
                  </li>
                ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>    
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  )
}

export default About