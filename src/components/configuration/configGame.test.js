import React from 'react'
import {screen, render } from '@testing-library/react'
import ConfigGame from './configGame';

beforeEach(() => render(<ConfigGame />))

describe('when the component config is mounted', () => {
  it('should exists the title', () => {
    expect(screen.getByText(/Select Level/i)).toBeInTheDocument()
  })
  it('should exists the easy button', () => {
    expect(screen.getByRole('button', {name: /easy/i})).toBeInTheDocument()
  })
  it('should exists the medium button', () => {
    expect(screen.getByRole('button', {name: /medium/i})).toBeInTheDocument()
  })
  it('should exists the hard button', () => {
    expect(screen.getByRole('button', {name: /hard/i})).toBeInTheDocument()
  })
})