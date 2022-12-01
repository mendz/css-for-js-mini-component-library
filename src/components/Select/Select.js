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
      <hr />
      <Wrapper2>
        <NativeSelect value={value} onChange={onChange}>
          {children}
        </NativeSelect>
        <PresentationalBit>
           {displayedValue} <DownArrow id={'chevron-down'} />
        </PresentationalBit>
      </Wrapper2>
    </>
  );
};

//#region first try
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
//#endregion

//#region second try after looking
const Wrapper2 = styled.div`
  display: inline-block;
  position: relative;
  padding: 12px 52px 12px 16px;
  background-color: ${COLORS.transparentGray15};
  width: fit-content;
  border: 0;
  border-radius: 8px;
  color: ${COLORS.gray700};

  :hover {
    color: ${COLORS.black};
  }
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const PresentationalBit = styled.div`
  white-space: nowrap;
`;

const DownArrow = styled(Icon)`
  display: inline-block;
  position: absolute;
  pointer-events: none;
  right: 16px;
  top: 10px;
`;

//#endregion
export default Select;
