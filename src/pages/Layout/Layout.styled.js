import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ActiveLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 16px;
  font-weight: 700;
  color: #2a363b;
  font-size: 24px;

  &.active {
    color: #d62828;
  }
`;
