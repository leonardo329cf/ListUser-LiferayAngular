import { HttpClient } from "@angular/common/http";
import AuthToken from "../types/AuthToken";
import User from "../types/User";

const CLIENT_ID = "id-956f2836-9d76-756f-82ad-61e30f9494c";
const CLIENT_SECRET = "secret-aa365ce2-5c58-c88e-3c9b-337d622cef14";
const BASE_URL = "http://localhost:8080/o";
const LOGIN_URL = "/oauth2/token";
const USER_URL = "/users";

export const requestUsers = (http: HttpClient, setUsers: (users:User[]) => void ) => {
  const tokenHeaders = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET),
  };

  const body = "grant_type=client_credentials";

  const tokenUrl = BASE_URL + LOGIN_URL;
  http.post<AuthToken>(tokenUrl, body, { headers: tokenHeaders }).subscribe(
    (response) => {
      const token = response.token_type + " " + response.access_token;

      const usersUrl = BASE_URL + USER_URL;

      const userHeaders = {
        Authorization: token,
      };
     
      http.get<User[]>(usersUrl, { headers: userHeaders }).subscribe(
        (response) => {
          setUsers(response);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    (error) => {
      console.log(error);
    }
  );
};

