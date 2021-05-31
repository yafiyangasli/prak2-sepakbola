import React from "react";
import { Link } from "react-router-dom";
import data from "./datapandit";
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

function Pandit(props) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-10 col-lg-10 offset-1 offset-lg-1">
            <div className="row my-5">
              {
                (data.pandit.map((pandit) => (
                  <div className="col-4">
                    <Card
                      className="tagCard"
                      style={{ borderColor: "rgba(255, 255, 255, 0)" }}
                    >
                      <Link to={pandit.Link}>
                        <CardImg
                          top
                          width="100%"
                          src={pandit.Img}
                          alt="Card image cap"
                        />
                      </Link>
                      <CardBody>
                        <CardTitle tag="h5">
                            {pandit.Date}
                        </CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">
                          {pandit.Source}
                        </CardSubtitle>
                        <CardText>{pandit.Title}</CardText>
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
export default Pandit;
