import React from 'react';
import './Card.css';
import CardItem from './CardItem';
import image1 from '../../Images/Rajasthan.jpg';
import image2 from '../../Images/Himachal.jpg';
import image3 from '../../Images/Assam.jpg';
import image4 from '../../Images/Gujarat.jpg';
import image5 from '../../Images/Karnataka.jpg';
import image6 from '../../Images/Guj.jpg';
import image7 from '../../Images/TamilNadu.jpg';

function Cards() {
  return (
    <div className='cards'>
      <p>Check out these EPIC Destinations!</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={image1}
              text='DESCRIPTION FROM MONGO'
              label='RAJASTHAN'
              path='/'
            />
            <CardItem
              src={image2}
              text='DESCRIPTION FROM MONGO'
              label='H.P.'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={image3}
              text='DESCRIPTION FROM MONGO'
              label='ASSAM'
              path='/'
            />
            <CardItem
              src={image4}
              text='DESCRIPTION FROM MONGO'
              label='GUJARAT'
              path='/'
            />
            <CardItem
              src={image5}
              text='DESCRIPTION FROM MONGO'
              label='KARNATAKA'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={image6}
              text='DESCRIPTION FROM MONGO'
              label='KERALA'
              path='/'
            />
            <CardItem
              src={image7}
              text='DESCRIPTION FROM MONGO'
              label='T.N.'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
