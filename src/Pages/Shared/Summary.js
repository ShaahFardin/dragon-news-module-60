import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Summary = () => {
    const news = useLoaderData();
     const { title, details, thumbnail_url, category_id } = news;
    return (
      <div>
        <h3>This page will show news summary : {news.title}</h3>
        <div>
          <Card>
            <Card.Img variant="top" src={thumbnail_url} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{details}</Card.Text>
              <Link to={`/catagory/${category_id}`}>
                <Button variant="primary">Read all news in this category</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
};

export default Summary;