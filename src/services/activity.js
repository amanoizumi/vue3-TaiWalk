export const getTodayDateStr = () => {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  if (month < 10) month = '0' + month;
  if (day < 10) day = '0' + day;
  return `${year}-${month}-${day}`;
};

export const targetDayActivity = (dateStr, arr) => {
  const targetTime = new Date(dateStr).getTime();
  const result = arr.filter((item) => {
    const activityStartTime = new Date(item.StartTime.slice(0, 10)).getTime();
    const activityEndTime = new Date(item.EndTime.slice(0, 10)).getTime();

    return targetTime >= activityStartTime && targetTime <= activityEndTime;
  });

  
  return result;
};

export const afterDayActivity = (dateStr, arr) => {
  const todayTime = new Date(dateStr).getTime();
  const result = arr.filter((item) => {
    const activityEndTime = new Date(item.EndTime.slice(0, 10)).getTime();
    return activityEndTime >= todayTime;
  });
  return result;
};