import React from "react";
import QuanCuoc from "./QuanCuoc";
import { useSelector } from "react-redux";

export default function DanhSachCuoc(props) {
  const danhSachCuoc = useSelector(
    (state) => state.BaiTapGameBauCuaReducer.danhSachCuoc
  );

  const renderDanhSachCuoc = () => {
    return danhSachCuoc.map((quanCuoc, index) => {
      return (
        <div key={index} className="col-4">
          <QuanCuoc quanCuoc={quanCuoc} />
        </div>
      );
    });
  };

  return <div className="row mt-5 ml-5">{renderDanhSachCuoc()}</div>;
}
