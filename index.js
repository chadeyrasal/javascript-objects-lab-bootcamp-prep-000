var recipes = {prop: '1'}

function updateObjectWithKeyAndValue() {
  recipes.prop2 = '2'
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, prop2, value) {
  recipes[prop2] = '2'
  return recipes
}

function deleteFromObjectByKey() {

}

var recipes = {prop: '1'}

function destructivelyDeleteFromObjectByKey() {
  delete recipes.prop
  return recipes
}
