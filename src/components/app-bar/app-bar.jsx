import React from 'react';
import {
  colorWrapper,
  flexWrapper,
  contentWrapper,
} from './app-bar.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

export default function AppBar() {
  return (
    <div className={colorWrapper}>
      <div className={flexWrapper}>
        <div>
          <StaticImage
            src="./old-well-white.png"
            alt="The UNC Logo"
            layout="fixed"
            placeholder="tracedSVG"
            width={60}
          />
        </div>

        <div className={contentWrapper}>
          <h1>Welcome to COMP 301</h1>
          <h2>Foundations of Programming</h2>
        </div>
      </div>
    </div>
  );
}
