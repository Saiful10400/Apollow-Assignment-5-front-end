import { useParams } from "react-router";
import CenterAlign from "../../Helper/CenterAlign";
import { useGetAroomQuery } from "../../../Redux/api/api";
import Loading from "../../SharedComponent/Loading";
import SingleRoomCarosel from "../../Ui/SingleRoomCarosel/SingleRoomCarosel";
import { Link } from "react-router-dom";
import Button from "../../Ui/Button";

const SingleRoom = () => {

// const pageUrl=useSearchParams()
// console.log(pageUrl[0].get("go"),pageUrl[0].get("payed"))



  const { id } = useParams();

  const { data, isLoading } = useGetAroomQuery({ id });
  const roomData = data?.data;
  console.log(roomData, isLoading);
  return isLoading ? (
    <Loading />
  ) : (
    <CenterAlign>
      <div className="min-h-[80vh]">


<div className="">
  <SingleRoomCarosel images={roomData.roomImages}/>
</div>
<div className="flex gap-5 mt-5">
<div className="w-[70%] "> 
  <h1 className="flex justify-between  items-center"><span className="text-3xl font-semibold">{roomData.name}</span> <span className="text-lg font-normal"><span className="text-3xl font-bold">$ {roomData.pricePerSlot}</span> / per slot</span></h1>
  <div>
  <h1 className="text-lg font-normal mt-3">Room Number: <span className="font-bold">{roomData.roomNo}</span></h1>
  <h1 className="text-lg font-normal mt-3">Floor Number: <span className="font-bold">{roomData.floorNo}</span></h1>
  <h1 className="text-lg font-normal mt-3">Capacity: <span className="font-bold">{roomData.capacity}</span></h1>
  <h1 className="text-lg font-normal mt-3">Amenities: <div className="inline-flex items-center gap-4">{roomData?.amenities?.map((item,idx)=><span key={idx} className="font-bold">{idx+1}.{item}</span>)}</div></h1>
  </div>
</div>
<div className="w-[30%]">
  <Link to={`/meeting-rooms/booking/${id}`}><Button className="text-xl font-normal block w-[70%] mx-auto" text="Book Now"/></Link>
</div>
</div>


      </div>
    </CenterAlign>
  );
};

export default SingleRoom;
