import React from 'React';
import expect from 'expect';
import reducer from '../../src/reducer/reducer';
import configureMockStore from 'redux-mock-store';
import Immutable from 'immutable';
import {merge} from 'lodash';
import thunk from 'redux-thunk';
import mockResponse from '../mockResponse';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

describe('reducer', () => {
    function getInitialState(customState) {
        let initialState = {}
        return merge({}, initialState, customState);
    }

    // GIT_REPO_SUCCESS_NO_REPO reducer state test
    it('should handle GIT_REPO_SUCCESS_NO_REPO state', () => {
        const responseGitSuccessNoRepo = mockResponse.responseGitSuccessNoRepo;
        const reducerGitSuccessNoRepoState = reducer(Immutable.fromJS({}), {
            type: 'GIT_REPO_SUCCESS_NO_REPO',
            payload: responseGitSuccessNoRepo  
        });

        const expectedGitSuccessNoRepoState =  getInitialState({
            NoRepo :responseGitSuccessNoRepo,
            repoName: '',
            error: ''
        })
        expect(reducerGitSuccessNoRepoState.toJS()).toEqual(expectedGitSuccessNoRepoState)
    })


    // GIT_REPO_SUCCESS reducer state test
    it('should handle GIT_REPO_SUCCESS state', () => {
        const responseGitSuccessRepoState = mockResponse.responseGitSuccessRepo;
        const reducerGitSuccessRepoState = reducer(Immutable.fromJS({}), {
            type: 'GIT_REPO_SUCCESS',
            payload: responseGitSuccessRepoState  
        });

        const expectedGitSuccessRepoState =  getInitialState({
            NoRepo :'',
            repoName: responseGitSuccessRepoState,
            error: ''
        })
        expect(reducerGitSuccessRepoState.toJS()).toEqual(expectedGitSuccessRepoState)
    })

    // GIT_REPO_ERROR reducer state test
    it('should handle GIT_REPO_ERROR state', () => {
        const responseGitError = mockResponse.responseGitError;
        const reducerGitErrorState = reducer(Immutable.fromJS({}), {
            type: 'GIT_REPO_ERROR',
            payload: responseGitError  
        });

        const expectedGitErrorState =  getInitialState({
            NoRepo :'',
            repoName: '',
            error: responseGitError
        })
        expect(reducerGitErrorState.toJS()).toEqual(expectedGitErrorState)
    })
}) 