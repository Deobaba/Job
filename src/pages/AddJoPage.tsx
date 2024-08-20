import React, { useState } from 'react';
import{ Job }from '../interface'
import { useNavigate } from 'react-router';
import { toast  } from 'react-toastify';

interface AddJobPageProps {
  addToJob: (newJob: Job) => Promise<void>;
}

const AddJoPage = ({addToJob}: AddJobPageProps) => {
  const [job, setJob] = useState<Job>({
    id: '', 
    type: 'Full-Time',
    title: '',
    description: '',
    salary: 'Under $50K',
    location: '',
    company: {
      name: '',
      contactEmail: '',
      description: '',
      contactPhone: '',
    },
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name.startsWith('company.')) {
      const companyField = name.split('.')[1];
      setJob((prevJob) => ({
        ...prevJob,
        company: {
          ...prevJob.company,
          [companyField]: value,
        },
      }));
    } else {
      setJob({
        ...job,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission, e.g., send job data to the server
   addToJob(job)
    toast.success('Job added successfully')
   return navigate('/jobs')
  };

  return (
    <>
      <section className="bg-indigo-50">
        <div className="container m-auto max-w-2xl py-24">
          <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <form onSubmit={handleSubmit}>
              <h2 className="text-3xl text-center font-semibold mb-6">Add Job</h2>

              <div className="mb-4">
                <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
                  Job Type
                </label>
                <select
                  id="type"
                  name="type"
                  className="border rounded w-full py-2 px-3"
                  value={job.type}
                  onChange={handleChange}
                  required
                >
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Remote">Remote</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Job Listing Name
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="eg. Beautiful Apartment In Miami"
                  value={job.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="border rounded w-full py-2 px-3"
                  rows={4}
                  placeholder="Add any job duties, expectations, requirements, etc"
                  value={job.description}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="mb-4">
                <label htmlFor="salary" className="block text-gray-700 font-bold mb-2">
                  Salary
                </label>
                <select
                  id="salary"
                  name="salary"
                  className="border rounded w-full py-2 px-3"
                  value={job.salary}
                  onChange={handleChange}
                  required
                >
                  <option value="Under $50K">Under $50K</option>
                  <option value="$50K - 60K">$50K - $60K</option>
                  <option value="$60K - 70K">$60K - $70K</option>
                  <option value="$70K - 80K">$70K - $80K</option>
                  <option value="$80K - 90K">$80K - $90K</option>
                  <option value="$90K - 100K">$90K - $100K</option>
                  <option value="$100K - 125K">$100K - $125K</option>
                  <option value="$125K - 150K">$125K - $150K</option>
                  <option value="$150K - 175K">$150K - $175K</option>
                  <option value="$175K - 200K">$175K - $200K</option>
                  <option value="Over $200K">Over $200K</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Company Location"
                  value={job.location}
                  onChange={handleChange}
                  required
                />
              </div>

              <h3 className="text-2xl mb-5">Company Info</h3>

              <div className="mb-4">
                <label htmlFor="company.name" className="block text-gray-700 font-bold mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company.name"
                  name="company.name"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Company Name"
                  value={job.company.name}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="company.description" className="block text-gray-700 font-bold mb-2">
                  Company Description
                </label>
                <textarea
                  id="company.description"
                  name="company.description"
                  className="border rounded w-full py-2 px-3"
                  rows={4}
                  placeholder="What does your company do?"
                  value={job.company.description}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="mb-4">
                <label htmlFor="company.contactEmail" className="block text-gray-700 font-bold mb-2">
                  Contact Email
                </label>
                <input
                  type="email"
                  id="company.contactEmail"
                  name="company.contactEmail"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Email address for applicants"
                  value={job.company.contactEmail}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="company.contactPhone" className="block text-gray-700 font-bold mb-2">
                  Contact Phone
                </label>
                <input
                  type="tel"
                  id="company.contactPhone"
                  name="company.contactPhone"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Optional phone for applicants"
                  value={job.company.contactPhone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <button
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Add Job
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddJoPage;
