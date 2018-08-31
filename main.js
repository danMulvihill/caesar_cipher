var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";


function SubstitutionCipher(abc1, abc2) {
this.abc1 = abc1;
this.abc2 = abc2;
this.encode = function (str) {
  //...
  cipher = "";
  for (var i = 0; i<str.length; i++){
    for (var j = 0; j<abc2.length; j++){
       if (str[i] == abc1[j]) cipher += abc2[j]
      }
  }
  return cipher
}
this.decode = function (str) {
  //...
  decipher = "";
  for (var i = 0; i<str.length; i++){
    for (var j = 0; j<abc1.length; j++){
       if (str[i] == abc2[j]) decipher += abc1[j]
      }
  }
  return decipher
}
}

var sub = new SubstitutionCipher(abc1, abc2);
console.log( sub.encode("huns are coming") )
console.log( sub.decode("hgmvepiafcrms") )
