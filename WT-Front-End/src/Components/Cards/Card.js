import React from 'react';
import './Card.css';
import CardItem from './CardItem';
import image1 from '../../Images/image1.jpg';
import image2 from '../../Images/image2.jpg';
import image3 from '../../Images/image3.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={image1}
              text='DESCRIPTION FROM MOGO'
              label='MONGO'
              path='/'
            />
            <CardItem
              src={image2}
              text='DESCRIPTION FROM MOGO'
              label='MONGO'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={image1}
              text='DESCRIPTION FROM MOGO'
              label='MONGO'
              path='/'
            />
            <CardItem
              src={image2}
              text='DESCRIPTION FROM MOGO'
              label='MONGO'
              path='/'
            />
            <CardItem
              src={image3}
              text='DESCRIPTION FROM MOGO'
              label='MONGO'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
