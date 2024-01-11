// PersonalQuestions.js
import React, { useState } from 'react';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './index.css'; // Create a CSS file for styling

const PersonalQuestions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 2; // Update this value based on the total number of questions

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    scroll.scrollToTop(); // Scroll to the top of the container for smooth transition
  };

  const handleGoBack = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion - 1);
      scroll.scrollToTop(); // Scroll to the top of the container for smooth transition
    }
  };

  return (
    <div className="personal-questions-container">
      <div className="questions-container">
        <Element name="questionContainer" className="question-container">
          {currentQuestion === 1 && (
            <div className="question">
              <h3>Question 1: Date of Birth</h3>
              {/* Your date and time input options go here */}
            </div>
          )}

          {currentQuestion === 2 && (
            <div className="question">
              <h3>Question 2: Place of Birth</h3>
              {/* Your country and place input options go here */}
            </div>
          )}

          {/* Add more questions as needed */}
        </Element>
      </div>

      <div className="navigation-arrows">
        {currentQuestion > 1 && (
          <div className="arrow back" onClick={handleGoBack}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
        )}
        {currentQuestion < totalQuestions && (
          <Link
            activeClass="active"
            to="questionContainer"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div className="arrow next" onClick={handleNextQuestion}>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PersonalQuestions;
