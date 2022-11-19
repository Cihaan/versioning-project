const removeDuplicatesInArray = (entries) => {
  return [...new Set(entries)];
}

module.exports = removeDuplicatesInArray;