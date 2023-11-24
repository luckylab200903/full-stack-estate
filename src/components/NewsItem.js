import React from 'react';

const NewsItem = (props) => {
  const { title, description, content, imageURL, url ,publishedAt,author, source} = props;

  return (
    <div className='p-4'>
      <div className="card" style={{ width: "18rem" }}>
      <label className='bg-info text-dark' >{source}</label>
        <img src={imageURL?imageURL:"https:cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg&w=872&h=578&q=75&c=1"} className="card-img-top" alt="main" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} target="_blank" className="btn btn-primary">View Source</a>
          <p className='p-2 font-weight-bold'>Published At:{publishedAt} :IST</p>
          <p className='p-2 font-weight-bold'>Published My:{author}</p>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
