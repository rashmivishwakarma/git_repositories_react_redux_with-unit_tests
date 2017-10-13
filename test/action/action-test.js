import React from 'React';
import expect from 'expect';
//import { shallow } from 'enzyme';
import displayGitRepo from '../../src/action/action';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockResponse from '../mockResponse';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Action', () => {
   
    it('should return a function', () => {
        expect(displayGitRepo()).toBeA('function');
    });

    it('creates GIT_REPO_SUCCESS when fetching git repo has been done', () => {
        const response = mockResponse.responseGitSuccessRepo;
        const expectedActions = [{ 
            type: 'GIT_REPO_SUCCESS',
            payload: { unameArray: response }  
        }]
        const store = mockStore();
        return store.dispatch(displayGitRepo('rashmivishwakarma')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates GIT_REPO_SUCCESS_NO_REPO when git user has no repo ', () => {
        const response = mockResponse.responseGitSuccessNoRepo;
        const expectedActions = [{ 
            type: 'GIT_REPO_SUCCESS_NO_REPO',
            payload: { NoRepo: response }  
        }]
        const store = mockStore();
        return store.dispatch(displayGitRepo('rashmi2')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
            
        });
    });

    it.skip('creates GIT_REPO_ERROR when no valid git user found', () => {
        const response = mockResponse.responseGitError;
        const expectedActions = [{ 
            type: 'GIT_REPO_ERROR',
            payload: { error: response }  
        }]
        const store = mockStore();
        return store.dispatch(displayGitRepo('rashmivishwakarma111')).then(() => {
            expect(store.getActions()).to.equal(expectedActions);
        })
    })

});
