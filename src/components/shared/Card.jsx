import PropTypes from 'prop-types';
import CardStyled from '../../styled/Card.styled';

export default function Card({ children, reverse }) {
  if (!children) return null;

  return <CardStyled reverse={reverse}>{children}</CardStyled>;
}

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node,
  reverse: PropTypes.bool,
};
