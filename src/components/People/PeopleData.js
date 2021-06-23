import React from 'react';
import './PeopleData.css'

import sagorimg from '../images/sagorimg.jpeg'
import kamonimg from '../images/kamonimg.jpg'
import mehediimg from '../images/mehediimg.jpeg'

import People from './People'

// 
const peoples = [
    {
    name: 'Mehedi Hassan Sagor',
    title: "Chief Executive Officer",
    img: sagorimg,
    description: "A developer is an individual that builds and create software and applications. He or she writes",
},
{
    name: 'Kamon Ahmmed',
    title: "Programmer",
    img: kamonimg,
    description:"A developer is also known as a software developer, computer programmer, programmer,"
},
{
    name: 'Hassan Mehedi',
    title: "Customer Services",
    img: mehediimg,
    description:"Customer support is more than just providing answers; it's an important part of the promise your brand makes to its customers."
},]

const PeopleData = () => {
    return (
        <div className="grid-style container">
            {
                    peoples.map(people =><People people={people}></People>)
            }
        </div>
    );
};

export default PeopleData;