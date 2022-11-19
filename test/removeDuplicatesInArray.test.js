const removeDuplicatesInArray = require("../assets/javascript/removeDuplicatesInArray");

test('should filter to prevent duplicates in array', () => {
  
  const noDuplicates = [
    "1",
    "2",
    "3"
  ];

  const oneDuplicate = [
    "1", 
    "1",
    "2",
    "3"
  ];

  const multipleDuplicates = [
    "1",
    "1",
    "2",
    "2",
    "3"
  ]

  expect(removeDuplicatesInArray(noDuplicates)).toEqual(noDuplicates);
  expect(removeDuplicatesInArray(oneDuplicate)).toEqual(noDuplicates);
  expect(removeDuplicatesInArray(multipleDuplicates)).toEqual(noDuplicates);
})