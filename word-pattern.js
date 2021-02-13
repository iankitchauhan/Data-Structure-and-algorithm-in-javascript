function stringGet() {
    var pattern = "abbaa".split('');
    s = "dog cat cat dog fish".split(' ');
  
    var obj = {}
    if (pattern.length != s.length) {
      return false
    }
    for (let i = 0; i < pattern.length; i++) {
      if (!obj[s[i]]) {
        obj[s[i]] = pattern[i];
        console.log(obj,'objsss')
      } else if (pattern[i] == obj[s[i]]) {}
      else {
        return false
      }
  
    }
    return true
  }
  
  
  
  
  
  var result = stringGet()
  console.log(result, 'result data');
  