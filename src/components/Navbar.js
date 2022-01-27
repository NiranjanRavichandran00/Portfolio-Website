import { HiOutlineMenu } from "react-icons/hi"
import logo from "../logo.svg"
import git from "../git.png"

const Navbar = () => {
    return (
        <header>
            <img src = {logo} alt = "logo" class="logo" />
            <input type="checkbox" id="nav-toggle" class="nav-toggle"></input>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                    <li><a class ='link-git' href="#github">Github</a></li>
                </ul>
            </nav>
            <img src = {git} alt = "GitHub" class="git" />  
            <label for="nav-toggle" class="nav-toggle-label">
                <span>
                    <HiOutlineMenu size = {50} style={{color: '#D9D9D9'}}/>
                </span>
            </label>
        </header>
    )
}

export default Navbar
