import PropTypes from 'prop-types';
import ContainerStyled from '../styled/containerStyled';

import HeaderStyled from '../styled/HeaderStyled';
function Header({ text }) {
  return (
    <HeaderStyled>
      <ContainerStyled>
        <h1>{text}</h1>
      </ContainerStyled>
    </HeaderStyled>
  );
}

Header.defaultProps = {
  text: 'Header',
};
Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
