const SingleJob = (props) => {
  return (
    <div>
      <li>src={props.company_name}</li>
      <li>src={props.title}</li>
      <li>src={props.job_type}</li>
    </div>

    /*     <img className="album" src={props.src} alt="album cover" key={props.key} />
     */
  );
};
export default SingleJob;
