const getLog = (state: any) => {
  const regex = RegExp(state.searchQuery, 'i');

  return state.keys.filter((key: any) => {
    return regex.test(key.name) || regex.test(key.role);
  });
};

export default {
  getLog: getLog,
}