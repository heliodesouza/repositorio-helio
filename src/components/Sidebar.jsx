import "../styles/components/sidebar.sass";
import Avatar from '../img/helio2.png';
import InformationContainer from './InformationContainer';
import SocialNetworks from './SocialNetworks'; 

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Hélio de Souza"/>
            <p className="title">Desenvolvedor Web</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="#" className="btn">
                Download curriculo
            </a>
        </aside>
    );
};

export default Sidebar;