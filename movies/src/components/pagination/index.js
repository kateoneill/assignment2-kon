import React, { useState, useEffect } from "react";
import MovieList from "../movieList";
import ReactPaginate from 'react-paginate';

const Pagination = ({ action, movies}) => {
  const [pageNumber, setPageNumber] = useState(0);
  const moviesPerPage = 10;
  const pagesVisited = pageNumber*moviesPerPage;
  let movieList = movies
  .slice(pagesVisited, pagesVisited + moviesPerPage)
  .map((movies) => {
    return (
      <MovieList action={action} movies={movies}></MovieList>
    )
  });


  const pageCount = Math.ceil(movies.length / moviesPerPage);
  const changePage = ({selected}) => {
    setPageNumber(selected);
  }

  return (
    <div>
      {movieList}
      <ReactPaginate 
        previousLabel={"previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName="PaginationBtn"
        previousLinkClassName="previousBtn"
        nextLinkClassName="nextBtn"
      />
    </div>
  
 );
}

export default Pagination ;