import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiReact,
    DiDatabase
  } from "react-icons/di";
  
  import "../styles/components/technologiescontainers.sass";
  
  const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 />,
    texto:<p>HTML5 (Hypertext Markup Language, versão 5)
    é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet.
    Comecei estudar essa tecnologia em 2020.</p>},
    { id: "css", name: "CSS3", icon: <DiCss3 />,
  texto:<p>CSS3 é a terceira mais nova versão das famosas Cascading Style Sheets,
     pela qual se define estilos para um projeto web.</p> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge />,
    texto:<p>JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web.</p> },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall />,
    texto:<p>O Node é capaz de interpretar um código JavaScript, igual ao que o navegador faz.</p> },
    { id: "react", name: "React", icon: <DiReact />,
    texto:<p>o React cria aplicações web para serem executadas em navegadores, sejam eles para desktop, mobile ou qualquer outro dispositivo.</p> },
    { id: "database", name: "Banco de Dados", icon: <DiDatabase />,
    texto:<p>Repositórios de dados que podem ser customizados para armazenar informações estruturadas por meio de registros
      Tenho estudado Análise de Dados e ETL usando Python.</p> },
  ];

const TechnologiesContainer = () => {
    return (
      <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
            {technologies.map((tech) => (
            <div className="technology-card" id={tech.id} key={tech.id}>
              {tech.icon}
              <div className="technology-info">
                <>{tech.texto}</>
                
                   
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TechnologiesContainer;