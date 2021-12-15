import "../About/About.scss";
import foodtruckin from "../../assets/images/foodtruckin.jpg";
import Header from "../../components/Header/Header";
import { useState, useEffect } from "react";

function About() {
  const [token, setToken] = useState(false);

  useEffect(() => {
    if (sessionStorage.token.length > 1) {
      setToken(true);
    }
  }, []);

  return (
    <>
      <Header token={token} />
      <div className="about">
        <h1 className="about__title">About</h1>
        <p className="about__para">
          One summer day, in the heat of a global pandemic my kids ask "can we
          go to the ice cream truck today daddy?". In a cautious tone I
          anticipate repercussions of a unempathetic response. I explain "we
          don't know where it is going to be today, maybe if we are lucky it
          comes down our street today".
        </p>
        <p className="about__para">
          From there the concept of FoodioFare was born. There are mobile food
          vendors that are in the hunt for locations where they think their
          customer will be. There are customers who want to know where their
          favorite food vendor is today. FoodioFare is meant to bridge that gap
          by proving the ability for vendors to easily update their location so
          that the can be found by hungry customers.
        </p>
        <p className="about__para">
          Mobile vendors are operated by those with a passion for their food,
          and a drive to share their culinary experience with others. Why not
          try something new, and possibly open yourself up to a completely new
          taste experience.
        </p>
        <img src={foodtruckin} alt="foodtruck"></img>
      </div>
    </>
  );
}

export default About;
