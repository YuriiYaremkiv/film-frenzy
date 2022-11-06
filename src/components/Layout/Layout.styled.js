import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ActiveLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 18px;

  &.active {
    color: red;
  }
`;
