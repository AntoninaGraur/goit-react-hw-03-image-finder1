import React from 'react';
import { LoadMoreBtn } from './Button.styled';

const Button = ({ onClick }) => (
  <LoadMoreBtn
    type="button"
    onClick={onClick}
   
  >
    Load more
  </LoadMoreBtn>
);

export default Button;

// if (hits.length < PER_PAGE) {
//       LoadMoreBtn.classList.add('is-hidden');
//        return toast.error('Sorry there no more images');
//     } else {
//       LoadMoreBtn.classList.remove('is-hidden');
//     }
