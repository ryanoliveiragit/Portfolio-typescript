import React from 'react';

interface Props extends React.PropsWithChildren<{}> {
}

export const Container: React.FC<Props> = ({ children }) => {
  return <div className='container'>{children}</div>;
};