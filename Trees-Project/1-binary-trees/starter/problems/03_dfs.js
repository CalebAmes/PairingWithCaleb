function dfs(root){
  if(root === null) return [];

  let res = [];

  res = res.concat(dfs(root.left));
  res.push(root.val);
  res = res.concat(dfs(root.right))

  return res;
}

module.exports = { dfs };