// Functional Component
// const About = () => {
//     return (
//         <div className="center-content">
//             <h2>About Us</h2>
//             <h3>Content goes here</h3>
//         </div>
//     );
// };

// export default About;

// Class Component
import React from "react";

const { Component } = React;

class About extends Component {
  constructor(props) {
    //called before component is rendered
    super(props);
  }

  componentDidMount() {
    //called after component is rendered
  }

  componentDidUpdate() {
    //called after component is updated
  }

  componentWillUnmount() {
    //called after componend is removed from the DOM
  }

  render() {
    //called when component is rendered after constructor
    return (
      <div style={{ padding: "20px" }}>
        <h2>About Travello </h2>
        <p>
          Travel App is your one-stop shop for planning your dream vacation. We
          help you discover amazing destinations, book tours and activities, and
          find the best deals on flights and accommodations.
        </p>
        <p>
          Our team of passionate travel experts is dedicated to providing you
          with the information and resources you need to create an unforgettable
          travel experience. We believe that travel is a powerful way to connect
          with different cultures, learn about new places, and create lasting
          memories.
        </p>

        <h3>Why Choose Travel App?</h3>
        <ul>
          <li>
            <b>Curated Destinations:</b> We handpick the best travel
            destinations based on your interests and preferences. Whether you're
            seeking adventure, relaxation, or cultural immersion, we have
            something for everyone.
          </li>
          <li>
            <b>Exclusive Deals:</b> We partner with top travel providers to
            secure exclusive discounts on flights, hotels, and activities. Save
            money on your dream vacation without sacrificing quality.
          </li>
          <li>
            <b>Seamless Booking:</b> Our user-friendly platform makes booking
            your entire trip a breeze. Search, compare, and book flights,
            accommodations, and activities all in one place.
          </li>
          <li>
            <b>Personalized Experience:</b> Our travel experts are available to
            answer your questions and help you create a customized itinerary.
            Get the most out of your trip with our personalized recommendations.
          </li>
          <li>
            <b>24/7 Support:</b> We're here for you every step of the way, from
            planning your trip to enjoying your vacation. Our dedicated customer
            support team is always available to assist you.
          </li>
        </ul>

        <h3>Join the Travel App Community</h3>
        <p>
          Become part of our vibrant travel community and connect with fellow
          explorers. Share your travel stories, discover hidden gems, and get
          inspired for your next adventure.
        </p>
      </div>
    );
  }
}

export default About;

// --Mounting--
// constructor called
// render called
// componentDidMount called
// componentWillUnmount called

// --Updating--
// render called
// componentDidUpdate called
// if any state or props change, render is called again

