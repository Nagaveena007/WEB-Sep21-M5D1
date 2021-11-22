import { useEffect, useState } from "react";
import { fetchjob } from "../apical";
/* import { Link } from "react-router-dom";
 */ import SingleJob from "./SingleJob";

const Home = () => {
  const [developer, setDeveloper] = useState([]);

  useEffect(() => {
    fetchjob("developer").then((res) => setDeveloper(res));
  }, []);

  return (
    <div className="home__line ">
      {developer &&
        developer.map((search) => (
          <SingleJob src={search.title} key={search._id} />
        ))}
    </div>
  );
};
export default Home;
