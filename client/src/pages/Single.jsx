import React from 'react'
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
import edit from '../img/edit.jpeg';

function Single() {
  return (
    <div className='single'>
       <div className="content">
          <img src="https://i.ibb.co/MG1NNZY/sten-rademaker-UZUzv-JEv-Kn-I-unsplash.jpg" alt="" />
          <div className="user">
              <img src="https://i.ibb.co/MG1NNZY/sten-rademaker-UZUzv-JEv-Kn-I-unsplash.jpg" alt="" />
              <div className="info">
                  <span>John</span>
                  <p>posted 3 days ago</p>
              </div>
              <div className="edit">
                <Link to={`/write?edit=2`}><img src={edit} alt=""/></Link>
                <img src={edit} alt=""/>
              </div>
            </div>
        <h1>Lorem Ipsum</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel eleifend dolor, ut gravida quam. Quisque tincidunt erat velit, at lacinia libero porttitor ut. Nunc porttitor ex vitae turpis porttitor pharetra. Vivamus quis eros sed est placerat euismod. Curabitur elementum ipsum urna, ac posuere nulla suscipit non. Etiam lobortis luctus eros, in sagittis tellus porta et. Etiam maximus molestie diam eget aliquam. Phasellus sed elit neque. Sed accumsan eros non felis efficitur, in facilisis eros viverra. Suspendisse potenti. Suspendisse aliquet porta dolor, vulputate sodales neque euismod eu. Praesent porttitor malesuada aliquet.<br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel eleifend dolor, ut gravida quam. Quisque tincidunt erat velit, at lacinia libero porttitor ut. Nunc porttitor ex vitae turpis porttitor pharetra. Vivamus quis eros sed est placerat euismod. Curabitur elementum ipsum urna, ac posuere nulla suscipit non. Etiam lobortis luctus eros, in sagittis tellus porta et. Etiam maximus molestie diam eget aliquam. Phasellus sed elit neque. Sed accumsan eros non felis efficitur, in facilisis eros viverra. Suspendisse potenti. Suspendisse aliquet porta dolor, vulputate sodales neque euismod eu. Praesent porttitor malesuada aliquet.</p>
       </div>
       <Menu />
    </div>
  )
}

export default Single