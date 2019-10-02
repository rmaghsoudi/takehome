import React from 'react';
import { shallow } from 'enzyme';
import PeoplePage from '../People/PeoplePage';

const people = [
  { display_name: "Alene Gleason", email_address: "madison@dubuque.name", id: 101694752, title: "Legacy Intranet Developer"},
  { display_name: "Ivah Denesik", email_address: "nntwoa@roberts.co", id: 101694752, title: "National Research Consultant"}
]

describe('PeoplePage Component Unit Tests', () => {

   it('PeoplePage should render correctly', () => {

      const pPage = shallow(<PeoplePage />);
      expect(pPage).toMatchSnapshot();
    });

    
    it('should update state after button click', () => {
      const pPage = shallow(<PeoplePage />);
      pPage.setState({people});
      pPage
        .find('button#uniquify')
        .simulate('click');
      
      expect(pPage.state('uniqueToggle')).toEqual(true);
      expect(pPage.state('people')).toEqual(people);

    });

});