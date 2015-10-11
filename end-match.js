function end(str, target) {
  //check is str ends with target
  // find str length
  var string = str.length;
  //find target length
  var trgt = target.length;
  // minus target from string to get length of last word
  var wordLength = string - trgt;
  //use substring to find the last word in the string
  var sub = str.substring(wordLength);
  //if the substring matches target then return true
  if(sub === target) {
    return true;
  } else {
    //else return false
    return false;
  }
  
  
}

end("Bastian", "n", "");
