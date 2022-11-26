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
    border-radius: ${props => props.value <= +props.max - 2 ? '4px 0 0 4px' : '4px'};
  }
`;

const CustomWrapper = styled.div`
  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--borderRadius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  height: var(--hight);
`;

const Progress = styled.svg`
  width: 100%;
  height: 100%;
  border-radius: ${props => props.value <= +props.max - 2 ? '4px 0 0 4px' : '4px'};
  display: block;

  ::before {
    content: '${props => props.value}';
  }
`;

const ProgressValue = styled.rect`
    height: 100%;
    stroke: ${COLORS.primary};
    fill: ${COLORS.primary};
`;

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return (
    <>
      <VisuallyHidden id="loadinglabel">Loading: {value}%</VisuallyHidden>
      <Wrapper value={value} max="100" style={styles}>{value}%</Wrapper>
      <hr />
      <VisuallyHidden id="loadinglabel">Loading: {value}%</VisuallyHidden>
      <CustomWrapper style={styles}>
        <span role="progressbar" aria-labelledby="loadinglabel" aria-valuenow={value}>
          <Progress value={value} max="100">
            <ProgressValue width={`${value}%`} />
          </Progress>
        </span>
      </CustomWrapper>
    </>
  );
};

export default ProgressBar;
