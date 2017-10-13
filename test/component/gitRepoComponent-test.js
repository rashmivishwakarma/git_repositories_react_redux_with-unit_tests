import React from 'React';
import expect from 'expect';
import { mount } from 'enzyme';
import GitRepoComponent from '../../src/component/gitRepoComponent';

const buildGitRepoComponent = () => {
    return (
         <div> 
            <h3>Get Git Repositories</h3>
            <h1>Enter git username</h1>
        </div>
    );
};

describe('GitRepoComponent component', () => {
    let component;

    before(() => {
        component = mount(buildGitRepoComponent());
    });

    it('should render h3 component', () => {
        expect(component.find('h3').length).toEqual(1);
        expect(component.find('h3').text()).toEqual('Get Git Repositories');
    });

    it('should render h1 component', () => {
        expect(component.find('h1').length).toEqual(1);
        expect(component.find('h1').text()).toEqual('Enter git username');
    });

});