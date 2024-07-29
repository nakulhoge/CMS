/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */

import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Img1 from "../Images/dedicated.png";
import Img2 from "../Images/webapp.png";
import Img3 from "../Images/mobility.png";
import Img4 from "../Images/ecommerce.png";
import Img5 from "../Images/salesforce.png";
import Img6 from "../Images/UIUX.png";
import Img7 from "../Images/staffing (1).png";
import Img8 from "../Images/networking.png";
import Img9 from "../Images/staffing (1).png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Static = () => {
  return (
    <div>
      <Container class="panel-section mt-5 mb-5">
        <section className="panel-msg">
          <Row>
            <Col md={6}>
              <h2>
                <strong>Outsourcing Dedicated Team</strong>
              </h2>
              <p className="mt-5">
                The dedicated team model in outsourcing is an advantageous
                choice for long-term cooperation when a large volume of work is
                expected. A collaboration-based dedicated team is great fit for
                speedy growth of business with highly specialized talent. We, at
                edreamz, have a talent pool of 40+ highly qualified developers.
                We follow Dedicated Development Centre to increase productivity
                of developers. This DDC approach will assist your business in
                different manners to climb up swiftly as well as reduce
                development cost and time. The edreamz team is finely designed
                to reduce your expenses, while assuring high quality and on time
                delivery of the projects. For our valuable clients, it means:
              </p>
              <Button variant="primary">Read More</Button>
            </Col>
            <Col md={6} className="img-sec">
              <img src={Img1} alt="img" />
            </Col>
          </Row>
        </section>
      </Container>
      <Container class="panel-section1 mt-5 mb-5">
        <section className="panel-msg1">
          <Row>
            <Col md={6} className="img-sec">
              <img src={Img2} alt="img" className=" mt-5 " />
            </Col>
            <Col md={6}>
              <h2 className="mt-5">
                <strong>Web Applications</strong>
              </h2>
              <p className="mt-5">
                Our proficient web applications allow you to utilises web
                technology to perform different tasks easily. eDreamz is a web
                development company with over a decade of experience in building
                web applications. Our dedicated app developers have successfully
                completed over 500 projects for a variety of industries and
                business domains, including e-Commerce, Healthcare, Food,
                Education and more.
              </p>
              <Button variant="primary">Read More</Button>
            </Col>
          </Row>
        </section>
      </Container>
      <Container class="panel-section2 mt-5 mb-5">
        <section className="panel-msg2">
          <Row>
            <Col md={6}>
              <h2 className="mt-5 mb-5">
                <strong>Mobility Solutions</strong>
              </h2>
              <p className="mt-5">
                eDreamz is a leading-edge mobile application development company
                in India. We are bounded and dedicated to offer reliable, and
                high-quality services in iOS and Android App designs and
                development. We have, application developers include
                high-skilled analysts, UX experts and certified software
                engineers. They are well-versed in developing apps for the major
                platforms such as iOS, Android or both. We start with defining
                goals for mobile application, understanding key components,
                target audience and technology considerations.
              </p>
              <Button variant="primary">Read More</Button>
            </Col>
            <Col md={6} className="img-sec">
              <img src={Img3} alt="img" className=" mt-5 " />
            </Col>
          </Row>
        </section>
      </Container>
      <Container class="panel-section3 mt-5 mb-5">
        <section className="panel-msg3">
          <Row>
            <Col md={6} className="img-sec">
              <img src={Img4} alt="img" className=" mt-5 " />
            </Col>
            <Col md={6}>
              <h2 className="mt-5">
                <strong>Ecommerce Solutions</strong>
              </h2>
              <p className="mt-5">
                'e-commerce is especially designed for shopping pleasure.' It is
                web-based platform to showcase and brand your products and
                services. It is more than just e-commerce products on web page.
                eDreamz supports your business to devise and build trendy
                e-commerce store features to cater new browsing as well as
                existing customers. Best e-commerce platforms are more reliable
                and time saving. With these distinct features; it has become
                more popular and secure. We offer your business end-to-end
                e-commerce solution with a professional online presence. It is
                through e-commerce platform, you can reach to limitless users,
                yet potential customers for selling products or offering
                services.
              </p>
              <Button variant="primary">Read More</Button>
            </Col>
          </Row>
        </section>
      </Container>
      <Container class="panel-section4 mt-5 mb-5">
        <section className="panel-msg4">
          <Row>
            <Col md={6}>
              <h2 className="mt-5">
                <strong>Salesforce</strong>
              </h2>
              <p className="mt-5">
                Lead towards opportunity and then opportunity to business are
                the major concern area for any businessman. eDreamz, with its
                innovative approach, developed SalesForce application to
                supports and improves work force customer satisfaction
                productivity. It is SaaS-based and with optimum use of cloud
                computing. With years of experience, we deliver quick, quality
                and cost-effective Salesforce Consulting services at minimal
                risk.
              </p>
              <Button variant="primary">Read More</Button>
            </Col>
            <Col md={6} className="img-sec">
              <img src={Img5} alt="img" className=" mt-5 " />
            </Col>
          </Row>
        </section>
      </Container>
      <Container class="panel-section5 mt-5 mb-5">
        <section className="panel-msg5">
          <Row>
            <Col md={6} className="img-sec">
              <img src={Img6} alt="img" className=" mt-5 " />
            </Col>
            <Col md={6}>
              <h2 className="mt-5">
                <strong>UI Design, UX Design</strong>
              </h2>
              <p className="mt-5">
                eDreamz is one of the best UI and UX design companies. We aim of
                being unique at designing products. Our attractive UI and UX
                designs deliver a positive and satisfactory experience by
                bridging the gap between the stakeholder goals and user
                expectations. We use interfaces to settle an interaction with
                device through varied forms like graphs, diagrams, pages and
                visual elements. We work to understand and quantify your problem
                to provide unique UI / UX design services that caters an
                appealing experience
              </p>
              <Button variant="primary">Read More</Button>
            </Col>
          </Row>
        </section>
      </Container>
      <Container class="panel-section6 mt-5 mb-5">
        <section className="panel-msg6">
          <Row>
            <Col md={6}>
              <h2 className="mt-5">
                <strong>Strategic Staffing</strong>
              </h2>
              <p className="mt-5">
                eDreamz Strategic Staffing is all about providing
                project-specific skilled workforce. Our strategic staffing
                service provides you skilled UI & UX designers, programmers and
                developers. These competent experts are ready to join your team
                quickly. Even these experts work on your project, we manage and
                take care of employee's working environment, salary, benefits
                and appraisals as per result output. We satisfy your need of
                project-specific experienced talent, devoted and committed full
                time employee on project, with our strategic staffing service
              </p>
              <Button variant="primary">Read More</Button>
            </Col>
            <Col md={6} className="img-sec">
              <img src={Img7} alt="img" className=" mt-5 " />
            </Col>
          </Row>
        </section>
      </Container>
      <Container class="panel-section7 mt-5 mb-5">
        <section className="panel-msg7">
          <Row>
            <Col md={6} className="img-sec">
              <img src={Img8} alt="img" className=" mt-5 " />
            </Col>
            <Col md={6}>
              <h2 className="mt-5">
                <strong>B2B solutions</strong>
              </h2>
              <p className="mt-5">
                APPSeCONNECT, a product by InSync is a next-generation
                integration platform as a service (iPaaS) which can connect all
                major line-of-business applications. It empowers organizations
                to automate their vital business processes by enabling
                real-time, bi-directional data exchange between applications.
                APPSeCONNECT streamlines business operations, thus directly
                enhancing productivity and accelerating growth.
              </p>
              <Button variant="primary">Read More</Button>
            </Col>
          </Row>
        </section>
      </Container>
      <Container class="panel-section8 mt-5 mb-5">
        <section className="panel-msg8">
          <Row>
            <Col md={6}>
              <h2 className="mt-5">
                <strong>Wix Development Services</strong>
              </h2>
              <p className="mt-5">
                Welcome to our Wix development services page! At Edreamz, we
                specialize in helping businesses and individuals create
                beautiful and functional websites using the Wix platform.
                Whether you need a simple website to showcase your products or
                services, or a more complex site with advanced functionality, we
                have the expertise to make it happen.
              </p>
              <Button variant="primary">Read More</Button>
            </Col>
            <Col md={6} className="img-sec">
              <img src={Img9} alt="img" className=" mt-5 " />
            </Col>
          </Row>
        </section>
      </Container>
     
    </div>
  );
};

export default Static;
