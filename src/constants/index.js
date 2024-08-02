import { lacasadelascarcasas, frontend, acafrao, masterstock, codigocerto } from "../assets/images"
import {
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    react,
    redux,
    sass,
    typescript,
    gulp,
    styledcomponents,
    bootstrap,
    less,
    efood,
    contactlist,
    primeflix,
    harrypotter,
    starwars,
    clone
} from "../assets/icons"

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: gulp,
        name: "Gulp",
        type: "Frontend",
    },
    {
        imageUrl: styledcomponents,
        name: "Styled-components",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    },
    {
        imageUrl: less,
        name: "Less",
        type: "Frontend",
    },
]

export const experiences = [
    {
        title: "Desenvolvedora Front-end",
        company_name: "Código Certo",
        icon: codigocerto,
        iconBg: "#FAB1AB",
        date: "Junho 2024 - Até o momento",
        points: [
            "Desenvolvimento de interfaces de usuário responsivas e intuitivas utilizando HTML, CSS e JavaScript, aprimorando a proficiência no desenvolvimento web.",
            "Utilização de React.js e TypeScript para criar soluções interativas e responsivas, aumentando a versatilidade como desenvolvedor capaz de atender aos requisitos de diversos projetos.",
            "Participação em reuniões de planejamento e discussão de requisitos, fortalecendo habilidades de comunicação e colaboração.",
            "Aplicação do método Scrum para gestão ágil de projetos, aumentando a eficiência e a entrega pontual das tarefas.",
            "Adoção do método Kanban para gestão visual de tarefas e fluxos de trabalho, aprimorando a organização e a produtividade da equipe.",
            "Implementação de métodos eficazes para versionamento de código através do Git, facilitando o gerenciamento de código e melhorando a colaboração na equipe de desenvolvimento."
        ],
    },
    {
        title: "Desenvolvedora Front-end",
        company_name: "Transição de carreira",
        icon: frontend,
        iconBg: "#accbe1",
        date: "Abril 2022 - Junho 2024",
        points: [
            "Desenvolvimento de interfaces atraentes e amigáveis com HTML, SASS e JavaScript, aprimorando a proficiência na entrega de experiências visuais e interativas excepcionais aos usuários.",
            "Utilização de React, TypeScript e Styled-components para criar soluções interativas e responsivas, demonstrando minha capacidade de traduzir protótipos de design do Figma em aplicações web funcionais e esteticamente agradáveis.",
            "Controle de versão meticuloso e publicação de projetos com Git e GitHub, fortalecendo as habilidades de gerenciamento de projetos."
        ],
    },
    {
        title: "Sub-gerente",
        company_name: "La Casa de Las Carcasas (Portugal)",
        icon: lacasadelascarcasas,
        iconBg: "#E6FFF8",
        date: "Agosto 2019 - Setembro 2023",
        points: [
            "Registro de dados e indicadores de vendas e criação de planilhas, aprimorando habilidades no Excel e evoluindo na análise de dados.",
            "Aprimoramento de habilidades de liderança e gerenciamento de equipe ao supervisionar uma equipe de mais de 5 funcionários na ausência do gerente, promovendo uma dinâmica de equipe mais eficaz e coesa.",
            "Implementação de uma abordagem personalizada ao cliente, aprimorando habilidades de argumentação e persuasão para alcançar resultados superiores.",
            "Trabalho em equipe, resultando em um ambiente de trabalho harmonioso e produtivo, desenvolvimento pessoal e habilidades de liderança.",
            "Designada pelo gerente para treinar de 3 a 5 novos contratados a cada trimestre, melhorando habilidades de mentoria e comunicação.",
        ],
    },
    {
        title: "Estagiária em Segurança Alimentar",
        company_name: "Açafrão Sociedade de Catering Lda (Portugal)",
        icon: acafrao,
        iconBg: "#F4EEED",
        date: "Outubro 2018 - Junho 2019",
        points: [
            "Edição de documentos de controle de qualidade, resultando em um sistema de controle de qualidade mais preciso e organizado, além de aprimorar minhas habilidades em Excel e Word.",
            "Revisão e atualização do plano HACCP da empresa para melhorar a qualidade do produto, consolidando habilidades analíticas e aprofundando o conhecimento em controle de qualidade.",
            "Supervisão da inspeção de matérias-primas, garantindo o uso de ingredientes de alta qualidade e fortalecendo habilidades de liderança e responsabilidade."
        ],
    },
    {
        title: "Stocktaker",
        company_name: "Masterstock (Irlanda)",
        icon: masterstock,
        iconBg: "#E6FFF0",
        date: "Janeiro 2014 - Junho 2015",
        points: [
            "Contagem e atualização de estoques para diferentes farmácias, demonstrando precisão, habilidades organizacionais e capacidade de trabalhar em ambientes diversos.",
            "Colaboração com colegas, aprimorando minhas habilidades de trabalho em equipe e contribuindo para um ambiente de trabalho harmonioso.",
            "Melhoria significativa no inglês, facilitando a comunicação eficaz e expandindo o acesso a recursos técnicos.",
            "Interação com indivíduos de diferentes origens e em situações inesperadas, aprimorando adaptabilidade e flexibilidade para enfrentar desafios diversos.",
        ],
    },
]

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/milacirne',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/camila-cirne/?locale=pt_BR',
    }
]

export const projects = [
    {
        iconUrl: efood,
        theme: 'btn-back-red',
        name: 'Efood - Site de E-Commerce',
        description: 'Desenvolvimento de uma site de e-commerce de comida utilizando TypeScript, React e Styled-Components.',
        link: 'https://github.com/milacirne/efood',
    },
    {
        iconUrl: contactlist,
        theme: 'btn-back-green',
        name: 'Lista de Contatos',
        description: 'Desenvolvimento de uma lista de contatos utilizando TypeScript, React, React-Redux e Styled-Components.',

        link: 'https://github.com/milacirne/contact_list_react-redux',
    },
    {
        iconUrl: primeflix,
        theme: 'btn-back-blue',
        name: 'Site de Filmes - Primeflix',
        description: 'Aplicação desenvolvida para fornecer aos usuários uma plataforma descobrir e gerenciar uma lista de filmes, utilizando JavaScript, CSS e React.',
        link: 'https://github.com/milacirne/projeto_filmes_primeflix',
    },
    {
        iconUrl: harrypotter,
        theme: 'btn-back-pink',
        name: 'Landing Page de Harry Potter',
        description: 'Landing page sobre Harry Potter e a Pedra Filosofal, utilizando SASS, JavaScript e Gulp, com galerias de fotos, informações e curiosidades sobre o filme.',
        link: 'https://github.com/milacirne/harrypotter_landingpage',
    },
    {
        iconUrl: starwars,
        theme: 'btn-back-black',
        name: 'Página-convite de aniversário',
        description: 'Página-convite de Star Wars com contagem regressiva para uma festa de aniversário, utilizando SASS, JavaScript, Parcel e biblioteca AOS para efeitos visuais.',
        link: 'https://github.com/milacirne/star-wars_birthday_page',
    },
    {
        iconUrl: clone,
        theme: 'btn-back-yellow',
        name: 'Clone do Disney+ Brasil',
        description: 'Clone da página do Disney+ utilizando SASS e JavaScript, replicando estilos e funcionalidades da página, planos e pacotes de assinatura, galeria de fotos e perguntas frequentes.',
        link: 'https://github.com/milacirne/clone_disneyplus',
    }
]