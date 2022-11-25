import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Container, Row, Col } from "react-bootstrap";

class CarouselOfMovies extends React.Component {
  state = {
    movies: [],
  };

  fetchMovies = async () => {
    try {
        const response = await fetch(
            `http://www.omdbapi.com/?apikey=be0e715&s=${this.props.title.toLowerCase()}`
          );
          if (response.ok) {
            const moviesReadable = await response.json();
            this.setState({
                movies: moviesReadable
            });
          } else {
            console.log("Error! Danger! Run!");
          }
    } catch (error) {
        console.log(error);
    }
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <>
        <Carousel>
          <Carousel.Item>
            <Container>
              <Row>
                <Col className="d-flex">
                  {this.state.movies.Search && this.state.movies.Search.map((movie) => ( //Movies needs to NOT be empty - so, for them to be truthy, in order for the map to occur
                      <div key={movie.imdbID}>
                        <h6>{movie.Title}</h6>
                        <img src={movie.Poster} alt={movie.Title} className="h-100 w-80"/>
                      </div>
                    ))}
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}
export default CarouselOfMovies;
