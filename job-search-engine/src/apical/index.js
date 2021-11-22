export const fetchjob = async (query) => {
  let response = await fetch(
    ` https://strive-jobs-api.herokuapp.com/jobs?search=${query}` + "&limit=10"
  );
  /*     ('https://strive-jobs-api.herokuapp.com/jobs?search=' + '${query}' + '&limit=10')*/
  let job = await response.json();
  return job.data;
};
