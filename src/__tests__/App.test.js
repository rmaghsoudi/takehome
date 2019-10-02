import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App Component Unit Test', () => {
   it('App should render correctly', () => {
      const app = shallow(<App />);
      // using snapshot to ensure nothing changes unexpectedly and render() returns what is intended
      expect(app).toMatchSnapshot();
    });
});