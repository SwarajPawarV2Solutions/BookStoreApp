import React from "react";

function Cards({item}) {
  return (
    <>
      <div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src= {item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.title}
              <div className="badge badge-secondary bg-pink-500">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{item.category}</div>
              <div className="badge badge-outline">{item.name}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
