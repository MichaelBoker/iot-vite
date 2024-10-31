import httpRequest from "../utils/httpRequest";
import { handleError } from "../utils/toastService";
import { useLoaderData } from "react-router-dom";
import { Device, SearchContainer, PaginationContainer } from "../components";
import Wrapper from "../assets/Wrappers/AllDevices";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  try {
    console.log(params)
    const devicesReq =  httpRequest.get("/devices", {
      params: params,
    });
    
    console.log(request)
    const typesReq = httpRequest.get("/company/types")
  
    const values = await Promise.all([devicesReq, typesReq])
    
    const devicesData = values[0].data
    const typesData = values[1].data

    return {devicesData, searchValues:params, typesData};
  } catch (error) {
    handleError(error);
    return error;
  }
};

const AllDevices = () => {
  const {devicesData, searchValues, typesData} = useLoaderData();
  const { devices, page, totalPages, totalDevices } = devicesData

  if (totalDevices === 0) {
    return (
      <Wrapper>
        <SearchContainer searchValues={searchValues} types={typesData.types}/>
        <div className="empty-list"> List is empty</div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <SearchContainer searchValues={searchValues} types={typesData.types}/>
      <h5>
        {totalDevices} device{totalDevices > 1 && "s"} found
      </h5>
      <div className="devices">
        {devices.map((device) => {
          return <Device key={device._id} {...device} />;
        })}
      </div>
      <PaginationContainer currentPage={page} totalPages={totalPages} />
    </Wrapper>
  );
};
export default AllDevices;
