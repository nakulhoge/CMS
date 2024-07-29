
/* eslint-disable jsx-a11y/img-redundant-alt */

import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Static from "./Static";

const PanelSection = ({ data, index }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (<>

    <Container className={`panel-section mt-5 mb-5 panel-section${index + 1}`}>
      <section className={`panel-msg${index}`}>
        <Row>
      
          <Col md={6} className={`img-sec order-md-${index % 2 === 0 ? 1 : 2}`}>
            {data.image && (
              <img
                src={`data:image/jpeg;base64,${data.image}`}
                alt="Panel Image"
                className="post-image"
              />
            )}
          </Col>
          <Col md={6} className={`order-md-${index % 2 === 0 ? 2 : 1}`}>
            <h2 className="mt-5">
              <strong>{data.title}</strong>
            </h2>
            <p className="mt-5" dangerouslySetInnerHTML={{ __html: showFullContent ? data.summary : (typeof data.summary === 'string' ? data.summary.slice(0, 100) + '...' : '') }}></p>

            {showFullContent && <p dangerouslySetInnerHTML={{ __html: data.paragraph }}></p>}
            <Button variant="primary" onClick={toggleContent}>
              {showFullContent ? "Read Less" : "Read More"}
            </Button>
          </Col>
        </Row>
      </section>
    </Container></>
  );
};

const Home = () => {
  const [panelData, setPanelData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/allposts")
      .then((response) => {
        setPanelData(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <Static />
      {panelData.map((data, index) => (
        <PanelSection key={index} data={data} index={index} />
      ))}

      <Container fluid className="tesiminoal">
        <Container>
          <section className="testimonial mt-5 mb-5">
            <h2 className="text-center pt-3 pb-3">
              What our customer says about us
            </h2>
            <p className="text-center mb-5">
              Our team has received hundred of appreciation emails & calls for
              our efforts. Publishing all testimonials is not possible on the
              website, but you can read a few of them below.
            </p>
            <Row>
              {[1, 2].map((item) => (
                <Col md={12} key={item} className="mb-4">
                  <Card style={{ width: "100%" }}>
                    <Card.Body>
                      <Card.Title>Roseville, MN USA</Card.Title>
                      <Card.Subtitle className="mb-2">
                        Oct 2022★★★★★
                      </Card.Subtitle>
                      <Card.Text>
                        We have had a good experience with eDreamz,They are
                        responsive, organized, experienced, hard-working, and
                        knowledgeable etc. The fact that we are in the USA has
                        been no problem - we just communicate as to what times we
                        can set up meetings. Their emails are clear and succinct.
                        They work as a team with us. We initially contacted many
                        companies - most in India to save money. Also, I liked
                        their payment plan option and cost.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </section>
        </Container>
      </Container>
    </div>
  );
};

export default Home;
 