export default (data: Array<any>) => {
  const byId: Record<string, any> = {};
  const allIds = [];
  for (const item of data) {
    byId[item._id] = item;
    allIds.push(item._id);
  }
  return { byId, allIds };
};
