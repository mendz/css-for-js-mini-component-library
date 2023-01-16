import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  'small': 16,
  'large': 18
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return (
    <InputWrapper style={{ '--width': `${width}px`, '--fontSize': `${SIZES[size]}px` }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper>
        <Icon id={icon} size={SIZES[size]} />
      </IconWrapper>
      <Input placeholder={placeholder} />
    </InputWrapper>
  );
};

const Input = styled.input`
  border: 0;
  font-size: inherit;
  font-weight: 700;
  outline: none;
  color: inherit;
  width: 100%;
  padding-left: 20px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const InputWrapper = styled.div`
  border-bottom: 1px ${COLORS.black} solid;
  font-size: inherit;
  min-width: 100px;
  width: var(--width);
  font-size: var(--fontSize);
  color: ${COLORS.gray700};
  position: relative;

  :hover {
    color: ${COLORS.black};
  }

  :has(${Input}:focus) {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  bottom: 3px;
  left: 0;
  width: fit-content;
  pointer-events: none;
`;

export default IconInput;
