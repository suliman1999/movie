import ReactPaginate from 'react-paginate';

function Pag({GetPage , pagecount}) {
    
    const handlePageClick = (data)=>{
        GetPage(data.selected +1)
    }
    
  return (
    <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pagecount}
        previousLabel="< previous"
       
        containerClassName={'pagination justify-content-center p-4'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        nextClassName={'page-item'}
        breakClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
  );
}

export default Pag;