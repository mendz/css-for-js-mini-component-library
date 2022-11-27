import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  return (
    <>
      <Label>
        {label}
      </Label>
      <Wrapper>
        <Arrow id={'chevron-down'} />
        <Options value={value} onChange={onChange}>
          {children}
        </Options>
      </Wrapper>
    </>
  );
};

const Label = styled.label`
  margin-right: 10px;
`;

const Wrapper = styled.div`
  position: relative;
  width: min-content;
  display: inline-block;

  color: ${COLORS.gray700};

  :hover {
    color: ${COLORS.black};
  }
`;

const Arrow = styled(Icon)`
  position: absolute;
  right: 16px;
  top: 10px;
  color: inherit;
  pointer-events: none;
`;

const Options = styled.select`
  appearance:none;
  padding: 12px 52px 12px 16px;
  background-color: ${COLORS.transparentGray15};
  width: var(--width);
  border: 0;
  border-radius: 8px;
  color: inherit;

`;
export default Select;
