import { Container, Row, Col, Card, Image } from "react-bootstrap";
import doom from "../asset/best/doom.jpg";
import evildead from "../asset/best/evildead.jpg";
import valorant from "../asset/best/valorant.jpg";

const BestGame = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white text-center" id="best">
          BEST GAMES
        </h1>
        <br />
        <Row>
          <Col md={4}>
            <Card className="gameImage">
              <Image src={doom} alt="Doom" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">DOOM</Card.Title>
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
              <Image src={evildead} alt="Evildead" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">EVIL DEAD</Card.Title>
                  <Card.Text className="text-left">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatem sequi, nemo libero a ex aut! Esse fuga autem
                    similique quisquam nam vel aliquam commodi temporibus
                    eveniet sint, voluptatibus natus at!t
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
              <Image src={valorant} alt="Watchdogs" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">VALORANT</Card.Title>
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
export default BestGame;
