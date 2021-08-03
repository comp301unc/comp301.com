import React from 'react';
import * as classes from './footer.module.scss';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={classes.primaryFooter}>
      <p>Copyright &copy; {year} Aaron J Smith, Ph.D.</p>
    </footer>
  );
}
