var u = [];
function lengthSupUK(n, k) {
    // your code
  var result = 0;
  for(var i = 1; i<= n; i++){
    generateU(i);
    if(u[i] >= k){
      result++;
    }
  }
  
  return result;
}

function comp(n) {
    // your code
  var result = 0;
  for(var i = 2; i<= n - 1; i++){
    generateU(i);
    generateU(i+1);
    if(u[i+1] < u[i]){
      result++;
    }
  }
  
  return result;
}

function generateU(n){
  u[1] = 1;
  u[2] = 1;
  
  if(u[n] == undefined){
    generateU(n-1);
    generateU(n-2);
    var a = n - u[n-1];
    var b = n - u[n-2];
    generateU(a);
    generateU(b);
    u[n] = u[a] + u[b];
  }
}
