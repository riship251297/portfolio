import React from "react";
import Box from "../Box/Box";
import Navbar from "../Navbar/Navbar";
import Photo from "../Photo/Photo";
import '/Users/rishikesh/Desktop/project/src/components/About/About.css'
import { GoDesktopDownload } from "react-icons/go";
import { FaGithub,FaLinkedin,FaJs,FaReact,FaTelegramPlane,FaTwitter,FaPython,FaHtml5,FaCss3Alt,FaNode,MdOutgoingMail } from "react-icons/fa";


function About (){
    return (
        <>
        <Navbar/>
        <Photo/>
        <Box/>
        <h4>Check out my Resume : <a href="https:youtube.com"><GoDesktopDownload/></a> </h4>
        <h4>Find my work on  : <FaGithub size={50}/></h4>
        <h4>You can connect me on : <FaLinkedin size={50}/></h4>
        <h4>Skills : <FaJs size={50}/> <FaReact size={50}/> <FaPython size={50}/> <FaHtml5 size={50}/> <FaCss3Alt size={50}/> <FaNode size={50}/> </h4>
        
        <div className="main">
          <div className="ra">
            <center><h2>WORK EXPERIENCE</h2></center>
            <ul>
              <li><b>Graduate Research Assistant | Bioinformatics Lab | Clemson University, US | Funded by National Institute of Health Sciences.</b></li>
              <div className="left_andar">
                <ol>
                    <li><p>Implemented Privacy Model that assures the removal of facial features from 3D Brain MRI scans by mapping them into four different 2D projections.It removes all the facial feaures that can be used to identify the subject.This model is very handy for analysis since researchers would always prefer images that are deidentified.</p></li>
                    <li>Implemented Brain Cut model to ensure that all the brain tissues in MRI image are intact and not removed as a part of the deidentification process.This model can help researchers evaluate the image since deskulling can remove important voxels from the brain image.</li>
                </ol>
              </div>
            <div className="left1_andar">
              <li><b>Graduate Research Assistant | Multimedia Lab | Clemson University, US |</b></li>
              <ol>
                <li><p>Integrated the privacy and Brain cut models into the Dyslexia Data Consortium, a web platform created to better understand dyslexia and developmental language disorders in general, as well as to provide data to aid replication and data sharing.</p></li>
                <li><p>CAT12 toolbox was used to integrate various neuroimaging metrics associated with dyslexia for all T1-weighted images. Integrated necessary different neuroimaging fractional intensity threshold images from the FSL BET tool.</p></li>
              </ol>
            </div>
            </ul>
            </div>
            
        
          <div className="internship">

          </div>
        </div>
        {/* <div className='endboard'>
          <div className='leftpart'>
            <center><h1>WORK EXPERIENCE</h1></center>
            <ul>
              <li><b>Graduate Research Assistant | Bioinformatics Lab | Clemson University, US | Funded by National Institute of Health Sciences.</b></li>
              <div className="left_andar">
                <ol>
                    <li><p>Implemented Privacy Model that assures the removal of facial features from 3D Brain MRI scans by mapping them into four different 2D projections.It removes all the facial feaures that can be used to identify the subject.This model is very handy for analysis since researchers would always prefer images that are deidentified.</p></li>
                    <li>Implemented Brain Cut model to ensure that all the brain tissues in MRI image are intact and not removed as a part of the deidentification process.This model can help researchers evaluate the image since deskulling can remove important voxels from the brain image.</li>
                </ol>
              </div>
            <div className="left1_andar">
              <li><b>Graduate Research Assistant | Multimedia Lab | Clemson University, US |</b></li>
              <ol>
                <li><p>Integrated the privacy and Brain cut models into the Dyslexia Data Consortium, a web platform created to better understand dyslexia and developmental language disorders in general, as well as to provide data to aid replication and data sharing.</p></li>
                <li><p>CAT12 toolbox was used to integrate various neuroimaging metrics associated with dyslexia for all T1-weighted images.</p></li>
                <p>
                  <a href="https://dyslexia.computing.clemson.edu">Check out the Dyslexia Data Consortium !</a>
                </p>
              </ol>
            </div>

             
              <li><b>Software Development Engineer Intern | Markelytics Solutions | Mumbai, INDIA </b></li>
              <div className="left2-andar">
                <ol>
                    <li><p>Developed front end application for the CRM team, using Web technologies like HTML 5,CSS, Javascript, React JS, and Ajax that meets the web standards.</p></li>
                    <li><p>Used React-Router extensively to navigate through various react components.CSS styles were developed to preserve the uniformity of all the screens throughout the application.</p></li>
                </ol>
              </div>
            </ul>

          </div>

          <div className='rightpart'>
            <center><h1>MS - COURSEWORK</h1></center>
            <div className="andar">
            <li><b>Spring 2021</b></li>
            <ol>
              <li>Deep Reinforcement Learning </li>
              <li>Applied Data Science </li>
              <li>Statistical Analysis - I </li>
            </ol>
            <li><b>Fall 2021</b></li>
            <ol>
              <li>Machine Learning - Implementation and Evaluation </li>
              <li>Data Analysis</li>
              <li>Foundations of Software Engineering</li>
            </ol>
            <li><b>Spring 2022</b></li>
            <ol>
              <li>Artificial Intelligence </li>
              <li>Distributed Denial Service of attacks</li>
              <li>Statistical Analysis - II (Regression Analysis)</li>
            </ol>
            <li><b>Fall 2022</b></li>
            <ol>
              <li>Cloud Computing </li>
            </ol>
            </div>
          </div>
          </div> */}
        </>


    );
}

export default About;