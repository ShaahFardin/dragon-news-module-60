import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [Catagories, setCatagories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/news-catagories")
      .then((res) => res.json())
      .then((data) => setCatagories(data));
  }, []);
  return (
    <div>
      <h3>Catagories</h3>
      {Catagories.map((catagory) => (
        <p key={catagory.id}>
          <Link to={`/catagory/${catagory.id}`}> {catagory.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default LeftSideNav;
