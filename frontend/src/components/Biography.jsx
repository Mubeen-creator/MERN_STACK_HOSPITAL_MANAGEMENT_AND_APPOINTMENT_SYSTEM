import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
      <div className="banner">
        <img src={imageUrl} alt="biography" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are?</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, explicabo. Sapiente aperiam veniam eaque quibusdam ut consequuntur, placeat dolore, vitae tempore maxime, perferendis fugit illo! Voluptatibus quibusdam eius optio nam voluptas ea ducimus id eum vel ab odit enim mollitia unde, magni sit. Voluptatem delectus eligendi, minus molestias commodi debitis.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum asperiores saepe at? Aspernatur earum, saepe magni ipsam repudiandae corporis aliquam, commodi enim in quasi expedita, at cum! Voluptatibus voluptate deleniti vitae natus ipsum neque tempora.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quasi dignissimos nulla.</p>
        <p>Lorem, ipsum dolor.</p>
      </div>
    </div>
  )
}

export default Biography