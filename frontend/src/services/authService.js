import axios from 'axios';
import { LOGIN_SUCCESS, REGISTER_SUCCESS } from '../store/actionTypes';

const API_URL = 'http://localhost:8080/api/auth';

export const login = (email, password) => async (dispatch) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        localStorage.setItem('user', JSON.stringify(response.data));
        dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

export const register = (name, email, password) => async (dispatch) => {
    try {
        const response = await axios.post(`${API_URL}/register`, { name, email, password });
        localStorage.setItem('user', JSON.stringify(response.data));
        dispatch({ type: REGISTER_SUCCESS, payload: response.data });
    } catch (error) {
        console.error('Error registering:', error);
        throw error;
    }
};