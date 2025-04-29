export const getLocationInfoTopic = ({ orgId, appId, project } = {}) => {
  return `/voerka/${orgId}/${appId}/${project}/broadcast/business/data/rs/realtimeMeas/#`;
};
// export const getAlarmTopic = (project) =>
//   `/voerka/${project}/broadcast/business/data/alarms/#`;
export const getAlarmTopic = ({ orgId, appId, project } = {}) => {
  return `/voerka/${orgId}/${appId}/${project}/devices/+/rs/alarms/#`;
};
