import React from 'react';
import { render, screen } from '@testing-library/react';
import UserStatus from './UserStatus';

describe('display correct user status', () => {
  // test 1: test if the name is undefined then display Unknown
  test('renders unkown user status for undefined name', () => {
    // Step 1: Arrange
    render(<UserStatus name={undefined} />);
    const userStatusElement = screen.getByText('Anonymous User', { exact: false });
    // Step 2: Act
    // Step 3: Assert
    expect(userStatusElement).toBeInTheDocument();
  });

  // test 2: test if the name is assigned then display that value
  test('renders verified user status for values other than undefined', () => {
    // Step 1: Arrange
    render(<UserStatus name="Ayesha" />);
    const userStatusElement = screen.getByText('Verified User', { exact: false });
    // Step 2: Act
    // Step 3: Assert
    expect(userStatusElement).toBeInTheDocument();
  });
});
