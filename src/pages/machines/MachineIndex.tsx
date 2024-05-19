import {
  Icon,
  IconButton,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow
} from "@mui/material";
import React from "react";
import { PageMain } from "../../shared/components/page-main/PageMain";

export const MachineIndex: React.FC = () => {

  return (
    <PageMain>
      <TableContainer
        component={Paper}
        variant="outlined"
        sx={{ m: 1, width: "auto" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell width={100}>Ações</TableCell>
              <TableCell>Nº</TableCell>
              <TableCell>Nome Completo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            <TableRow>
              <TableCell size="small">
                <IconButton size="small">
                  <Icon>edit</Icon>
                </IconButton>
                <IconButton size="small">
                  <Icon>delete</Icon>
                </IconButton>
              </TableCell>
              <TableCell> ID </TableCell>
              <TableCell> NOME</TableCell>
            </TableRow>

          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}>
                <Pagination
                  page={1}
                  count={10}
                />
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </PageMain>
  );
};
