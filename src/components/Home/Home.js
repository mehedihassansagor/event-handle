import React from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer' 
import Service from '../Service/Service'
import Contact from '../Contact/Contact'
// import PeopleData from '../People/PeopleData'

import './Home.css'

const Home = () => {
    return (
        <div >
             <Header />
             <Service />
             <div className="contact-style">
                 <Contact/>
             </div>
             <div className="footer-style">
             <Footer />
            
             </div>
        </div>
    );
};

export default Home;