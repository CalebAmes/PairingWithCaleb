function bfs(root) {
  if (root === null) return []

  let result = []
  result.push(root.val)
  result = result.concat(bfs(root.left))
  result = result.concat(bfs(root.right))

  return result
}

module.exports = { bfs };
