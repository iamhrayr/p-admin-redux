export default (data) => {
  const byId = {};
  const allIds = [];
  for (const item of data) {
    byId[item._id] = item;
    allIds.push(item._id);
  }
  return { byId, allIds };
};
