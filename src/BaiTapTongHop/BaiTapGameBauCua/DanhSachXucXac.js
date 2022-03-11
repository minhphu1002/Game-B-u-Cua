import React from "react";
import XucXac from "./XucXac";

import { useSelector, useDispatch } from "react-redux";
import { playGameAction } from "../../redux/actions/BauCuaActions";

export default function DanhSachXucXac(props) {
  const mangXucXac = useSelector(
    (state) => state.BaiTapGameBauCuaReducer.mangXucXac
  );

  const dispatch = useDispatch();
  return (
    <div className="mt-5 ml-5">
      <div
        className="bg-white"
        style={{ width: 300, height: 300, borderRadius: 150, paddingLeft: 10 }}
      >
        <div className="row">
          <div className="col-12 text-center" style={{ marginLeft: 75 }}>
            <XucXac xucXacItem={mangXucXac[0]} />
          </div>
        </div>
        <div className="row" style={{ marginTop: -20, marginLeft: 10 }}>
          <div className="col-4 text-right">
            <XucXac xucXacItem={mangXucXac[1]} />
          </div>
          <div className="col-4 text-right">
            <XucXac xucXacItem={mangXucXac[2]} />
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "20%", marginTop: "5%" }}>
        <button
          onClick={() => {
            dispatch(playGameAction());
          }}
          className="btn btn-success p2"
          style={{ fontSize: "25px" }}
        >
          Xốc
        </button>
      </div>
    </div>
  );
}
