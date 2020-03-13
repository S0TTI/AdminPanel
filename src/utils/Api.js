import React from "react";
import axios from "axios";
import History from "./History.js";

const SERVER_URL = "http://82227120.ngrok.io";

const login = async data => {
    const LOGIN_ENDPOINT = `${SERVER_URL}/api/login`;
    await axios
        .post(LOGIN_ENDPOINT, data)
        .then(response => {
            if (response.status === 200) {
                let token = response.data.token;
                localStorage.setItem("access_token", token);
                History.push("/dashboard");
            } else {
                const error = new Error(response.error);
                throw error;
            }
        })
        .catch(err => {
            console.error(err);
            alert("پاسخ سرور به درخواست شما:" + "\n" + err);
        });
};

const register = async data => {
    const SIGNUP_ENDPOINT = `${SERVER_URL}/api/register.php`;
    try {
        let response = await axios({
            method: "post",
            responseType: "json",
            url: SIGNUP_ENDPOINT,
            data: data
        });
        console.log("salam injam " + response);
    } catch (e) {
        console.log(e);
    }
};

const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("expire_at");
};

export { login, register, logout };
