import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';

const Movie = ({
  title,
  voteAverage,
  releaseDate,
  poster_path,
  id,
  popularity,
  overview,
  ...props
}) => {

  const cardStyle = {
    width: "250px",
    marginBottom: "50px"
  }
  return (
    <Col md={4}>
      <Card style={cardStyle} bg="light" border="light">
        <Link to={{
          pathname: `/movieDetails/${id}`,
          state: { movieId: id }
        }}
        >
          <Card.Img variant="top"
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}  />
        </Link>
        <Card.Body >
          <Card.Title>
            {title}
          </Card.Title>
          <Card.Subtitle>
            Release Date : {releaseDate}
          </Card.Subtitle>
          {overview ?<Card.Text>
            {overview}
          </Card.Text> : null}
          <Card.Text>
            Vote Average : {voteAverage}
            <br />
            Popularity : {popularity}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )

}

export default Movie;