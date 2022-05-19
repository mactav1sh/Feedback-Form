import PropTypes from 'prop-types';
import ButtonStyled from '../../styled/Button.styled';

function Button({ children, isPrimary, type, isDisabled }) {
  return (
    <ButtonStyled type={type} isPrimary={isPrimary} disabled={isDisabled}>
      {children}
    </ButtonStyled>
  );
}

Button.defaultProps = {
  type: 'button',
  isDisabled: false,
};

Button.propTypes = {
  type: PropTypes.string,
  style: PropTypes.string,
  isDisabled: PropTypes.bool,
  childern: PropTypes.node,
};

export default Button;
