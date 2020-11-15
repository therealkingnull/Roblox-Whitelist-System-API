const data = require('./whiteLists.json');

const randomN = (dataArray, n) => {
    const limit = dataArray.length < n ? dataArray.length : n;
    const randomIndicesSet = new Set();
  
    while (randomIndicesSet.size < limit) {
      const randomIndex = Math.floor(Math.random() * dataArray.length);
      if (!randomIndicesSet.has(randomIndex)) {
        randomIndicesSet.add(randomIndex);
      }
    }
  
    return Array.from(randomIndicesSet).map(randomIndex => {
      return dataArray[randomIndex];
    });
  };

  const wlUser = (user, n) => {
    return Object.values(data)(data => data.users.userName === user);
  };

  module.exports = { wlUser, randomN, data }