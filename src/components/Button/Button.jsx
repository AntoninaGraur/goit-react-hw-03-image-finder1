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
//       loadMoreBtn.classList.add('is-hidden');
//       Notiflix.Report.warning('We are sorry', 'But you have reached the end of search results.', 'Fine');
//     } else {
//       loadMoreBtn.classList.remove('is-hidden');
//     }
