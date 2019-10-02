import React from 'react';
import { shallow } from 'enzyme';
import FrequencyList from '../People/FrequencyList';

const charCount = {
  a: 45, g: 23, '@': 34, j: 2, i: 56
}

describe('FrequencyList Component Unit Tests', () => {

   it('FrequencyList should render correctly given a charCount object', () => {

      const fList = shallow(<FrequencyList charCount={charCount}/>);
      expect(fList).toMatchSnapshot();

    });

});