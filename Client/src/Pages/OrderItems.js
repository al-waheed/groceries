import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import { getUserOrders } from "../Actions/OrderAction";
import { Loading, Error } from "../Pages/AlertComponent";

export default function OrderItems() {
  const dispatch = useDispatch();
  const orderstate = useSelector((state) => state.getUserOrdersReducers);
  const { loading, error, orders } = orderstate;

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
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

  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);

  return (
    <>
      <div>
        {loading && <Loading />}
        {error && (
          <Error error={<Alert severity="error">Something went wrong</Alert>} />
        )}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell> GROCERY PURCHASED </StyledTableCell>
                <StyledTableCell align="right">
                  CUSTOMER ADDRESS
                </StyledTableCell>
                <StyledTableCell align="right">
                  CUSTOMER ORDER INFO
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders &&
                orders.map((order) => (
                  <StyledTableRow key={order.userid}>
                    <StyledTableCell component="th" scope="row">
                      {order.orderItems.map((item, id) => {
                        return (
                          <div key={id}>
                            <h3>
                              {item.name}[{item.varients}] * {item.quantity} ={" "}
                              {item.price.toFixed(2)}
                            </h3>
                          </div>
                        );
                      })}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <h3> {order.shippingAddress.street} </h3>
                      <h3>{order.shippingAddress.city}</h3>
                      <h3>{order.shippingAddress.country}</h3>
                      <h3>{order.shippingAddress.zipcode}</h3>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <h3>{order.orderAmount}</h3>
                      <h3>{order.createdAt.substring(0, 10)}</h3>
                      <h3>{order.transactionId}</h3>
                      <h3>{order._id}</h3>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
