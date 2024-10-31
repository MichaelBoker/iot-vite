import { Form, useLocation, useNavigate, useSubmit } from "react-router-dom";
import FormRow from "./FormRow";
import Wrapper from "../assets/Wrappers/DashboardForm";
import { FaX } from "react-icons/fa6";

const SearchContainer = ({ searchValues, types }) => {

  const submit = useSubmit();
  const { search, pathname } = useLocation()
  const navigate = useNavigate()

  const debounce = (onChangeFunc) => {
    let timeout;
    return (e) => {
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChangeFunc(form);
      }, 500);
    };
  };
  
  const handleRemoveSearch = (searchedVal) => {
    const searchedParam = new URLSearchParams(search)
    searchedParam.delete(searchedVal)
    navigate(`${pathname}?${searchedParam.toString()}`)
  }

  return (
    <Wrapper>
      <Form className="form">
        <section className="form-center">
          <h4 className="form-title">Search device by:</h4>
          <FormRow
            type="search"
            name="search"
            label="Device name"
            defaultVal={searchValues.search}
            onchange={debounce((form) => {
              submit(form);
            })}
          />
          <FormRow
            type="select"
            name="isConnected"
            label="Connection status"
            listValues={[
                {title:"yes",value: "true"},
                {title:"No",value: "false"}
            ]}
            defaultVal={searchValues.isConnected}
            onchange={(e) => submit(e.currentTarget.form)}
          />
          <FormRow
            type="select"
            name="type"
            label="Type"
            listValues={types}
            defaultVal={searchValues.type}
            onchange={(e) => submit(e.currentTarget.form)}
          />
        </section>
      </Form>
      <section id="searchedValues">
        {
          Object.entries(searchValues).map(val => {
            return val[1] !== '' ? <button key={val[0]} className="btn searchVal" onClick={() => handleRemoveSearch(val[0])}><FaX/> {val[0]} : {val[1]} </button> : ''
          })
        }
      </section>
    </Wrapper>
  );
};
export default SearchContainer;
