import React from 'react';

const Header  = () => {
    return (
        <div>
            <section className="header">
        <header className="my-header">
            <div className="logo">
                <h3><a href="#home">Abubakar Iliyasu</a></h3>
            </div>
            <nav className="navbar">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href = "#skills">Skills</a></li>
                    <li><a href = "#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="{{url('cv/Abubakar Iliyasu Resume.pdf')}}">Resume</a></li>
                </ul>
            </nav>
        </header>
    </section>

        </div>
    )
}
export default Header;