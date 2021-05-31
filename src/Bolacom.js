import React from "react";
import { Link } from "react-router-dom";
import data from "./datapandit";
import data2 from "./databolacom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Bolacom(props) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-10 col-lg-10 offset-1 offset-lg-1">
            <div className="row my-5">
              {
                (
                data2.bolacom.map((bolacom) => (
                  <div className="col-4">
                    <Card
                      className="tagCard"
                      style={{ borderColor: "rgba(255, 255, 255, 0)" }}
                    >
                      <Link to={bolacom.Link}>
                        <CardImg
                          top
                          width="100%"
                          src={bolacom.Img}
                          alt="Card image cap"
                        />
                      </Link>
                      <CardBody>
                        <CardTitle tag="h5">
                            {bolacom.Date}
                        </CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">
                          {bolacom.Source}
                        </CardSubtitle>
                        <CardText>{bolacom.Title}</CardText>
                      </CardBody>
                    </Card>
                  </div>
                )))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Bolacom;
