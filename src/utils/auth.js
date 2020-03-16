import React from "react";

var UserToken = "";
var UserHaveToken = false;
var LastLocationReferer = "";

const UserTokenSet = data => {
    const access_token = data.token;
    localStorage.setItem("access_token", access_token);
    UserToken = access_token;
    UserHaveToken = true;
};

function LastLocation(location) {
  LastLocationReferer = location;
} ;

function DelletUserData(){
  UserToken = "";
  UserHaveToken = false;
};

const UserDataContext = React.createContext();


export { UserDataContext, UserTokenSet, DelletUserData , LastLocation , LastLocationReferer, UserHaveToken, UserToken };