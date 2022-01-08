import styled from 'styled-components';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Genre, Total, Score, Award, Global, Popularity) {
  return { Genre, Total, Score, Award, Global, Popularity };
}

const rows = [
  createData('Crime', 2.46, 3.47, 2.56, 1.44, 2.38),
  createData('Action', 2.43, 3.45, 2.56, 1.55, 2.18),
  createData('Drama', 2.30, 3.52, 2.73, 1.21, 1.76),
  createData('Comedy', 2.10, 3.47, 2.09, 1.15, 1.67),
  createData('ets', 2.10, 3.50, 1.76, 1.72, 1.40),
];

export default function BasicTable() {
  return (
    <BasicTableDiv>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>장르별 자체 평가 점수</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="right">Score</TableCell>
              <TableCell align="right">Award</TableCell>
              <TableCell align="right">Global</TableCell>
              <TableCell align="right">Popularity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.Genre}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Genre}
                </TableCell>
                <TableCell align="right">{row.Total}</TableCell>
                <TableCell align="right">{row.Score}</TableCell>
                <TableCell align="right">{row.Award}</TableCell>
                <TableCell align="right">{row.Global}</TableCell>
                <TableCell align="right">{row.Popularity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </BasicTableDiv>
  );
}

const BasicTableDiv = styled.div`
  width: 700px;

  padding: 30px;
  margin: 100px auto;

  background-color: darkgray;
`;