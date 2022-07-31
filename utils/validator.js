//https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8

function emailValidate() {
  valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  if (valid) {
    return true;
  } else {
    console.log("Please enture a valid email.");
    return false;
  }
}

module.exports = validate;
