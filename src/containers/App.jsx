import React from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const App = () => {
  const initialState = useInitialState(API);

  return (
    <div className='App'>
      <Header />
      <Search />

      {
        initialState.mylist && initialState.mylist.length > 0 && (
          <Categories title='Mi Lista'>
            <Carousel>
              <CarouselItem />

            </Carousel>
          </Categories>
        )
      }

      <Categories title='Tendencias'>
        <Carousel>
          {
            initialState.trends && initialState.trends.map((item) => (
              <CarouselItem
                key={item.id}
                {...item}
              />
            ))
          }

        </Carousel>
      </Categories>

      <Categories title='Originales de platzi'>
        {
          initialState.originals && initialState.originals.map((item) => (
            <CarouselItem
              key={item.id}
              {...item}
            />
          ))
        }
      </Categories>

      <Footer />
    </div>
  );
};

export default App;
