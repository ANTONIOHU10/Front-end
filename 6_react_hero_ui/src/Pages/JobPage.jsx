import React from 'react'
/** get id from the current URL */
import { useParams, useLoaderData, useNavigate } from 'react-router-dom'
import { FaArrowLeft ,FaMapMarker} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'


/**
 * using the router features, at router layer we got already all these data, and no need to fetch manually in every component using UseEffect
 * so we don't need the loading/ spinner component, because all data are already fetched before the rendering of the page
 */
const JobPage = ({deleteJob}) => {
    const {id} = useParams();
    const job = useLoaderData();
    const navigate = useNavigate();
 
  // passing the id of the object/job to be deleted
    const onDeleteClick= (jobId) => {
    const confirm = window.confirm("Are you sure you want to delete this listing?")

  
    if(!confirm){
      return;
    } else {

      //call the delete function passed by App using the delete id
      deleteJob(jobId);

      //using toast lib to notify the user
      toast.success('Job deleted successfully');
      //return to the jobs page
      return navigate("/jobs");
    }
  }
/** for default, it fetches all these data when the page is open, because the second parameter is [] */

  return (
    <>
       <section >
      <div className="container m-auto py-6 px-6">
        <Link
          to="/jobs"
          className="text-blue-700 hover:text-blue-900 flex items-center"
        >
          <FaArrowLeft className='mr-2'/> Back to Job Listings
        </Link>
      </div>
    </section>

    <section className="bg-indigo-50">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main>
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              <div className="text-gray-500 mb-4">{job.type}</div>
              <h1 className="text-3xl font-bold mb-4">
                {job.title}
              </h1>
              <div
                className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
              >
                <FaMapMarker className='text-orange-700 mr-1'/>
                <p className="text-orange-700">{job.location}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-blue-900 text-lg font-bold mb-6">
                Job Description
              </h3>

              <p className="mb-4">
                {job.description}
              </p>

              <h3 className="text-blue-900 text-lg font-bold mb-2">job</h3>

              <p className="mb-4">{job.salary} / Year</p>
            </div>
          </main>

          {/*<!-- Sidebar -->*/}
          <aside>
            {/*<!-- Company Info -->*/}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Company Info</h3>

              <h2 className="text-2xl">{job.company.name}</h2>

              <p className="my-2">
                {job.company.description}
              </p>

              <hr className="my-4" />

              <h3 className="text-xl">Contact Email:</h3>

              <p className="my-2 bg-indigo-100 p-2 font-bold">
                {job.company.contactEmail}
              </p>

              <h3 className="text-xl">Contact Phone:</h3>

              <p className="my-2 bg-indigo-100 p-2 font-bold">{job.company.contactPhone}</p>
            </div>

            {/*<!-- Manage -->*/}
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-bold mb-6">Manage Job</h3>
              <Link
              /**dynamic for every jobpage*/
                to= {`/edit-job/${job.id}`}
                className="bg-blue-500 hover:bg-blue-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit Job</Link>
          
              <button onClick={() => onDeleteClick(job.id)} // passing the id (of the current page) to be deleted
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >
                Delete Job
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
    </>
  )
}

const jobLoader = async ({params}) => {
  const res = await fetch(`https://json-server-nu-beige.vercel.app/jobs/1`);
  const data = await res.json();
  return data; 
}

export {JobPage as default, jobLoader} ;


/** way using classNameic fetch and useEffect, we need spinner and loading component
 * 
 * const JobPage = () => {
  const {id} = useParams();
  const [job,setJob] = useState(null);
  const [loading,setLoading] = useState(true);

  useEffect (() => {
    const fetchJob = async() => {
      try{
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
        setJob(data);
    } catch (error) {
        console.log('Error fetching data', error);
    } finally {
        setLoading(false);

    }
  }
fetchJob();
},[])

return loading ? <Spinner/> : (<h1>{job.title}</h1>)
}


export default JobPage
 * 
 * 
 */