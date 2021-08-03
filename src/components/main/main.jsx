import React from 'react';
import { main } from './main.module.scss';

export default function Main({ children }) {
  return <main className={main}>{children}</main>;
}
