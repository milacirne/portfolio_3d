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
        company_name: "Freelance",
        icon: frontend,
        iconBg: "#accbe1",
        date: "Abril 2022 - Até o momento",
        points: [
            "Utilização de HTML, SASS, JavaScript e TypeScript para desenvolver projetos impactantes.",
            "Habilidades em Bootstrap para criar interfaces amigáveis e visualmente atrativas.",
            "Otimização do workflow com Gulp para garantir maior eficiência no desenvolvimento.",
            "Experiência em React, incluindo o uso de Redux para gerenciamento de estado, permitindo a criação de aplicações front-end escaláveis e de fácil manutenção.",
            "Domínio em Styled Components para criação de estilos encapsulados e reutilizáveis, proporcionando uma experiência de desenvolvimento mais eficiente e modular.",
            "Gerenciamento eficiente do código-fonte utilizando Git e GitHub."
        ],
    },
    {
        title: "Sub-gerente",
        company_name: "La Casa de Las Carcasas (Portugal)",
        icon: lacasadelascarcasas,
        iconBg: "#E6FFF8",
        date: "Agosto 2019 - Setembro 2023",
        points: [
            "Aprimoramento das minhas habilidades de liderança e gestão de equipe ao assumir o comando da loja na ausência do gerente, promovendo uma dinâmica de equipe mais eficaz e coesa.",
            "Demonstração de pró-atividade e excelência no atendimento ao cliente, resultando na oferta de soluções eficientes para questões dos clientes e alcançando um alto nível de satisfação e fidelização dos mesmos.",
            "Melhora significativa do desempenho de vendas por meio de habilidades aprimoradas de comunicação e persuasão, impactando positivamente a receita mensal da loja.",
            "Contribuição para um ambiente de trabalho harmonioso e produtivo através do trabalho em equipe e colaboração eficaz.",
            "Condução de treinamentos para novos funcionários a fim de garantir que adquiram as habilidades e conhecimentos necessários para se destacarem em seus cargos, reforçando minha capacidade de transmitir conhecimento técnico e orientar os outros.",
        ],
    },
    {
        title: "Estagiária em Segurança Alimentar",
        company_name: "Açafrão Sociedade de Catering Lda (Portugal)",
        icon: acafrao,
        iconBg: "#F4EEED",
        date: "Outubro 2018 - Junho 2019",
        points: [
            "Implementação de um sistema de qualidade de alimentos na empresa, resultando em uma redução significativa de reclamações relacionadas à qualidade do produto.",
            "Revisão e atualização do plano HACCP resultou em um padrão de qualidade de produto aprimorado e um consequente aumento na satisfação do cliente, e ainda ajudou a fortalecer ainda mais minha atenção aos detalhes e habilidades analíticas.",
            "Edição de documentos de controle de qualidade resultou em um sistema de controle de qualidade mais preciso e organizado, facilitando para os órgãos reguladores monitorar informações vitais e aprimorando minhas habilidades de documentação e registro.",
            "Supervisão da inspeção e recepção de matérias-primas, assegurando que apenas materiais de alta qualidade fossem usados no processo de produção, resultando em um produto final de qualidade superior.",
            "Rigoroso controle das temperaturas de produção e armazenamento de produtos alimentícios, resultando em redução de custos devido a um melhor gerenciamento de matérias-primas e estoque."
        ],
    },
    {
        title: "Stocktaker",
        company_name: "Masterstock (Irlanda)",
        icon: masterstock,
        iconBg: "#E6FFF0",
        date: "Janeiro 2014 - Junho 2015",
        points: [
            "Contagem e atualização de estoque em farmácias em todo o país, demonstrando a capacidade de trabalhar com precisão, organização e rapidez em diferentes ambientes de trabalho.",
            "Colaboração com outros funcionários para aprimorar a eficiência na gestão de estoque, aprimorando minha habilidade de trabalhar de forma coesa em equipe.",
            "Conquista de uma melhoria significativa na proficiência em língua inglesa, fortalecendo minhas habilidades de compreensão, fala, escrita e leitura. Essa proficiência permite uma comunicação eficaz com outras pessoas e proporciona acesso a uma riqueza de recursos técnicos em inglês.",
            "Exposição a uma cultura diferente, rica em tradições, proporcionando enriquecimento pessoal e uma oportunidade para ampliar horizontes e perspectivas. Essa experiência de imersão cultural também alimentou a mente aberta e a criatividade.",
            "Interação com pessoas de origens diversas e culturas, enfrentando situações inesperadas que contribuíram para o desenvolvimento de adaptabilidade e flexibilidade."
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