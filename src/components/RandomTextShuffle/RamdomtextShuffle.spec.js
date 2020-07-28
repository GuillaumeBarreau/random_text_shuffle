import React from 'react';
import { shallow, mount } from 'enzyme';
import { RandomTextShuffle } from './';
import { colors, chars } from '../../logic/RandomTextShuffle.logic';

jest.mock('../../logic/RandomTextShuffle.logic', () => ({
    colors: ['red'],
    chars: ['A']
}));

it('renders without crashing', () => {
    shallow(<RandomTextShuffle />);
});

describe('RandomTextShuffle Component', () => {

    let props;
    beforeEach(() => {
        props = {
            children: 'children'
        }
    })

    it('Should count 8 elements span', () => {
        const wrapper = shallow(<RandomTextShuffle>{props.children}</RandomTextShuffle>);
        expect(wrapper.find('span').length).toBe(props.children.length);
    })

    it('Should one element span with text value A and style color red', () => {
        const wrapper = shallow(<RandomTextShuffle>{props.children}</RandomTextShuffle>);
        expect(wrapper.html()).toContain('<span style=\"color:red\">A</span>');
    })

});