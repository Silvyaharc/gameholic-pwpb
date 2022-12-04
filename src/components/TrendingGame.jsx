import { Container, Row, Col, Card, Image } from "react-bootstrap";
import fortnite from "../asset/trending/fortnite.jpg";
import guardian from "../asset/trending/guardianofthegalaxy.png";
import watchdogs from "../asset/trending/watchdogs.jpg";

const TrendingGame = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white text-center" id="trending">
          TRENDING GAMES
        </h1>
        <br />
        <Row>
          <Col md={4}>
            <Card className="gameImage">
              <Image src={fortnite} alt="Fortnite" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">FORTNITE</Card.Title>
                  <Card.Text className="text-left">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatem sequi, nemo libero a ex aut! Esse fuga autem
                    similique quisquam nam vel aliquam commodi temporibus
                    eveniet sint, voluptatibus natus at!
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="gameImage">
              <Image src={guardian} alt="Guardian" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    GUARDIAN OF THE GALAXY
                  </Card.Title>
                  <Card.Text className="text-left">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatem sequi, nemo libero a ex aut! Esse fuga autem
                    similique quisquam nam vel aliquam commodi temporibus
                    eveniet sint, voluptatibus natus at!
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="gameImage">
              <Image src={watchdogs} alt="Watchdogs" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">WATCH DOGS</Card.Title>
                  <Card.Text className="text-left">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatem sequi, nemo libero a ex aut! Esse fuga autem
                    similique quisquam nam vel aliquam commodi temporibus
                    eveniet sint, voluptatibus natus at!
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default TrendingGame;
