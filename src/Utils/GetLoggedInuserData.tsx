
import { useGetLoggedInUserQuery } from '../Redux/api/api';

const GetLoggedInuserData = () => {
    const{data}=useGetLoggedInUserQuery(undefined,{skip:true})
    return data
};

export default GetLoggedInuserData;