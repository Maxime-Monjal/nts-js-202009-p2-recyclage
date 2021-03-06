import React from 'react';
import { Link } from 'react-router-dom';
import { FaRecycle } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import './HeaderCss.css';

function Header() {

  const refresh = () => {
   window.location.reload()
  };

  return (
    <div className="header">
      <div onClick={refresh}>
      <Link to={"/"} >
        <FaRecycle alt="logo" className="iconR" size="2.5rem" color="77ecba" />
      </Link>
      </div>
      <Link to="/profil">
        <CgProfile
          alt="icone-profil"
          className="iconP"
          size="2.5rem"
          color="77ecba"
        />
      </Link>
    </div>
  );
}

export default Header;
