import * as React from "react";
import { styled } from "@mui/material/styles";
import { AiTwotoneDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import {
  Tooltip,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent, getstudentById, listStudent } from "../Redux/action";
import SuccessMsg from "../Modal/SuccessMsg";
import EditStudent from "../Student/EditStudent";
const StyledTableContainer = styled(TableContainer)`
  height: 67vh;

  .action {
    cursor: pointer;
    font-size: 1rem;

    span {
      margin-right: 0.5rem;
    }
  }
  .delete {
    color: red;
  }
  .edit {
    color: green;
  }
`;
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#fff",
    color: "blue",
    fontWeight: 600,
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Tables = ({ tableHead, rows }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.studentReducer);

  const handleDelete = (id) => {
    var confirmMsg = window.confirm("Are you sure you want to delete?");
    if (confirmMsg === true) {
      dispatch(deleteStudent(id));
      dispatch(listStudent());
    }
  };
  const handleEdit = (id) => {
    dispatch(getstudentById(id));
    setOpen(true);
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <StyledTableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Sid</StyledTableCell>
              {tableHead.map((item, index) => {
                return (
                  <StyledTableCell align="right" key={index}>
                    {item.title}
                  </StyledTableCell>
                );
              })}

              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    hover="true"
                    role="checkbox"
                    tabIndex={-1}
                    key={row.code}
                  >
                    {row.sid}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.firstName} {row.middleName}  {row.lastName}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.dob}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.joiningDate}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.faculty}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.semester}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.contact}</StyledTableCell>
                  <StyledTableCell align="right">{row.gender}</StyledTableCell>
                  <StyledTableCell align="right">{row.email}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.fatherName}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.address}</StyledTableCell>
                  <StyledTableCell align="right">
                    <div className="action">
                      <Tooltip title="Delete">
                        <span>
                          <AiTwotoneDelete
                            className="delete"
                            onClick={() => {
                              handleDelete(row.id);
                            }}
                          />
                        </span>
                      </Tooltip>

                      <Tooltip title="Edit">
                        <span>
                          <FiEdit
                            className="edit"
                            onClick={() => {
                              handleEdit(row.id);
                            }}
                          />
                        </span>
                      </Tooltip>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
      <TablePagination
        rowsPerPageOptions={[6, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <EditStudent
        open={open}
        handleClose={() => {
          setOpen(false);
        }}
      />
      {loading ? <SuccessMsg /> : ""}
    </div>
  );
};

export default Tables;
