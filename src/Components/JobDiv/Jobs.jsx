import React from 'react'
import {BiTimeFive} from 'react-icons/bi'
import logo1 from '../../Assets/logo1.png'

const Data = [
{
  id: 1,
  image: logo1,
  title: 'Web Developer',
  time: 'Now',
  location: 'Canada',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, voluptatem?',
  company: 'Halal Limited Co.'
},

{
  id: 2,
  image: logo1,
  title: 'Software Eng',
  time: '4Hrs',
  location: 'Germany',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, voluptatem?',
  company: 'Halal Limited Co.'
},

{
  id: 3,
  image: logo1,
  title: 'Tester',
  time: '17Hrs  ',
  location: 'Belgium',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, voluptatem?',
  company: 'Halal Limited Co.'
},

{
  id: 4,
  image: logo1,
  title: 'Lead Developer',
  time: '13Hrs  ',
  location: 'France',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, voluptatem?',
  company: 'Halal Limited Co.'
},

{
  id: 5,
  image: logo1,
  title: 'Web Developer',
  time: 'Now',
  location: 'Canada',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, voluptatem?',
  company: 'Halal Limited Co.'
},

{
  id: 6,
  image: logo1,
  title: 'Software Eng',
  time: '4Hrs',
  location: 'Germany',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, voluptatem?',
  company: 'Halal Limited Co.'
},

{
  id: 7,
  image: logo1,
  title: 'Tester',
  time: '17Hrs  ',
  location: 'Belgium',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, voluptatem?',
  company: 'Halal Limited Co.'
},

{
  id: 8,
  image: logo1,
  title: 'Lead Developer',
  time: '13Hrs  ',
  location: 'France',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, voluptatem?',
  company: 'Halal Limited Co.'
}


]

const Jobs = () => {
  return (
    <div>
      <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>
          {
            Data.map(({id,image,title,time,location,desc,company}) => {
              return (
                <div key={id} className='group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] 
          hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>

            <span className='flex justify-between items-center gap-4'>
                <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
                <span className='flex items-center text-[#ccc] gap-1'>
                  <BiTimeFive/>{time}
                </span>
            </span>
            <h6 className='text-[#ccc]'>{location}</h6>

            <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
              {desc}
            </p>

            <div className='company flex items-center gap-2'>
              {/* Logo şirket adı */}
              <img src={image} alt='Company Logo' className='w-[10%]'></img>
              <span className='text-[14px] py-[1rem] block group-hover:text-white:'>{company}</span>
            </div>

            <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold
            text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>
              Apply Now
            </button>

          </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default Jobs;