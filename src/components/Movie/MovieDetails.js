import React, { Fragment, useState, useEffect } from 'react';
import { Button, Card, Container, Jumbotron } from 'react-bootstrap';
import axios from 'axios'
import { Link } from 'react-router-dom';
const MovieDetails = (props) => {

  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      axios.get(`/getMovieDetails?movieId=${props.location.state.movieId}`)
        .then(response => {
          console.log(response);
          const movieDetail = {
            id: response.id,
            title: response.data.title,
            voteAverage: response.data.vote_average,
            overview: response.data.overview,
            posterPath: response.data.poster_path,
            releaseDate: response.data.release_date,
            popularity: response.data.popularity
          }
          setMovieDetails(movieDetail);
        });
    };
    fetchData();
  }, []);

  let movie = <p>Fetching movie details....</p>
  const cardStyle = {
    width: "300px",
    marginBottom: "50px",
    margin: "auto"
  }
  if (movieDetails) {
    movie = <Fragment>
      {/* <Card style={cardStyle} bg="light" border="light">
      <Card.Img variant="top"
        src={`https://image.tmdb.org/t/p/original/${movieDetails.posterPath}`} />
      <Card.Body >
        <Card.Title>
          {movieDetails.title}
        </Card.Title>
        <Card.Subtitle>
          Release Date : {movieDetails.releaseDate}
        </Card.Subtitle>
        <Card.Text>
          {movieDetails.overview}
        </Card.Text>
        <Card.Text>
          Vote Average : {movieDetails.voteAverage}
          <br />
            Popularity : {movieDetails.popularity}
        </Card.Text>
      </Card.Body>

    </Card> */}

      <Jumbotron>
        <Card style={cardStyle} bg="light" border="light">
          <Card.Img variant="top"
            src={`https://image.tmdb.org/t/p/original/${movieDetails.posterPath}`} />
          <Card.Body >
            <Card.Title>
              {movieDetails.title}
            </Card.Title>
            <Card.Subtitle>
              Release Date : {movieDetails.releaseDate}
            </Card.Subtitle>
            <Card.Text>
              {movieDetails.overview}
            </Card.Text>
            <Card.Text>
              Vote Average : {movieDetails.voteAverage}
              <br />
            Popularity : {movieDetails.popularity}
            </Card.Text>
          </Card.Body>

        </Card>
        <Link to="/">
        <Button>Go Back</Button>
      </Link>
      </Jumbotron>

    </Fragment>
  }

  return (
    <Container>
      {movie}
    </Container>);
}

export default MovieDetails;