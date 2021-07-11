import React from 'react';
import './Footer.css'
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import gmail from '../images/gmail.png';
import './Footer.css'

const Footer = () => {
    return (
        <div class="footer-dark">
            <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><>Interior Design</></li>
                            <li><>Interior Design in shop</></li>
                            <li><>Interior Design in office</></li>
                            <li><>Wedding Planners</></li>
                            <li><>Birthday Party Planning</></li>
                            <li><>Company Parte</></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>Event Maker</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium temporibus id libero sit vel exercitationem rem, tempora accusamus saepe beatae odit optio officiis laboriosam voluptates nobis vitae perspiciatis ullam ut.</p>
                    </div>
                    <div class="col item social">
                    <a target = "blank" href="https://www.facebook.com/sagor286"><i class="icon ion-social-facebook"><img style = {{height:'100%',width:'100%'}} src={facebook} alt=""/></i></a>

                    <a target = "blank" href="https://www.instagram.com/"><i class="icon ion-social-twitter"><img style = {{height:'100%',width:'100%'}} src={instagram} alt=""/></i></a>

                    <a target = "blank" href="https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp"><i class="icon ion-social-snapchat"><img style = {{height:'100%',width:'100%'}} src={gmail} alt=""/></i></a>
                    </div>
                </div>
                <p class="copyright">MEHEDI HASSAN SAGOR © 2021</p>
            </div>
        </footer>
        </div>
    );
};

export default Footer;