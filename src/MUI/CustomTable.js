import { styled as styles } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';

const StyledTableCell = styles(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#ec5990",
    color: theme.palette.common.white,
    fontWeight: "bold",
    border: "3px solid white",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    backgroundColor: "#fdfcf6",
  },
}));

const StyledTableRow = styles(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: "3px solid white",
  },
}));

function createData(name, age, today) {
  return { name, age, today };
}

const rows = [
  createData("코딩소녀", 24, "2022.01.16"),
];

export default function CustomTable() {
  return (
    <CustomTableDiv>
        <TableContainer component={Paper} sx={{ margin: 3 }}>
        <Table sx={{ maxWidth: 700 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell align="center">이름</StyledTableCell>
                <StyledTableCell align="center">성별</StyledTableCell>
                <StyledTableCell align="center">검사 날짜</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row, index) => (
                <StyledTableRow key={index}>
                <StyledTableCell align="center">{row.name}</StyledTableCell>
                <StyledTableCell align="center">{row.age}</StyledTableCell>
                <StyledTableCell align="center">{row.today}</StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </CustomTableDiv>
  );
}

// styled-components
const CustomTableDiv = styled.div`
  width: 700px;

  margin: 100px auto;
`;