import { lacasadelascarcasas, frontend, acafrao, masterstock } from "../assets/images"
import {
    car,
    contact,
    css,
    estate,
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
        company_name: "Transição de carreira",
        icon: frontend,
        iconBg: "#accbe1",
        date: "Abril 2022 - Até o momento",
        points: [
            "Criação de interfaces atraentes e fáceis de usar com HTML, SASS e JavaScript, elevando a proficiência em oferecer experiências visuais e interativas excepcionais aos usuários.",
            "Uso do React, TypeScript e Styled-components para criar soluções interativas e responsivas, tornando-me uma desenvolvedora mais versátil e capaz de atender a requisitos de diferentes projetos.",
            "Controle de versão meticuloso e publicação de projetos com Git e GitHub, fortalecendo habilidades de gerenciamento de projetos.",
            "Desenvolvimento de interfaces atraentes e funcionais com Bootstrap, permitindo traduzir conceitos de design em aplicações web esteticamente agradáveis, consolidando expertise em princípios de design UI/UX.",
            "A automação do Gulp foi utilizada para otimizar fluxos de trabalho e economizar tempo, a fim de aumentar a eficiência geral e produtividade."
        ],
    },
    {
        title: "Sub-gerente",
        company_name: "La Casa de Las Carcasas (Portugal)",
        icon: lacasadelascarcasas,
        iconBg: "#E6FFF8",
        date: "Agosto 2019 - Setembro 2023",
        points: [
            "Registro de dados e indicadores de vendas e criação de planilhas, aprimorando habilidades no Excel e evoluindo a análise de dados.",
            "Aprimoramento das habilidades de liderança e gestão de equipe ao assumir o comando da loja na ausência do gerente, promovendo uma dinâmica mais eficaz e coesa na equipe.",
            "Implementação de uma abordagem personalizada ao cliente, refinando habilidades de argumentação e persuasão para alcançar melhores resultados.",
            "Trabalho em equipe, resultando em um ambiente de trabalho harmonioso e produtivo, desenvolvimento pessoal e habilidades de liderança.",
            "Treinamento de novos membros da equipe, aprimorando habilidades de orientação e comunicação.",
        ],
    },
    {
        title: "Estagiária em Segurança Alimentar",
        company_name: "Açafrão Sociedade de Catering Lda (Portugal)",
        icon: acafrao,
        iconBg: "#F4EEED",
        date: "Outubro 2018 - Junho 2019",
        points: [
            "Implementação de um sistema de qualidade alimentar, reduzindo reclamações de clientes sobre a qualidade do produto e fortalecendo a implementação de soluções eficazes.",
            "Edição de documentos de controle de qualidade, resultando em um sistema de controle de qualidade mais preciso e organizado e aprimorando minhas habilidades com Excel e Word.",
            "Revisão e atualização do plano HACCP da empresa para aprimorar a qualidade do produto, consolidando a capacidade de análise e aprofundando conhecimentos sobre controle de qualidade.",
            "Supervisão da inspeção de matéria-prima, garantindo o uso de ingredientes de alta qualidade e fortalecendo habilidades de liderança e responsabilidade."
        ],
    },
    {
        title: "Stocktaker",
        company_name: "Masterstock (Irlanda)",
        icon: masterstock,
        iconBg: "#E6FFF0",
        date: "Janeiro 2014 - Junho 2015",
        points: [
            "Contagem e atualização de estoques de diferentes farmácias, demonstrando capacidades de precisão, organização e de trabalhar diversos ambientes.",
            "Colaboração com colegas, aprimorando minhas habilidades de trabalho em equipe e contribuindo para um ambiente de trabalho harmonioso.",
            "Melhoria significativa na língua inglesa, facilitando a comunicação eficaz e expandindo o acesso a recursos técnicos. A exposição a outras culturas enriqueceu meu desenvolvimento pessoal, fomentando a adaptabilidade e a criatividade.",
            "Interação com indivíduos de diversas origens e em situações inesperadas, aprimorando minha adaptabilidade e flexibilidade para enfrentar desafios diversos.",
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