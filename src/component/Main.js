import React, { Component } from 'react';
import '../App.css';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';
import Slider from "./Slider";

const Repair = styled.div`
  color: #ffffff;
  font-weight: 700;
  line-height: 50px;
  font-size: 40px;
  
  span {
    display: block;
    font-size: 24px;
    line-height: 30px;
  }
`

const LightText = styled.div`
  margin-top: 54px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
`

const OrderButton = styled.button`
  margin-top: 34px;
  width: 245px;
  height: 64px;
  background-color: #ffa14b;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  border-radius: 30px;
`

const Main = () => (
  <Row>
    <Col lg={5}>
      <Repair>Качественный ремонт <span>iphone за 35 минут и гарантия 1 год</span></Repair>
      <LightText>
        Оставьте заявку на бесплатную диагностику без очереди,
        и получите защитное стекло, стоимостью 1000 рублей,
        с установкой в подарок!
      </LightText>
      <OrderButton>Отправить заявку!</OrderButton>
    </Col>

    <Col lg={6} lgOffset={1}>
      <Slider/>
    </Col>



  </Row>
);

export default Main;