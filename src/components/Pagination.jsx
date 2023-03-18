import React from 'react'
import '../styles/Pagination.css'

const Pagination = ({ cardsPerPage, totalCards, paginate }) => {
    const pageNumber = [];

    for(let i=1; i<=Math.ceil(totalCards / cardsPerPage); i++){//math.ceil is used to roundUp
        pageNumber.push(i);
    }

    return (
    <nav className='page-nav'>
        <ul className='pagination'>
            <button className='page-button button'>prec</button>
            {pageNumber.map(number => (
                <li onClick={() => paginate(number)} key={number} className='page-item'>
                    <a  href='##' className='page-link'>
                        {number}
                    </a>
                </li>
            ))}
            <button className='page-button button'>suiv</button>
        </ul>

    </nav>
  )
}

export default Pagination