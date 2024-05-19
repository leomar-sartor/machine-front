import { Navigate, Route, Routes } from "react-router-dom";

import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import {
  DashboardIndex, MachineIndex
} from "../pages";

export const AppRoutes = () => {
  const { setDrawerOption } = useDrawerContext();

  useEffect(() => {
    setDrawerOption([
      {
        icon: "dashboard",
        path: "/home",
        label: "Painel",
      },
      {
        icon: "agriculture",
        path: "/machines",
        label: "Máquinas",
      },
    ]);
  }, []);

  return (
    <Routes>
       <Route path="/home" element={<DashboardIndex />} />

       <Route path="/machines" element={<MachineIndex />} />

       <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
