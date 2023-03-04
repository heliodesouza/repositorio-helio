import {FaLinkedinIn, FaGithub} from "react-icons/fa";
//Para lincar redes sociais



import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    {name: "linkedin", icon: <FaLinkedinIn />,
text_link:"https://www.linkedin.com/in/h%C3%A9lio-de-souza-289749267/"},
    {name: "github", icon: <FaGithub />,
text_link:"https://github.com/heliodesouza"},
];
const SocialNetworks = () => {
    return <section id="social-networks">
        {socialNetworks.map((network) =>(
            <a href={network.text_link} className='social-btn' id={network.name} key={network.name}>
                {network.icon}
            </a>

        ))}
    </section>;
}

export default SocialNetworks