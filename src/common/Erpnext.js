const proxyurl = "https://hidden-woodland-47124.herokuapp.com/";
const serverUrl = "https://erpnext-test.italjapan.it/api/resource/";

const getRequestOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "token a44cfe297486e27:7dce1d5b537dfea",
  },
};

const postRequestOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "token a44cfe297486e27:7dce1d5b537dfea",
  },
};

//8RGAei3J0Hi36fGLT(#74ZZ@
//$P$Bk7XBuLFmiRunfFAgMVecvJwgyRp9z0

export async function erpnextUserLogin(email, password) {
  var hasher = require("wordpress-hash-node");
  password = "8RGAei3J0Hi36fGLT(#74ZZ@";
  var hash = hasher.HashPassword(password);

  console.log("DB:",hash);
  
  console.log("wordpress-hash-node", "$P$Bk7XBuLFmiRunfFAgMVecvJwgyRp9z0");

  var PasswordHash = require("phpass").PasswordHash;
  var passwordHash = new PasswordHash();
  hash = passwordHash.hashPassword(password);

  console.log("phpass", "$P$Bk7XBuLFmiRunfFAgMVecvJwgyRp9z0");

  var md5 = require('md5');
  console.log(md5(password));

  const docType = "Lead";
  const query =
    '&filters=[["Lead", "email_id", "=", "' +
    email +
    '"],["itj_b2b_user_password", "=", "' +
    password +
    '"]]';
  const fields = '?fields=["name","company_name"]';
  const request = proxyurl + serverUrl + docType + fields + query;

  let response = await fetch(request, getRequestOptions);
  return response.json();
}
