import React from 'react';
import Link from 'next/link';
import { StyledNav } from '../../styles/navbar.styles/navbar.styles';

const Navbar = () => {
  return (
    <StyledNav>
      <section className='section-center'>
        <div>
          <Link href={`/`}>Next Events</Link>
        </div>
        <div>
          <Link href={`/events`}>Browse All Events</Link>
        </div>
      </section>
    </StyledNav>
  );
};

export default Navbar;
