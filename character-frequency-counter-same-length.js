function sameFrequency(n1, n2) { 
  // good luck. Add any arguments you deem necessary.
  let s1 = String(n1);
  let s2 = String(n2);   //
  if (s1.length !== s2.length) {
    return false;
  }
  let f1 = {};
  let f2 = {};
  for (let i in s1) {
    if (!f1[s1[i]]) {
      f1[s1[i]] = 1;
    } else {
      f1[s1[i]]++;
    }
  }
  for (let i in s2) {
    if (!f2[s2[i]]) {
      f2[s2[i]] = 1;
    } else {
      f2[s2[i]]++;
    }
  }
  for (let i in f1) {
    if (f2[i] !== f1[i]) {
      return false;
    }

    return true;
  }
}

sameFrequency(182, 281) // return true
