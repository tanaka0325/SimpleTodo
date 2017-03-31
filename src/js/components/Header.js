// @flow
import React from 'react';

type Props = {
  name: string,
}

const Header = (props: Props) =>
  <header>
    <nav className="nav">
      <div className="container">
        <nav className="nav-left logo">
          {props.name}
        </nav>
      </div>
    </nav>
  </header>;

export default Header;
