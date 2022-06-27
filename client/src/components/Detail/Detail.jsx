import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../actions";
import { useEffect } from "react";
import { useParams } from "react-router";

export default function Detail(props) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detailDog = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch]);

  return (
    <div>
      {!detailDog.name ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>{detailDog.name}</h1>
        </div>
      )}
    </div>
  );
}
