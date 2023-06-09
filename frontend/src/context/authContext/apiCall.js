import axios from "axios";
import { loginStart, loginSuccess, loginFailure } from "./AuthActions";

export const login = async (user, dispatch) => {
    dispatch(loginStart());
    try {
        const res = await axios.post(`${process.env.REACT_API_KEY}api/auth/login`, user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};
