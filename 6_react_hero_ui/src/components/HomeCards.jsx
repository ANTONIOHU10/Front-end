import React from 'react'
import Card from '../components/Card'
import { useState } from 'react';
import { Link } from 'react-router-dom'

import {Card as Card_Hero, CardHeader, CardBody, CardFooter,Avatar, Divider, Image, Button} from "@heroui/react";

const HomeCards = () => {
  const information_1 = {
    name: "Antonio",
    link: "@antonio",
    description: "A web developer",
    tag: "Looking for job",
    following: 120,
    followers: 300,
    avatar:"https://heroui.com/avatars/avatar-9.png"
  };

  const information_2 = {
    name: "Davide",
    link: "@davide",
    description: "Browse our React jobs and start your career today",
    tag: "Hiring",
    following: 80,
    followers: 150,
    avatar:"https://heroui.com/avatars/avatar-10.png"
  };

 

  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">

          <Card_Hero>
          
            <h2 className="text-2xl font-bold">For Developers</h2>
            <p className="mt-2 mb-4">
              Browse our React jobs and start your career today
            </p>
            <Link
              to="/jobs"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Jobs
            </Link>

            <Card information={information_1}/>
          </Card_Hero>

          <Card_Hero bg='bg-indigo-100'>
            <h2 className="text-2xl font-bold">For Employers</h2>
            <p className="mt-2 mb-4">
              List your job to find the perfect developer for the role
            </p>
            <Link
              to="/add-job"
              className="inline-block bg-blue-700 text-white rounded-lg px-4 py-2 hover:bg-blue-900"
            >
              Add Job
            </Link>

            <Card information={information_2}/>
              
          </Card_Hero>          
        </div>
      </div>
    </section>
  )
}

export default HomeCards