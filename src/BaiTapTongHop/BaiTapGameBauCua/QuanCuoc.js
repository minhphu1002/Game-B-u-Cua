import React from "react";

import { useDispatch } from "react-redux";
import { datCuocAction } from "../../redux/actions/BauCuaActions";

export default function QuanCuoc(props) {
  const { quanCuoc } = props;
  const dispatch = useDispatch();

  return (
    <div className="mt-3 ">
      <img alt="" src={quanCuoc.hinhAnh} style={{ width: 250 }} />

      <div
        className="bg-success mt-2 pb-2 text-center"
        style={{ borderRadius: "10px", width: 250 }}
      >
        <button
          onClick={() => {
            dispatch(datCuocAction(quanCuoc, true));
          }}
          className="btn btn-danger mr-3"
        >
          <i className="fa fa-plus"></i>
        </button>
        <span className="mt-2" style={{ color: "yellow", fontSize: 25 }}>
          {quanCuoc.diemCuoc}
        </span>
        <button
          onClick={() => {
            dispatch(datCuocAction(quanCuoc, false));
          }}
          className="btn btn-danger ml-3"
        >
          -
        </button>
      </div>
    </div>
  );
}
