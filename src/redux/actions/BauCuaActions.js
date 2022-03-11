import { CHOI_LAI, DAT_CUOC, XOC_BAU_CUA } from "../types/BauCuaTypes";

export const datCuocAction = (quanCuoc, trangThai) => ({
  type: DAT_CUOC,
  quanCuoc,
  trangThai,
});

export const playGameAction = () => ({
  type: XOC_BAU_CUA,
});

export const playGameAgainAction = () => ({
  type: CHOI_LAI,
});
