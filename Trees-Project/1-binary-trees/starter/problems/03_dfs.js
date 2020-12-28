function dfs(root){
  if(root === null) return [];

  let res = [];

  res.push(root.val);
  res = res.concat(dfs(root.left));
  res = res.concat(dfs(root.right))

  return res;
}

module.exports = { dfs };