import { useLocation, useNavigate } from "react-router-dom";
import Wrapper from "../assets/Wrappers/Pagination"
import { BiSolidChevronLeftCircle, BiSolidChevronRightCircle } from "react-icons/bi";

const PaginationContainer = ({ currentPage, totalPages }) => {

    const { search, pathname } = useLocation()
    const navigate = useNavigate()

    const handlePageChange = (pageNumber) => {
        const searchParams = new URLSearchParams(search)
        searchParams.set('page', pageNumber)
        navigate(`${pathname}?${searchParams.toString()}`)
    }
    const pages = Array.from({length: totalPages},(x,index) => index +1)
    
  return (
    <Wrapper>
       <button className={`btn prev-btn ${1 === currentPage && 'disabled'}`} disabled={totalPages === currentPage} onClick={() => handlePageChange(currentPage - 1)}>
        <BiSolidChevronLeftCircle/>
       </button>
       {
        pages.map(pageNum => {
            return <button className={`btn page-btn ${pageNum === currentPage && 'active'}`} key={pageNum} onClick={() => handlePageChange(pageNum)}>{pageNum}</button>
        })
       }
       <button className={`btn next-btn ${totalPages === currentPage && 'disabled'}`} disabled={totalPages === currentPage} onClick={() => handlePageChange(currentPage + 1)}>
        <BiSolidChevronRightCircle/>
       </button>
    </Wrapper>
  )
}
export default PaginationContainer