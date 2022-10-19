import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaTwitch, FaWhatsapp } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousal from "./BrandCarousal";


const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button className="mb-3" variant="outline-primary">
          <FaGoogle></FaGoogle> Login with Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub></FaGithub> Login with Github
        </Button>
      </ButtonGroup>
      <div className="mt-5">
        <h3>Find us on</h3>
        <ListGroup>
          <ListGroup.Item className="mb-2"><FaFacebook/> Facebook</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaTwitter/> Twitter</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaGithub></FaGithub> Github</ListGroup.Item>
        </ListGroup>
      </div>
      <div className="mt-4">
        <BrandCarousal></BrandCarousal>
      </div>

    </div>
  );
};

export default RightSideNav;
