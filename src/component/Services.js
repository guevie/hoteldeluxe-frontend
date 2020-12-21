//rcc
import React, { Component } from 'react'
import Title from './Title'
import { FcSportsMode } from 'react-icons/fc'
import { FiWifi } from 'react-icons/fi'
import { GiMuscularTorso } from 'react-icons/gi'
import { AiFillBank } from 'react-icons/ai'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state ={
        services:[
            {
            icon:<FcSportsMode />,
            title:"Sport libre accès",
            info:'Il a été clairement démontré que la pratique régulière d\'une activité physique peut contribuer à diminuer.'
            },
            {
                icon:<AiFillBank />,
                title:"Les distributaires banquaires",
                info:'Il a été clairement démontré que la pratique régulière d\'une activité physique peut contribuer à diminuer.'
                },
            {
                icon: <FiWifi />,
                title:"Accès libre au WiFi",
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio delectus neque culpa obcaecati minima'
            },
            {
                icon:<GiMuscularTorso />,
                title:"Un coach personal",
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit soluta officiis possimus provident!'
            },            
            {
                icon: <FaBeer />,
                title:"Pas des boissons alcolisées",
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit soluta officiis possimus provident!'
            },
            {
                icon:  <FaShuttleVan />,
                title:"Navete gratuite",
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit soluta officiis possimus provident!'
            },
            {
                icon: <FaHiking />,
                title:"Randonnée sans fin",
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit soluta officiis possimus provident!'
            },
            {
                icon: <FaCocktail />,
                title:"Cocktail à volonté",
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit soluta officiis possimus provident!'
            }
    ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                {this.state.services.map((item,index) =>{
                    return <article key={index} className="sevice">
                    <span>{item.icon}</span> 
                    <h6>{item.title}</h6>
                    <p>{item.info}</p> 
                    </article>
                })}
                </div> 
               
            </section>
        )
    }
}
