import React from 'react';
import { Container } from 'react-bootstrap';

export default function ScreenWrapper({ children }) {
  return <Container className="my-4 screnwrapper">{children}</Container>;
}
