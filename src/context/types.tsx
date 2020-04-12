import { ITodo } from '../interfaces';

export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const CHANGE_SCREEN = 'CHANGE_SCREEN';
export const FETCH_TODO = 'FETCH_TODO';
export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';
export const SHOW_ERROR = 'SHOW_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';

type actionTodoTypes =
  | 'ADD_TODO'
  | 'UPDATE_TODO'
  | 'REMOVE_TODO'
  | 'SHOW_LOADER'
  | 'HIDE_LOADER'
  | 'SHOW_ERROR'
  | 'FETCH_TODO'
  | 'CLEAR_ERROR';

export interface ITodoState {
  todos: ITodo[];
  loading: boolean;
  error: object | null;
}

export interface ITodoAction {
  type: actionTodoTypes;
  payload?: any;
  id?: number | string;
  title?: string;
  error?: object | null;
  todos?: object;
}

export interface IScreenState {
  id: number;
}

export interface IScreenAction {
  type: 'CHANGE_SCREEN';
  payload: number | null;
}