import React from "react";

const Book = ({ book }) => {
  const { bookId, tags, image, bookName, author, review, totalPages, rating, category, publisher, yearOfPublishing } = book;
  return (
    <div className="card bg-base-100 w-96 shadow-xl p-6">
      <figure className="bg-gray-200 py-8 rounded-2xl">
        <img src={image} className="h-[166px]" alt={bookName} />
      </figure>
      <div className="card-body">
        <div className="flex justify-center gap-4">
          {tags.map((tag) => (
            <button className="btn btn-xs text-[#23BE0A] bg-green-50">{tag}</button>
          ))}
        </div>
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>By: {author}</p>
        <div className="border-t-2 border-dashed"></div>
        <div className="card-actions justify-between">
          <div className=" ">{category}</div>
          <div className=""><div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-100" />
</div></div>
        </div>
      </div>
    </div>
  );
};

export default Book;
