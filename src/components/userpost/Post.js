import React from 'react'
import './Post.css'
import Card from '../Card/Card'
import im1 from '../../assets/post1bg.jpeg'
import im2 from '../../assets/post2.jpeg'
import im3 from '../../assets/post3.jpeg'
import prf1 from '../../assets/prf1.jpeg'
import prf2 from '../../assets/prf2.jpeg'
import prf3 from '../../assets/prf3.jpeg'
import prf4 from '../../assets/prf4.jpeg'
import Card4 from '../card4/Card4'
import Card3 from '../Card3/Card3'
import article from '../../assets/✍️ Article.png'
import job from '../../assets/💼️ Job.png'
import education from '../../assets/🔬️ Education.png'
import meetup from '../../assets/🗓️ Meetup.png'

const Post = () => {
  return (
    <div className=' d-flex col-lg-8 mx-auto' style={{gap:'5rem'}}>
<div className="d-flex posts-left w-100 h-50 flex-column align-items-center" >
  <Card banner={im1} im1={article} heading="Tax benefit for Investment under national pension Scheme launched by Government" para="I've worked in UX for the better part of decade. From now on, I plan to rei.." prf={prf1} name="Sarthak Kamra"/>
  <Card  banner={im2} im1={education} heading="Tax benefit for Investment under national pension Scheme launched by Government" para="I've worked in UX for the better part of decade. From now on, I plan to rei.." prf={prf2} name="Sarah West"/>
  <Card3  banner={im3} im1={job} heading="Tax benefit for Investment under national pension Scheme launched by Government" prf={prf3} name="Ronal Jones"/>
  <Card4   im1={meetup} heading="Tax benefit for Investment under national pension Scheme launched by Government" prf={prf4} name="Ronal Jones" />

</div>
<div className="d-flex posts-right">

  <input className='location' value="Noida, India"></input>

  <p className='loca' style={{color:'gray',fontSize:'0.6rem'}}>  Your location will help us serve better and extend a personalised experience.</p>
</div>
    </div>
  )
}

export default Post
