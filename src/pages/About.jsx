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
        Desenvolvedora Front-end em formação pela EBAC. Sou uma profissional resiliente, criativa e comunicativa, ansiosa para contribuir com projetos inovadores na indústria de tecnologia.
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
                      className='w-[80%] h-[80%] object-contain'
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