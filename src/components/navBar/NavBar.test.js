import React from 'react'
import {screen, render } from '@testing-library/react'
import {NavBar} from './NavBar';

beforeEach(() => render(<NavBar />))

describe('when the component navbar is mounted', () => {
  it('should exists the title', () => {
    expect(screen.getByText(/Tekton games/i)).toBeInTheDocument()
  })
  it('should exists the start Game button', () => {
    expect(screen.getByRole('button', {name: /Start Game/i})).toBeInTheDocument()
  })
  it('should exists the History button', () => {
    expect(screen.getByRole('button', {name: /History Game/i})).toBeInTheDocument()
  })
})