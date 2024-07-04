
import React from 'react';
import 'moment/locale/vi';
import './_global.scss';

interface Props {
  children: React.ReactNode;
}

const GlobalStyles: React.FC<Props> = (props): JSX.Element => {
  const { children } = props;

  return <>{children}</>;
};

export default GlobalStyles;
