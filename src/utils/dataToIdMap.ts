export interface KeyMap<T> {
	[key: string]: T;
}

export default (data: Array<any>) => {
  const byId: KeyMap<any> = {};
  const allIds = [];
  for (const item of data) {
    byId[item._id] = item;
    allIds.push(item._id);
  }
  return { byId, allIds };
};
