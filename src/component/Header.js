import React, { Component } from 'react';
import '../App.css';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components'

import Link from './Link';

const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  height: 49px;
`
const Header  = () => (
  <Row>
    <Col lg={12}>
      <nav>
        <StyledList>
          <Link link="#" text = "Вызов мастера"/>
          <Link link="#" text = "Прайс на ремонт"/>
          <Link link="#" text = "Наши преимущества"/>
          <Link link="#" text = "Схема работы"/>
          <Link link="#" text = "Отзывы клиентов"/>
          <Link link="#" text = "Примеры работ"/>
          <Link link="#" text = "Контакты"/>
        </StyledList>
      </nav>
    </Col>
  </Row>
);

export default Header;