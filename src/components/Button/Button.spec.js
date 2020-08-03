import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '.';

it('renders without crashing', () => {
    shallow(<Button />);
});

describe('Button Component', () => {

    let props;
    beforeEach(() => {
        props = {
            children: 'children'
        }
    })

    it('Should contain a value children props value', () => {
        const wrapper = shallow(<Button>{props.children}</Button>);
        expect(wrapper.html()).toContain("children");
    })

    it('Test click event', () => {
        const mockEventOnclick = jest.fn();
        const wrapper = shallow(<Button eventOnclick={mockEventOnclick}>{props.children}</Button>);
        wrapper.find('button').simulate('click');
        expect(mockEventOnclick.mock.calls.length).toEqual(1);
    });

});