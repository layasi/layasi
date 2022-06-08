import React from 'react';
import headshot from '../images/transparent.png';


class Hero extends React.Component{
    render(){
        console.log(headshot);
        return(
            <div>
                <div class="intro" id ="home">
                    <div class="container grid">
                        <div class="mine">
                            <h3>I'm Abubakar Iliyasu</h3>
                            <p>I build web applications with the experience to make your business have a competative edge in your niche</p>
                            <div class="get-form">
                                <span class="ex"><i class="fa fa-angle-down"></i></span>
                                <ul class="ct">
                                    <li class="cnt"><a href="tel:+2348067506321"><i class="fa fa-phone" aria-hidden="true"></i>Call Me</a></li>
                                    <li class="cnt"><a href="mailto:aalayasi@gmail.com" target="_blank"><i class="fas fa-paper-plane"></i>Email</a></li>
                                    <li class="cnt"><a href="https://wa.me/+2348067506321" target="_blank"><i class="fab fa-whatsapp"></i>Whatsapp</a></li>
                                </ul>
                            </div>
                            <a href="#" class="btn" id="button">Get Intouch</a>
                        </div>
                        <div class="img">
                            <img src={headshot} alt="Abubakar Iliyasu Picture"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Hero;