 import React from 'react';
 import styled from 'styled-components'
 import _ from 'lodash'
 function Pagination(props) {
    
    const {itemCount, pageSize, currentPage}= props;
    console.log(currentPage);
    const pageCount=itemCount/pageSize;
    if(pageCount <= 1 ) return null;
    const  pages=_.range(1,pageCount+1)
    return (
        <Container>
            Pagination
               <Content>
                {
                    <ul className="pagination">
                        {pages.map(page=>(
                            <li key={page} className={page===currentPage ? 'page-item active' : 'page-item'}>
                                <a className="page-link" onClick={()=> props.onPageChange(page)}>
                                {page}
                                </a>
                            </li>
                        ))}
                    </ul>
                }
              </Content>
              
        </Container>
    )
}

export default Pagination

const Container=styled.div`
display:grid;
place-items:center;
margin-top:20px;
`
const Content=styled.div`
display:grid;
height:50px;
cursor: pointer;
`