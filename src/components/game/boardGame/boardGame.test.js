import React from 'react'
import { render } from '@testing-library/react'
import Enzyme, { shallow } from 'enzyme';
import Cell from './cell/Cell';
import BoardGame from './BoardGame';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe('when the component boardGame is mounted', () => {
  it('check if child cell renders', () => {
    const wrapper = shallow(<BoardGame />);
  });
  
})