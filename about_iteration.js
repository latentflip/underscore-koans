function assert_equal(was, should_be) {
  if (was == 'incomplete') {
    document.write('<li class=incomplete>You need to complete the koan - '+assert_equal.caller.name+'</li>');
    throw('Incomplete');
  } else if (_.isEqual(should_be, was)) {
    document.write('<li class=pass>:) - '+assert_equal.caller.name+' - '+testNumber+'</li>');
  } else {
    document.write('<li class=fail>:( - '+assert_equal.caller.name+' - '+testNumber+'</li>');
    console.log(was, should_be);
    throw('Fail');
  }
  testNumber += 1;
}


//globals, yeugh
__ = "incomplete";
koans = [];
testNumber = 1;


koans.push(function testIteratingWithEach() {
  var array = [1, 2, 3],
      sum = 0;

  _.each(array, function(item) {
    sum += item;
  });

  var __ = 6;
  assert_equal(__, sum);
});


koans.push(function testMapTransformsElementsOfAnArray() {
  var array = [1, 2, 3],
      sum = 0,
      new_array, another_array;
  
  new_array = _.map(array, function(item) {
    return item + 10;
  });
  var __ = [11,12,13];
  assert_equal(__, new_array);

  //Note: 'collect' is another name for the 'map' method
  another_array = _.collect(array, function(item) { 
    return item + 10;
  });
  var __ = [11,12,13];
  assert_equal(__, another_array);
});


koans.push(function testFilterSelectsCertainItemsFromAnArray() {
  var array = [1, 2, 3, 4, 5, 6],
      even_numbers, odd_numbers;

  even_numbers = _.filter(array, function(item) { return item % 2 == 0 });
  var __ = [2,4,6];
  assert_equal(__, even_numbers);

  //Note: 'select' is another name for filter
  odd_numbers = _.select(array, function(item) { return item % 2 != 0; });
  var __ = [1,3,5];
  assert_equal(__, odd_numbers);
});


koans.push(function testFindLocatesTheFirstElementMatchingACriteria() {
    var array = ["Jim", "Bill", "Clarence", "Doug", "Eli"],
        longName;

    longName = _.find(array, function(item) { return item.length > 4 });

    var __ = 'Clarence';
    assert_equal(__, longName);
});

koans.push(function testReduceWillBlowYourMind() {
  var array = [2,3,4];
  
  var result = _.reduce(array, function(sum,item) { return sum + item; }, 0);
  var __ = 9;
  assert_equal(__, result);

  //Note: 'inject' is another name for reduce
  var result2 = _.inject(array, function(prod,item) { return prod * item; }, 1);
  var __ = 24;
  assert_equal(__, result2);

  //Note: 'foldl' is another name for reduce
  var result3 = _.foldl(array, function(sum,item) { return sum + item; }, 0);
  var __ = 9;
  assert_equal(__, result);

  //Extra Credit 1:
  //Can you explain in your own words what reduce does

  //Extra Credit 2
  //Be careful with these 
  var result4 = _.reduce(array, function(sum, item) { return sum + item; }, 10);
  var __ = 19;
  assert_equal(__, result4);

  var result5 = _.reduce(array, function(sum, item) { return sum + item; });
  var __ = 9;
  assert_equal(__, result5);

  //Extra Credit 3
  //Can you explain in words what the final, optional, argument to reduce does?
  
});







_.each(koans, function(koan) { 
  testNumber = 1;
  koan();
});
