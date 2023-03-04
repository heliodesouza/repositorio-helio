import '../styles/components/maincontent.sass'
import AboutContainer from './AboutContainer'
import ObjetivoContainer from './ObjetivoContainer'
import ProjectsContainer from './ProjectsContainer'
import TecnologiesContainer from './TecnologiesContainer'

const MainContent = () => {
    return <main id="main-content">
        <AboutContainer />
        <ObjetivoContainer />
        <TecnologiesContainer />
        <ProjectsContainer />
    </main>
}
export default MainContent