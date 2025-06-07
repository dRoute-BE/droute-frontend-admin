
import Key from "../../constants/key"; // Import Key object
import { apiGetRequest } from "../http/get";
import { apiPostRequest } from "../http/post";

const { USER_API_URL } = Key;

// Sign In API
export const signInAPI = (data) =>
  apiPostRequest({
    apiUrl: `${USER_API_URL}/auth/login`,
    content_type: "application/json",
    data: data,
  });

// Get User By ID API
export const getUserByIdAPI = (userId) =>
  apiGetRequest({
    apiUrl: `${USER_API_URL}/${userId}`,
    content_type: "application/json",
  });
