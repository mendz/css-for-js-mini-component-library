import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  large: {
    '--hight': '24px',
    '--padding': '4px',
    '--borderRadius': '0.5rem',
  },
  medium: {
    '--hight': '12px',
    '--borderRadius': '4px',
  },
  small: {
    '--hight': '8px',
    '--borderRadius': '4px',
  }
};

const Wrapper = styled.progress`
  -webkit-appearance: none;
  appearance: none;
  height: var(--hight);

  &::-webkit-progress-bar {
    padding: var(--padding);
    border-radius: var(--borderRadius);
    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  }

  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: ${props => props.value >= +props.max - 2 ? 'var(--borderRadius)' : '4px 0 0 4px'};
  }
`;

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return (
    <>
      <VisuallyHidden id="loadinglabel">Loading: {value}%</VisuallyHidden>
      <Wrapper value={value} max="100" style={styles}>{value}%</Wrapper>
    </>
  );
};

export default ProgressBar;
