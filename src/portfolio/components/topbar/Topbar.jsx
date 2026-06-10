import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { BsBriefcase } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import { RiServiceLine } from 'react-icons/ri';

import './topbar.css';

const Topbar = () => {
  const [activeNav, setActiveNav] = useState('#home');
  const link = (id, Icon) => (
    <a
      key={id}
      href={id}
      onClick={() => setActiveNav(id)}
      className={activeNav === id ? 'active' : ''}
      aria-label={id.replace('#', '')}
    >
      <Icon />
    </a>
  );

  return (
    <nav>
      {link('#home', AiOutlineHome)}
      {link('#about', AiOutlineUser)}
      {link('#skills', BiBook)}
      {link('#work', BsBriefcase)}
      {link('#portfolio', RiServiceLine)}
      {link('#education', FaGraduationCap)}
      {link('#contact', BiMessageSquareDetail)}
    </nav>
  );
};

export default Topbar;
