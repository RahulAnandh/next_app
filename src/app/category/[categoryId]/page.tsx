import React from "react";

const CategoryId = ({ params }: { params: { categoryId: string } }) => {
  return <div>{params.categoryId}</div>;
};

export default CategoryId;
