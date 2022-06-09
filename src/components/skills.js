import React from 'react';

class Skills extends React.Component{
    render(){
        return(
            <section className="services" id ="skills">
        <div className="container">
            <h3 className='section-title'>Skills</h3>
            <div className="faws">
                <div>
                    <i className="fa fa-code fa-3x"></i>
                    <h3>UX/UI</h3>
                    <p>Develop UI/UX Web Application</p>
                </div>
                <div>
                    <i className="fas fa-sitemap fa-3x"></i>
                    <h3>SEO</h3>
                    <p>Search Engine Optimazed Websites</p>
                </div>
                <div><i className="fab fa-elementor fa-3x"></i>
                    <h3>Wordpress</h3>
                    <p>Develop your custom wordpress theme and plugins tailor-made for your business</p>
                </div>
                <div> <i className="fa fa-globe fa-3x"></i>
                    <h3>Full Stack System</h3>
                    <p>A fullstack system with PHP Laravel to digitalize your business with the latest and secured cutting edge technology</p>
                </div>
            </div>
        </div>
    </section>
        )
    }
}
export default Skills;