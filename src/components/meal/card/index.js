import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.div`
  height: 5rem;
  width: 5rem;
  border: 1px solid green;
  margin: 1rem;
  overflow: scroll;
  
  :hover {
    border: 2px solid green;
  }
`;

const MealCard = ({ title }) => (
  <Card>
    { title }
  </Card>
);

MealCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export { MealCard, };
