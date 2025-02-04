import React, { useState, useEffect } from "react";
import "./App.css";

// Sample Testimonial Data (this can be fetched from a database in a real-world scenario)
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    feedback: "This is an excellent service! The team is very professional and efficient.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback: "I am very satisfied with the results. Highly recommend to others!",
    rating: 4,
    img: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 3,
    name: "Bob Johnson",
    feedback: "Great experience, I will definitely use it again.",
    rating: 4,
    img: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 4,
    name: "Alice Brown",
    feedback: "Amazing service! The team understood my needs and delivered on time.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedTestimonials, setLoadedTestimonials] = useState(testimonials);

  // Automatic testimonial slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % loadedTestimonials.length);
    }, 3000); // Automatically change every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [loadedTestimonials]);

  // Function to go to the previous testimonial
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? loadedTestimonials.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next testimonial
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % loadedTestimonials.length);
  };

  // Function to handle star rating display
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? "filled" : ""}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="testimonial-section">
      <div className="header">
        <h2>What Our Clients Say</h2>
      </div>

      <div className="testimonial-container">
        <div className="testimonial">
          <div className="testimonial-image">
            <img
              src={loadedTestimonials[currentIndex].img}
              alt="Client"
              className="testimonial-avatar"
            />
          </div>
          <div className="testimonial-text">
            <p>{loadedTestimonials[currentIndex].feedback}</p>
            <h5 className="client-name">{loadedTestimonials[currentIndex].name}</h5>
            <div className="rating">{renderStars(loadedTestimonials[currentIndex].rating)}</div>
          </div>
        </div>

        {/* Manual Navigation Buttons */}
        <div className="navigation-buttons">
          <button onClick={goToPrevious} className="nav-button">
            &#8249; Prev
          </button>
          <button onClick={goToNext} className="nav-button">
            Next &#8250;
          </button>
        </div>
      </div>
    </div>
  );
}
