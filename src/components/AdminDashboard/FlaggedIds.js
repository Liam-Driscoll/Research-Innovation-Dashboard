import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  TableContainer,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Paper,
  Alert,
} from "@mui/material";

const StyledTableCell = styled(TableCell)`
  color: #002145;
  font-weight: 500;
`;

const FlaggedIds = () => {
  const mockData = [
    [
      {
        name: "Robert Carruthers",
        scopus_id: 12345,
        employee_id: 123840,
        faculty: "Faculty of Medicine",
        department: "Anesthesiology",
      },
      {
        name: "Robert Carruthers",
        scopus_id: 12345,
        employee_id: 203942,
        faculty: "Faculty of Medicine",
        department: "Family Medicine",
      },
      {
        name: "Robert Carruthers",
        scopus_id: 12345,
        employee_id: 234233,
        faculty: "Faculty of Medicine",
        department: "Neuroscience",
      },
    ],
    [
      {
        name: "Test test",
        scopus_id: 34234,
        employee_id: 990983,
        faculty: "Faculty of Arts",
        department: "Anthropology",
      },
      {
        name: "Test test",
        scopus_id: 34234,
        employee_id: 273894,
        faculty: "Faculty of Arts",
        department: "Sociology",
      },
      {
        name: "Test test",
        scopus_id: 34234,
        employee_id: 283747,
        faculty: "Faculty of Arts",
        department: "Philosophy",
      },
    ],
  ];

  const renderIdTables = () => {
    return mockData.map((data, index) => {
      return (
        <TableContainer component={Paper} key={index}>
          <Table aria-label="update publications log table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Researcher Name</StyledTableCell>
                <StyledTableCell>Scopus ID</StyledTableCell>
                <StyledTableCell>Employee ID</StyledTableCell>
                <StyledTableCell>Faculty</StyledTableCell>
                <StyledTableCell>Department</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((researcher, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Box
                      sx={{
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        width: "150px",
                        overflow: "hidden",
                      }}
                    >
                      {researcher.name}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        width: "50px",
                        overflow: "hidden",
                      }}
                    >
                      {researcher.scopus_id}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        width: "50px",
                        overflow: "hidden",
                      }}
                    >
                      {researcher.employee_id}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        width: "150px",
                        overflow: "hidden",
                      }}
                    >
                      {researcher.faculty}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        width: "150px",
                        overflow: "hidden",
                      }}
                    >
                      {researcher.department}
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
    });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "2em" }}>
      <Alert severity="info">
        There are <strong>{mockData.length}</strong> researchers with flagged
        IDs
      </Alert>
      {renderIdTables()}
    </Box>
  );
};

export default FlaggedIds;
