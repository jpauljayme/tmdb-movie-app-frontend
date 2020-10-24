import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';
import axios from 'axios';
import Pagination from 'react-js-pagination';
import { Container, Row, Col, CardDeck } from 'react-bootstrap';

const PopularMovies = (props) => {
  const [movies, setMovies] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [totalMovies, setTotalMovies] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      axios.get(`/getPopularMovies?page=${activePage}`)
        .then(response => {
          const data = response.data;
          const movies = data.results;
          setMovies(movies);
          setTotalMovies(response.data.total_results);
          setTotalPages(response.data.total_pages);
          return response;
        });
    };
    fetchData();
  }, [activePage]);

  const handlePageChange = pageNumber => {
    setActivePage(pageNumber)
  }


  let movieList = <h2>Retrieving movies....</h2>;
  let pagination = <p>Loading...</p>;
  if (movies) {
    movieList = movies.map(movie => (
      <Movie
        key={movie.id}
        id={movie.id}
        title={movie.title}
        voteAverage={movie.vote_average}
        releaseDate={movie.release_date}
        poster_path={movie.poster_path}
        popularity={movie.popularity}
      />
    ));

    if (totalPages && totalMovies) {
      pagination = <Pagination
        activePage={activePage}
        totalItemsCount={totalMovies}
        pageRangeDisplayed={5}
        itemsCountPerPage={20}
        onChange={handlePageChange}
        itemClass="page-item"
        linkClass="page-link"
      />;
    }
  }
  return (
    <Container fluid="md">
      <Row>
        <CardDeck>
          {movieList}
        </CardDeck>
      </Row>
      <Container>
        <Row>
        <Col xs={6} md={4}></Col>
        <Col xs={6} md={4}>
          {pagination}
        </Col>
        <Col xs={6} md={4}></Col>
        </Row>
      </Container>

    </Container>
  );
}

export default PopularMovies;