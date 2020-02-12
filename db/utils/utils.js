exports.makeRefObj = list => {
  const refObj = {};
  list.forEach(obj => {
    refObj[obj.channel_name] = obj.channel_id;
  });
  return refObj;
};

exports.formatChannelPerms = (channelPerms, channelRef) => {
  return channelPerms.map(({ ...channelPerm }) => {
    channelPerm.channel_id = channelRef[channelPerm.channel_name];
    delete channelPerm.channel_name;
    return channelPerm;
  });
};
