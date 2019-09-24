import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './carousel.css';

const content = [
  {
    title: 'Vulputate Mollis Ultricies Fermentum Parturient',
    description: 'Aenean eu leo quam. Pellentesque ornare.',
    button: 'Read More',
    image: 'https://i.imgur.com/ZXBtVw7.jpg',
    user: 'Luan Gjokaj',
    userProfile: 'https://i.imgur.com/JSW6mEk.png',
  },
  {
    title: 'Tortor Dapibus Commodo Aenean Quam',
    description: 'Nullam id dolor id nibh ultricies vehicula ut id elit.',
    button: 'Discover',
    image: 'https://i.imgur.com/DCdBXcq.jpg',
    user: 'Erich Behrens',
    userProfile: 'https://i.imgur.com/0Clfnu7.png',
  },
  {
    title: 'Phasellus volutpat metus',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    button: 'Buy now',
    image: 'https://i.imgur.com/DvmN8Hx.jpg',
    user: 'Bruno Vizovskyy',
    userProfile: 'https://i.imgur.com/4KeKvtH.png',
  },
];

function Carousel() {
  return (
    <Slider>
      {content.map((article, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${article.image}') no-repeat center center`, }}
        >
          <div className="inner">
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <button>{article.button}</button>
          </div>
          <section>
            <img src={article.userProfile} alt={article.user} />
            <span>
              Posted by <strong>{article.user}</strong>
            </span>
          </section>
        </div>
      ))}
    </Slider>
  );
}

export default Carousel;
