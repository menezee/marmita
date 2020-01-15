import React, { useState } from 'react';
import styled from 'styled-components';
import { MealCard, MealList } from '../../components';
import styles from './manager.module.scss';

export const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
`;

function Manager() {
  const [mealInput, setMealInput] = useState('');
  const [menu, setMenu] = useState([
    'fried eggs',
    'sushi',
  ]);

  const addMeal = () => {
    setMenu(oldMenu => [...oldMenu, mealInput]);
    setMealInput('');
  };

  return (
    <div>
      <Title>
        Manager
      </Title>

      {/* ADD MEAL */}
      <form
        className={styles.centralizedText}
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <input
          onChange={e => { setMealInput(e.target.value) }}
          value={mealInput}
        />
        <button onClick={addMeal}>
          include
        </button>
      </form>

      <MealList>
        {
          menu
            .map((meal, i) => (
              <MealCard
                title={meal}
                key={i}
              />
            ))
        }
      </MealList>
    </div>
  );
}

export { Manager, };
