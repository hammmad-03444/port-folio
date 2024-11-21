import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faDiscord
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as faEnvelopeSolid } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
        
        {/* Social Icons */}
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://instagram.com"
            className="text-gray-500 hover:text-cyan-500 transition-transform duration-300 ease-in-out transform hover:scale-110"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://linkedin.com"
            className="text-gray-500 hover:text-cyan-500 transition-transform duration-300 ease-in-out transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="mailto:email@example.com"
            className="text-gray-500 hover:text-cyan-500 transition-transform duration-300 ease-in-out transform hover:scale-110"
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faEnvelopeSolid} size="2x" />
          </a>
          <a
            href="mailto:email@example.com"
            className="text-gray-500 hover:text-cyan-500 transition-transform duration-300 ease-in-out transform hover:scale-110"
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faDiscord} size="2x" />
          </a>
        </div>
        <div className="mt-12 bg-cyan-700 text-white w-full py-4 text-center">
        <p>© Mhammad Hammad Khan 2024</p>
      </div>
    </div>
  )
}

export default Footer