import React from 'react'
import {screen, render } from '@testing-library/react'
import Enzyme, { shallow } from 'enzyme';
import Game from './game';
import BoardGame from './boardGame/BoardGame';
import GameOver from './gameOver/gameOver';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

beforeEach(() => render(<Game />))

const mockGameOver = jest.fn();
jest.mock("./gameOver/gameOver", () => (props) => {
  mockGameOver(props);
  return <mock-gameOver />;
});

describe('when the component game is mounted', () => {
  it('should exists the title', () => {
    expect(screen.getByText(/battleship/i)).toBeInTheDocument()
  })
  it('check if BoardGame children renders', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.find(BoardGame).length).toEqual(1);
  });
  it('check if GameOver children renders', () => {
    const wrapper = shallow(<Game />);
    const handleClick = jest.spyOn(React, "useState");
    handleClick.mockImplementation({gameOver: true});
    expect(wrapper.find(GameOver).length).toBe(0);
  });
})

// test("If ParentComponent is passed game over and has props", () => {
//     render(<GameOver totalShootCount onSaveGame />);
    
//     expect(mockGameOver).toHaveBeenCalledWith(
//       expect.objectContaining({
//         totalShootCount: 1,
//         onSaveGame: ''
//       })
//     );
//   });