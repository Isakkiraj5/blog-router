import React from 'react';

function CardList({ data }) {
  return (
    <div className='row mx-0'>
      {data.map((item, index) => (
        <div className='col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12 my-2' key={index}>
         <div className="card">
            <img className="img-fluid" src={item.img} alt="" />
            <h6 className='mt-2'>{item.content}</h6>
            <h6 className='mt-2'>{item.title}</h6>
            <p>{item.description}</p>
           
        </div>
        </div>
      ))}
    </div>
  );
}

export default CardList;
