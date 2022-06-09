import React from 'react';

class Contact extends React.Component{
    render(){
        return(
            <section className="contact" id="contact">
            <div className="container">
                <h3 className='section-title'>Let's Get Intouch</h3>
                    <div class="input txt-center flex-center">
                        <div>
                            <form id = 'message' method='post' action = ''>
                                <input id = 'name' type="text" name='name' placeholder="Name"/>
                                <input class = 'email' type="email" name="email" placeholder="Email"/>
                                <textarea name="message" id="txta" cols="20" rows="5" placeholder="Message me here :)"></textarea>
                                <button class = 'sbtn' type = 'submit'>Send </button>
                            </form>
                        </div>  
                    </div>
                    {/* <div class="text-contact">
                        <div class="soc">
                            <a href="#"><i class="fab fa-github fa-2x"></i></a>
                            <a href="#"><i class="fab fa-twitter fa-2x"></i></a>
                            <a href="#"><i class="fab fa-linkedin fa-2x"></i></a>
                        </div>
                    </div> */}
            </div>
        </section>
        )
    }
}
export default Contact;