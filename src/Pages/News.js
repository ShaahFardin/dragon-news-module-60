import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaShareSquare } from "react-icons/fa";

const News = ({ news }) => {
  const { details, _id, author, title, thumbnail_url } = news;
  console.log(news);
  return (
    <div>
      <Card className="">
        <Card.Body>
          <Card.Header>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-between align-items-center">
                <Image
                  src={author.img}
                  style={{ width: "60px" }}
                  roundedCircle
                  alt=""
                />
                <div className="ms-2">
                  <p>
                    {author.name}
                    <br />
                    {author.published_date}
                  </p>
                </div>
              </div>
              <div>
                <FaShareSquare></FaShareSquare>
                <FaShareSquare></FaShareSquare>
              </div>
            </div>
          </Card.Header>
          <Card.Img variant="top" src={thumbnail_url}/>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details.length > 200 ? (
              <p>
                {details.slice(0, 200) + "..."}
                <Link to={`/news/${_id}`}>Read more</Link>
              </p>
            ) : (
              <p>{details}</p>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default News;
