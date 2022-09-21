import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Actor.css";
import Rating from "react-rating";
import { Button } from "react-bootstrap";

const Actor = (props) => {
  const { name, DOB, location, img, Price, rating } = props.actor;
  return (
    <div className="  col-md-4 col-lg-3 col-sm-6 col-xs-12 p-1">
      <div className="card h-100">
        <img className="card-img-top" src={img} alt="Card imagecap"></img>
        <div className="card-body d-flex justify-content-between flex-column m-1">
          <h6 className="card-title">{name}</h6>
          <div className="d-flex justify-content-between">
            <div className="w-50 details-container">
              <p className="card-text"> Birthday: </p>
              <p className="card-text">{DOB}</p>
              <p className="card-text"> Location: </p>
              <p className="card-text">{location}</p>
            </div>
            <div className="w-50 rating-container">
              <div className="d-flex">
                <p className="rating-category w-50">Action: </p>
                <p className="rating w-50">
                  <Rating
                    initialRating={rating[0].action}
                    readonly
                    emptySymbol="fa fa-star-o fa-2x"
                    fullSymbol="fa fa-star fa-2x"
                  ></Rating>
                </p>
              </div>
              <div className="d-flex">
                <p className="rating-category w-50">Drama: </p>
                <p className="rating w-50">
                  <Rating
                    initialRating={rating[0].drama}
                    readonly
                    emptySymbol="fa fa-star-o fa-2x"
                    fullSymbol="fa fa-star fa-2x"
                  ></Rating>
                </p>
              </div>
              <div className="d-flex">
                <p className="rating-category w-50">Romance: </p>
                <p className="rating w-50">
                  <Rating
                    initialRating={rating[0].romance}
                    readonly
                    emptySymbol="fa fa-star-o fa-2x"
                    fullSymbol="fa fa-star fa-2x"
                  ></Rating>
                </p>
              </div>
              <div className="d-flex">
                <p className="rating-category w-50">Style: </p>
                <p className="rating w-50">
                  <Rating
                    initialRating={rating[0].style}
                    readonly
                    emptySymbol="fa fa-star-o fa-2x"
                    fullSymbol="fa fa-star fa-2x"
                  ></Rating>
                </p>
              </div>
              <div className="d-flex">
                <p className="rating-category w-50">Skill: </p>
                <p className="rating w-50">
                  <Rating
                    initialRating={rating[0].skill}
                    readonly
                    emptySymbol="fa fa-star-o fa-2x"
                    fullSymbol="fa fa-star fa-2x"
                  ></Rating>
                </p>
              </div>
            </div>
          </div>
          <p> Budget: BDT-{Price}</p>
          <Button className="add-button" onClick={props.handleClick}>
            Add in Movie
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Actor;
