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
    border: "2px solid white",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    backgroundColor: "#dbdbdb",
    border: "2px solid white",
  },
}));

const StyledTableRow = styles(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
  },
}));

function createData(field, job) {
  return { field, job };
}

const rows = [
  createData("중졸", "캐스팅디렉터, 스포츠해설가, 신약개발연구원. 환경영향평가원"),
  createData("고졸", "캐스팅디렉터, 스포츠해설가, 신약개발연구원. 환경영향평가원"),
  createData("대졸", "캐스팅디렉터, 스포츠해설가, 신약개발연구원. 환경영향평가원"),
  createData("대학원졸", "캐스팅디렉터, 스포츠해설가, 신약개발연구원. 환경영향평가원"),
];

export default function CustomTable() {
  return (
    <CustomTableDiv>
        <TableContainer component={Paper} sx={{ margin: 3 }}>
        <Table sx={{ minWidth: 700, height: 500 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell align="center">학력</StyledTableCell>
                <StyledTableCell align="center">직업</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row" align="center" 
                    sx={{ width: 150, fontWeight: "bold" }}
                  >
                    {row.field}
                  </StyledTableCell>
                <StyledTableCell align="center">{row.job}</StyledTableCell>
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
  width: 900px;

  margin: 10px auto;

  & .css-1eorqe0-MuiTableCell-root { // 값이 들어가는 셀 부분 스타일링
    padding: 30px;
  }
`;