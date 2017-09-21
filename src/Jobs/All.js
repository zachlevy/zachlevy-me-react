import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { daysAgo } from '../helpers/dates'

const jobs = [
  {
    link: "https://angel.co/42/jobs/209154-software-engineer",
    title: "Software Engineer",
    postDate: new Date("2017-09-20"),
    company: "42",
    contact: "Cathy",
    location: "San Francisco"
  }, {
    link: "https://drive.google.com/file/d/0BzNTvlmEeOsDUzh1UnF3Z3hWR3M/view",
    title: "Full-stack Engineer",
    postDate: new Date("2017-09-20"),
    company: "Nova",
    contact: "Shenglong",
    location: "Toronto"
  }, {
    link: "http://bitcine.com/careers/",
    title: "Various Positions",
    postDate: new Date("2017-09-20"),
    company: "BitCine Technologies",
    contact: "D'Arcy",
    location: "Toronto"
  }
]

class All extends Component {
  render() {
    let jobsHtml
    const recentJobs = jobs.filter((job) => daysAgo(job.postDate) <= 14)
    if (recentJobs.length > 0) {
      jobsHtml = (
        <div>
          {
            recentJobs.map((job, index) => {
              const numDaysAgo = daysAgo(job.postDate)
              return (
                <div key={index}>
                  <div className="row">
                    <div className="col-12">
                      <a href={job.link} target="_blank">
                        <h4>{job.title} at {job.company} in {job.location}</h4>
                      </a>
                      <p>Mentioned to me by {job.contact}</p>
                      <p>Posted {numDaysAgo} day{numDaysAgo > 1 ? "s" : ""} ago</p>
                    </div>
                  </div>
                  <hr />
                  <br />
                </div>
              )
            })
          }
        </div>
      )
    }
    return (
      <div>
        <h1>Jobs, Jobs, Jobs</h1>
        <p>This is a list of people I know who are looking for positions to be filled.</p>
        <p>Send me an email if you'd like an intro.</p>
        <br />
        {jobsHtml}
        <p>*Postings are automatically removed after 2 weeks and I don't take them down if they're filled.</p>
      </div>
    )
  }
}

export default All
