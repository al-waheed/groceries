import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import { getUserOrders } from "../Actions/OrderAction";
import { Loading, Error } from "./AlertComponent";

export default function Tables() {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.getUserOrdersReducers);
  const { loading, error, orders } = orderState;

  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);

  return (
    <div className="my-28 md:mx-5 lg:mx-20">
      {loading && <Loading />}
      {error && (
        <Error error={<Alert severity="error">Something went wrong</Alert>} />
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right font-bold text-base">
            <tr>
              <th className="whitespace-nowrap px-4 py-3 text-left font-medium text-gray-900">
                GROCERY PURCHASED
              </th>
              <th className="whitespace-nowrap px-4 py-3 text-left font-medium text-gray-900">
                CUSTOMER ADDRESS
              </th>
              <th className="whitespace-nowrap px-4 py-3  text-left font-medium text-gray-900">
                CUSTOMER ORDER INFO
              </th>
              <th className="whitespace-nowrap px-4 py-3 text-left font-medium text-gray-900">
                Salary
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders &&
              orders.map((order) => (
                <tr className="odd:bg-gray-50" key={order.userid}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
                    {order.orderItems.map((item, id) => (
                      <div key={id}>
                        <h3>
                          {item.name}[{item.varients}] * {item.quantity} ={" "}
                          ₦{item.price.toFixed(2)}
                        </h3>
                      </div>
                    ))}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    <h3> {order.shippingAddress.street} </h3>
                    <h3>{order.shippingAddress.city}</h3>
                    <h3>{order.shippingAddress.country}</h3>
                    <h3>{order.shippingAddress.zipcode}</h3>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    <h3>₦{order.orderAmount}</h3>
                    <h3>{order.createdAt.substring(0, 10)}</h3>
                    <h3>{order.transactionId}</h3>
                    <h3>{order._id}</h3>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  ₦120,000
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
