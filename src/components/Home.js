import React from 'react'
import './Home.css'
// import Header from './Header'
import Product from './Product'
const Home = () => {
  return (
<>

    {/* <Header/> */}
    <div className='home'>
        <div className="home__container">
            <img
            className='home__image'
             src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
             alt="Home-banner" />
        <div className="home__row">
            <Product id="5787495"
             title='Groeien 3 Lights Cluster Chandelier Diamond Hanging Pendant Light With Braided Cord, Black, Round , Metal'
              price={730}
               image='https://images-eu.ssl-images-amazon.com/images/I/41idcUb1nqL._SY445_SX342_QL70_FMwebp_.jpg' 
                rating={5}/>
            <Product 
            id="49538094"
             title='PlayStation 4 Slim 1TB Console'
            price={239.0}
            rating={3}
            image='https://images-na.ssl-images-amazon.com/images/I/61n-yWHcmSS.__AC_SY300_SX300_QL70_FMwebp_.jpg'

            />
            
        </div>
        <div className="home__row">
            <Product
            id="4903850"
            
                title='AmazonBasics 127 cm (50 inches) 4K Ultra HD Smart LED Fire TV with Dolby Atmos and Dolby Vision (Black)'
                price={39000}
                rating={5}
                image='https://images-eu.ssl-images-amazon.com/images/I/41Y+SwHCJzL._AC_SX184_.jpg'
            />
            <Product
                id="23445930"
                title='Godinger Dublin Dinnerware Set - Includes Dinner Plates, Dessert Plates'
                price={79}
                rating={4}
                image='https://m.media-amazon.com/images/I/81IFZPNawHL._AC_SX679_.jpg'
            />
            <Product
            id="3254354345"
                title='Old Modern Handicrafts Wooden Model Ship HMS Sovereign of The Seas, Multi'
                price={89}
                rating={5}
                image='https://m.media-amazon.com/images/I/71rNMRiUINL._AC_SX679_.jpg'
            />
        </div>
        <div className="home__row">
            <Product
            id="90829332"
            
                title='Freenove Big Hexapod Robot Kit for Raspberry Pi 4 B 3 B+ B A+, Walking, Self Balancing, Live Video, Face Recognition, Pan Tilt, Ultrasonic Ranging, Camera Servo (Raspberry Pi NOT Included)'
                price={555}
                rating={3}
                image='https://images-na.ssl-images-amazon.com/images/I/71xsNTXXbgL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
            />
           
        </div>
        </div>
    </div>
</>
  )
}

export default Home