import React, { useState, useEffect, startTransition } from 'react';
import { Transition } from '@headlessui/react';
import { useNavigate } from 'react-router-dom'; // Using useNavigate for React Router v6
import backgroundImage from '../../assets/reg.avif';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate(); // Use useNavigate hook

  // Trigger the animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleNavigation = () => {
    startTransition(() => {
      navigate('/movies'); // Navigate to movies page
    });
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Semi-transparent overlay for improved readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Centered Content */}
      <div className="relative flex flex-col items-center justify-center min-h-screen text-white px-4 sm:px-6 md:px-8 lg:px-12">
        <Transition
          show={isVisible}
          enter="transform transition ease-out duration-1000"
          enterFrom="opacity-0 translate-y-20"
          enterTo="opacity-100 translate-y-0"
        >
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Movie Recommendations
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 px-4 sm:px-8 md:px-12">
              Discover your next favorite movie with personalized suggestions based on your mood and preferences.
            </p>
            <button
              onClick={handleNavigation}
              className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              Explore Movies
            </button>
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default HomePage;
