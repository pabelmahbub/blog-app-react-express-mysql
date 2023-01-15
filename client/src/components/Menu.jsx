import React from 'react'

function Menu() {
    const posts=[
        {
          "id": 1,
          "title": "Repair Engine",
          "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
          "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeUeZQS6V7xRUTn6EuH90qR41FMgBycCF5vA&usqp=CAU"
        },
        {
          "id": 2,
          "title": "Repair Engine",
          "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
          "img": "https://i.ibb.co/MG1NNZY/sten-rademaker-UZUzv-JEv-Kn-I-unsplash.jpg"
        },
        {
          "id": 3,
          "title": "Repair Engine",
          "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
          "img": "https://i.ibb.co/k5yG0vp/nina-mercado-Y-t0n-T4-H5-M-unsplash.jpg"
        },
        {
          "id": 4,
          "title": "Repair Engine",
          "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
          "img": "https://i.ibb.co/qmk5VFk/aaron-huber-Kxe-Fu-Xta4-SE-unsplash.jpg"
        },
        {
          "id": 5,
          "title": "Repair Engine",
          "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
          "img": "https://i.ibb.co/qmk5VFk/aaron-huber-Kxe-Fu-Xta4-SE-unsplash.jpg"
        },
        {
          "id": 6,
          "title": "Repair Engine",
          "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
          "img": "https://i.ibb.co/k5yG0vp/nina-mercado-Y-t0n-T4-H5-M-unsplash.jpg"
        },
        {
          "id": 7,
          "title": "Repair Engine",
          "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
          "img": "https://i.ibb.co/qmk5VFk/aaron-huber-Kxe-Fu-Xta4-SE-unsplash.jpg"
        }
      ]
  return (
    <div className='menu'>
      <h1>Other Posts you may like</h1>
      {
        posts.map(post=>(
            <div className="post" key={post.id}>
              <img src={post.img} alt="" />
              <h2>{post.title}</h2>
              <button>Read More</button>
            </div>
        ))
      }
    </div>
  )
}

export default Menu