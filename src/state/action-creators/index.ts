import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.SEARCH_REPOSITORIES });

    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/${term}`
      );

      const names = data.map((result: any) => {
        return result.name;
      });

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: ActionType.SEARCH_REPOSITORIES_ERROR,
          payload: error.message,
        });
      }
    }
  };
};
