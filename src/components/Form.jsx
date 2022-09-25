import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import FormInput from './FormInput';
import FormDetails from './FormDetails';
import axios from 'axios';
export let firstname = "";
export let lastname = "";
export let regnumber = "";
export let emailid = "";
export let githubprofile = "";
export let course1 = "";
export let year1 = "";

const Form = () => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `successfull`; 
    navigate(path);
  }

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [regnum, setRegnum] = useState('');
  const [email, setEmail] = useState('');
  const [github, setGithub] = useState('');
  const [course, setCourse] = useState('');
  const [year, setYear] = useState('');

  const handleFname = (e) => {
    setFname(e.target.value)
  }
  const handleLname = (e) => {
    setLname(e.target.value)
  }
  const handleRegnum = (e) => {
    setRegnum(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleGithub = (e) => {
    setGithub(e.target.value)
  }
  const handleCourse = (e) => {
    setCourse(e.target.value)
  }
  const handleYear = (e) => {
    setYear(e.target.value)
  }

  firstname = fname;
  lastname = lname;
  regnumber = regnum;
  emailid = email;
  githubprofile = github;
  course1 = course;
  year1 = year;

  const handleApi = () => {
    console.log({ fname, lname, regnum, email, github, course, year })
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      fname: fname,
      lname: lname,
      regnum: regnum,
      email: email,
      github: github,
      course: course,
      year: year
    })
    .then((response) => {
      console.log(response.data);
      alert("Your Data has been saved successfully!")
    })
    .catch((error) => {
      alert("Error, Please fill again!")
    })
  }

  return (
    <div className='text-white mt-24 pb-24 pt-5 scroll-smooth'>
        <form className='w-screen'>
            <FormInput type="fname" function={handleFname} placeholder="First Name"/>
            <FormInput type="lname" function={handleLname} placeholder="Last Name"/>
            <FormInput type="regnum" function={handleRegnum} placeholder="Registration Number"/>
            <FormInput type="email" function={handleEmail} placeholder="SRM Email-id"/>
            <FormInput type="github" function={handleGithub} placeholder="Github Profile"/>
            <FormInput type="course" function={handleCourse} placeholder="Course"/>
            <FormInput type="year" function={handleYear} placeholder="Year"/>
            <div className='from-[#FB5A0D] to-[#EB144C] text-white text-center text-xl font-semibold bg-gradient-to-r drop-shadow-2xl rounded-md mx-5 px-5 py-2'>
              <button type="submit" onClick={()=>{handleApi(); routeChange();}}>Sumbit</button>
            </div>
        </form>
    </div>
  )
}

export default Form;