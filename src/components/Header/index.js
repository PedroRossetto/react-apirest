import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <a href="asdasd">
        <FaHome size={24} />
      </a>
      <a href="asdasd">
        <FaSignInAlt size={24} />
      </a>
      <a href="asdasd">
        <FaUserAlt size={24} />
      </a>
    </Nav>
  );
}
