import { useLoaderData } from "react-router-dom";
import httpRequest from "../utils/httpRequest";
import { handleError } from "../utils/toastService";
import Wrapper from "../assets/Wrappers/DeviceInfo";
import { FaCircle } from "react-icons/fa6";
import Message from "../components/Message";

export const loader = async ({ params }) => {
  try {
    const { data } = await httpRequest.get(`/devices/${params.id}`);
    return data;
  } catch (error) {
    handleError(error);
    return error;
  }
};

const MessageList = ({messages}) => {
  if (messages.length === 0) {
    return <div className="empty-list"> No messages </div>;
  }

  return messages.map((message) => {
    return <Message key={message._id} {...message} />;
  });
};

const Device = () => {
  const { device } = useLoaderData();
  const { owner, sensor } = device;
  console.log(sensor);
  delete owner._id;
  delete owner.__v;

  return (
    <Wrapper>
      <aside className="owner">
        <h4>owner details</h4>
        <div className="owner-info">
          {Object.entries(owner).map((param, index) => {
            return (
              <p key={index}>
                <span> {param[0]} :</span> {param[1]}{" "}
              </p>
            );
          })}
        </div>
      </aside>
      <section id="device-details">
        <h3>{device.device_name}</h3>
        <div
          className={device.isConnected ? "status online" : "status offline"}
        >
          <FaCircle />
        </div>
        <div className="info">
          <strong className="code">{device.code}</strong>
          <div id="description">
            <p>{device.description}</p>
          </div>
        </div>
      </section>

      <section className="sensor">
        <MessageList messages={sensor.messages} />
      </section>
    </Wrapper>
  );
};
export default Device;
