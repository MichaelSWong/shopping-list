import React, { FC } from 'react';
import { IHeader } from './interfaces';

const Header: FC<IHeader> = ({ label }): JSX.Element => {
  return <h1>{label}</h1>;
};

export default Header;
