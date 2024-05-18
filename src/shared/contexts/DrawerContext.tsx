import { Box } from "@mui/material";
import {
  createContext,
  useCallback,
  useContext,
  useState
} from "react";

interface IDrawerOption {
  icon: string;
  path: string;
  label: string;
}

interface IDrawerContextData {
  drawerWidth :number;
  isDrawerOpen: boolean;
  drawerOptions: IDrawerOption[];
  toggleDrawerOpen: () => void;
  setDrawerOption: (newDrawerOptions: IDrawerOption[]) => void;
}

interface IDrawerProviderProps {
  children: React.ReactNode;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

export const DrawerProvider: React.FC<IDrawerProviderProps> = ({
  children
}) => {
  const drawerWidth :number = 240;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([]);

  //Armazena funções dentro dele que disparam pela array de dependência
  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldDrawerOpen) => !oldDrawerOpen);
  }, []);

  const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOption[]) => {
    setDrawerOptions(newDrawerOptions);
  }, []);

  return (
    <DrawerContext.Provider
      value={{
        drawerWidth,
        isDrawerOpen,
        drawerOptions,
        toggleDrawerOpen,
        setDrawerOption: handleSetDrawerOptions
      }}
    >
      <Box sx={{ display: "flex" }}>
        {children}
      </Box>
    </DrawerContext.Provider>
  );
};
