import { CHOI_LAI, DAT_CUOC, XOC_BAU_CUA } from "../types/BauCuaTypes";

const initialState = {
  danhSachCuoc: [
    { ma: "ga", hinhAnh: "./img/BaiTapGameBauCua/ga.png", diemCuoc: 0 },
    { ma: "bau", hinhAnh: "./img/BaiTapGameBauCua/bau.png", diemCuoc: 0 },
    { ma: "ca", hinhAnh: "./img/BaiTapGameBauCua/ca.png", diemCuoc: 0 },
    { ma: "nai", hinhAnh: "./img/BaiTapGameBauCua/nai.png", diemCuoc: 0 },
    { ma: "cua", hinhAnh: "./img/BaiTapGameBauCua/cua.png", diemCuoc: 0 },
    { ma: "tom", hinhAnh: "./img/BaiTapGameBauCua/tom.png", diemCuoc: 0 },
  ],

  mangXucXac: [
    { ma: "nai", hinhAnh: "./img/BaiTapGameBauCua/nai.png" },
    { ma: "cua", hinhAnh: "./img/BaiTapGameBauCua/cua.png" },
    { ma: "tom", hinhAnh: "./img/BaiTapGameBauCua/tom.png" },
  ],

  tongDiem: 1000,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DAT_CUOC: {
      let danhSachCuocUpdate = [...state.danhSachCuoc];
      let index = danhSachCuocUpdate.findIndex(
        (qc) => qc.ma === action.quanCuoc.ma
      );

      if (index !== -1) {
        if (action.trangThai && state.tongDiem > 0) {
          state.tongDiem -= 100;
          danhSachCuocUpdate[index].diemCuoc += 100;
        } else {
          if (!action.trangThai && danhSachCuocUpdate[index].diemCuoc > 0) {
            state.tongDiem += 100;
            danhSachCuocUpdate[index].diemCuoc -= 100;
          }
        }
      }

      state.danhSachCuoc = danhSachCuocUpdate;
      return { ...state };
    }

    case XOC_BAU_CUA: {
      let mangXucXacNgauNhien = [];

      for (let i = 0; i < 3; i++) {
        let soNgauNhien = Math.floor(Math.random() * 6);
        let xucXacNgauNhien = state.danhSachCuoc[soNgauNhien];
        mangXucXacNgauNhien.push(xucXacNgauNhien);
      }

      state.mangXucXac = mangXucXacNgauNhien;

      mangXucXacNgauNhien.forEach((xucxac, index) => {
        let inđexDSCuoc = state.danhSachCuoc.findIndex(
          (qc) => qc.ma === xucxac.ma
        );

        if (index !== -1) {
          state.tongDiem += state.danhSachCuoc[inđexDSCuoc].diemCuoc;
        }
      });

      state.danhSachCuoc.forEach((qc) => {
        let indexMangXX = mangXucXacNgauNhien.findIndex(
          (xx) => xx.ma === qc.ma
        );

        if (indexMangXX !== -1) {
          state.tongDiem += qc.diemCuoc;
        }
      });

      state.danhSachCuoc = state.danhSachCuoc.map((qc) => ({
        ...qc,
        diemCuoc: 0,
      }));

      return { ...state };
    }

    case CHOI_LAI: {
      state.tongDiem = 1000;
      state.danhSachCuoc = state.danhSachCuoc.map((qc) => ({
        ...qc,
        diemCuoc: 0,
      }));

      return { ...state };
    }

    default:
      return state;
  }
};
