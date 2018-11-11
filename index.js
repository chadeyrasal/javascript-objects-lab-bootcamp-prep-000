var recipes = {prop: '1'}

var key
var value

function updateObjectWithKeyAndValue(recipes, key, value) {
  key = 'prop2'
  value = 2
  recipes.key = value
  return recipes
}
