import { useEffect } from "react";
import {
  useConfirmABookingMutation,
  useDeleteABookingMutation,
  useGetAllBookingForAdminQuery,
} from "../../../../../Redux/api/api";
import Button from "../../../../Ui/Button";
import Swal from "sweetalert2";

const BookingManage = () => {
  const { data, isLoading } = useGetAllBookingForAdminQuery(null);
  console.log(data);

  const [updateStatus, { isLoading: statusUpdateLoading, data: updateData }] =
    useConfirmABookingMutation();

    // status update handle.
  const statusHandle = (id: string, action: string) => {
    console.log(action);
    updateStatus({ id, action });
  };

  const[deleteBooking,{isLoading:deleteLoading,data:dleteData}]=useDeleteABookingMutation()
  // delete a booking.
  const deleteABooking=(id:string)=>{
    Swal.fire({
        title: "Do you want to delete this booking?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "No",
        denyButtonText: `Yes`,
      }).then((result) => {
        if (result.isDenied) {
            deleteBooking(id)
        }
      });
    
  }


  useEffect(() => {
    if (updateData) {
      console.log(updateData);
    }
  }, [updateData]);

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Booking Management</h1>
      </div>
      <div className="overflow-x-auto mt-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr className=" text-base font-normal">
              <th>S/N</th>
              <th className="text-center">Room Name</th>
              <th className="text-center">User Name</th>
              <th className="text-center">Booking Date</th>
              <th className="text-center">Start Time</th>
              <th className="text-center">End Time</th>
              <th className="text-center">Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody className="lg:text-base">
            {!isLoading &&
              data?.data.map((item, idx) => {
                return (
                  <tr
                    key={idx}
                    className={` ${
                      idx % 2 !== 0 ? "bg-[#ffffff]" : "bg-[#f5f0f09c]"
                    }`}
                  >
                    <td className="font-semibold text-center">{idx + 1}</td>

                    <td className="font-semibold text-center">
                      {item.slot.room.name}
                    </td>
                    <td className="font-semibold text-center">
                      {item.user.name}
                    </td>
                    <td className="font-semibold text-center">
                      {item.slot.date}
                    </td>
                    <td className="font-semibold text-center">
                      {item.slot.startTime}
                    </td>
                    <td className="font-semibold text-center">
                      {item.slot.endTime}
                    </td>
                    <td
                      className={`font-bold text-center ${
                        item.status === "Pending"
                          ? "text-[#FFC107]"
                          : item.status === "Confirmed"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {item.status}
                    </td>
                    <td className="font-semibold text-center flex gap-x-1">
                      <Button
                        onClick={() => statusHandle(item._id, "Confirmed")}
                        className="font-medium bg-green-500 rounded-sm px-2 hover:bg-green-600"
                        text="Approve"
                      />
                      <Button
                        onClick={() => statusHandle(item._id, "Unconfirmed")}
                        className="font-medium bg-yellow-500 rounded-sm px-3 hover:bg-yellow-600"
                        text="Reject"
                      />
                      <Button
                      onClick={() => deleteABooking(item._id)}
                        className="font-medium bg-red-500 rounded-sm px-3 hover:bg-red-600"
                        text="Delete"
                      />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {/* {isLoading && <Loading />}
        {data?.data?.length === 0 && (
          <div className="to-center w-full text-lg mt-4">
            No Item Available!
          </div>
        )} */}
      </div>
    </>
  );
};

export default BookingManage;
