var recipes = {prop: '1'}

var firstKey
var firstValue

function updateObjectWithKeyAndValue(recipes, firstKey, firstValue) {
  firstKey = 'prop2'
  firstValue = 2
  recipes.firstKey = firstValue
  return recipes
}
