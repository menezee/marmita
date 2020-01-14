import React from 'react';
import { Link } from '@reach/router';
import { ROUTER_LINKS } from '../../contants';
import styles from './header.module.scss';

const Header = () => (
  <header className={styles.container}>
    <nav className={styles.list}>
      <Link to={ROUTER_LINKS.MANAGER} children='Manager' />
      <Link to={ROUTER_LINKS.LIST} children='List' />
    </nav>
  </header>
);

export { Header, };
