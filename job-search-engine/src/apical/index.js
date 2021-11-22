export const fetchjob = async (query) => {
  let response = await fetch(
    ` https://strive-jobs-api.herokuapp.com/jobs?search=${query}`
  );
  /*     ('https://strive-jobs-api.herokuapp.com/jobs?search=' + '${query}' + '&limit=10')*/
  let job = await response.json();
  return job.data;
};
export const fetchcompany = async (query) => {
  let response1 = await fetch(
    ` https://strive-jobs-api.herokuapp.com/jobs?company=${query}`
  );
  /*     ('https://strive-jobs-api.herokuapp.com/jobs?search=' + '${query}' + '&limit=10')*/
  let company = await response1.json();
  return company.data;
};
