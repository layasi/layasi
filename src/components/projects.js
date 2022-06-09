import React from 'react';

class Projects extends React.Component{
    render(){
        return(
            <section className="projects" id = "projects">
        <div className="container swiper mySwiper">
            <h3 className='section-title pro-title'>Recent Projects</h3>
            <div className="pro swiper-wrapper">
                <div className="card swiper-slide">
                    <a href="https://github.com/layasi/laravel" class="btn one">
                    <img src="{{url('images/code.jpg')}}" alt="code image"/>
                    <h3>Laravel CRUD App</h3>
                    <p>From this project i was able to use routes, controllers, and view to build a simple MVC project with CRUD functions</p>
                    </a>
                </div>
                <div className="card swiper-slide"><a href="https://sokotoguestinn.ng" target="_blank">
                    <img src="{{url('images/guestinn.png')}}" alt="sokoto guest inn website snippet"/>
                    <h3>Sokoto Guest Inn</h3>
                    <p>This project come into being when i proposed to the management of Sokoto Guest Inn Hotel to upgrade their website to a content management system.</p>
                    </a>
                </div>
                <div className="card swiper-slide">
                    <a href="#" class="btn three">
                    <img src="{{url('images/woman.webp')}}" alt="woman coding image"/>
                    <h3>Laravel with Payment Gateway</h3>
                    <p>I integrated a payment gateway to a booking project to be enable to check orders and make payment if the date you selected is available</p>
                    </a>
                </div>
                <div className="card swiper-slide">
                    <a href="https://socjournal.udusok.edu.ng" target="_blank" class="btn three">
                    <img src="{{url('images/sociology.png')}}" alt="Sociology Journal Website"/>
                    <h3>A Sociology Journal Website</h3>
                    <p>This project was developed in a team of two by myself and a collegue. its a role based system that allow the author, editor, and manager to use the system for submission of articles</p>
                    </a>
                </div>
                
                <div className="card swiper-slide" >
                    <a href="https://garkuwankabi.org.ng" target="_blank" rel="noopener noreferrer">
                    <img src="{{url('images/ggarkuwankabi.png')}}" alt="garkuwan kabi foundation website"/>
                    <h3>Garkuwan Kabi Foundation</h3>
                    <p>Its an NGO website for the philanthropic work of the Garkuwan Kabin Argungu. This was done with a content management system</p>
                    </a>
                </div>
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-pagination"></div>
        </div>
    </section>
        )
    }
}
export default Projects;