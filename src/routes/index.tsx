
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
        icon: "home",
        path: "/home",
        label: "Página Inicial",
      },
      {
        icon: "people",
        path: "/machines",
        label: "Máquinas",
      },
    ]);

    console.log("Carregou Rotas");
  }, []);

  return (
    <Routes>
       <Route path="/home" element={<DashboardIndex />} />

       <Route path="/machines" element={<MachineIndex />} />

       <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
