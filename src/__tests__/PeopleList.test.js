import React from 'react';
import { shallow } from 'enzyme';
import PeopleList from '../People/PeopleList';

describe('PeopleList Component Unit Tests', () => {
   it('PeopleList should render correctly given an array of people objects', () => {
      const people = [
        { display_name: "Alene Gleason", email_address: "madison@dubuque.name", id: 101694752, title: "Legacy Intranet Developer"},
        { display_name: "Ivah Denesik", email_address: "nntwoa@roberts.co", id: 101694752, title: "National Research Consultant"}
      ]

      const pList = shallow(<PeopleList people={people}/>);
      expect(pList).toMatchSnapshot();
    });
});