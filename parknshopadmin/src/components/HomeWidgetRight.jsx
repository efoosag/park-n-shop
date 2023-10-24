import React from 'react'
import styled from "styled-components"

const Wrapper = styled.div`
  flex: 2;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 6px 7px 24px -10px rgba(0,0,0,0.75);
  -webkit-box-shadow: 6px 7px 24px -10px rgba(0,0,0,0.75);
  -moz-box-shadow: 6px 7px 24px -10px rgba(0,0,0,0.75);  
`
const WidgetTableTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
`
const WidgetTable = styled.table`
  width: 100%;  
  border-spacing: 20px;
`
const WidgetThead = styled.thead``
const WidgetTbody = styled.tbody``
const WidgetTr = styled.tr``
const WidgetTh = styled.th`
  text-align: left;
`
const WidgetTd = styled.td``
const WidgetUserDetails = styled.div`
  display: flex;
  align-items: center;
`
const WidgetUser= styled.span`
  font-weight: 600;
`

const WidgetImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`
const WidgetButton = styled.button`
  width: 80px;
  padding: 8px 5px;
  border: none;
  border-radius: 10px;
  color: ${props => {if (props.type === "Approved"){return "green"} else if(props.type === "Pending") {return "blue"} else {return "red"}}};
  background-color: ${props => {if (props.type === "Approved"){return "lightgreen"} else if(props.type === "Pending") {return "lightblue"} else {return "lightpink"}}};
`

const HomeWidgetRight = () => {
   return (
    <Wrapper>
      <WidgetTableTitle>Customer's Latest Transactions</WidgetTableTitle>
      <WidgetTable>
        <WidgetThead>
          <WidgetTr>
            <WidgetTh>Customer</WidgetTh>
            <WidgetTh>Date</WidgetTh>
            <WidgetTh>Amount</WidgetTh>
            <WidgetTh>Status</WidgetTh>
          </WidgetTr>
        </WidgetThead>
        <WidgetTbody>
          <WidgetTr>
            <WidgetTd>
              <WidgetUserDetails>
                <WidgetImage src='../../access/images/profile_pic.jpeg'/>
                <WidgetUser>Victor</WidgetUser>
              </WidgetUserDetails>
            </WidgetTd>
            <WidgetTd>2 Jan 2030</WidgetTd>
            <WidgetTd>$12,000.00</WidgetTd>
            <WidgetTd>
              <WidgetButton type="Approved">Approved</WidgetButton>
            </WidgetTd>
          </WidgetTr>
          <WidgetTr>
            <WidgetTd>
              <WidgetUserDetails>
                <WidgetImage src='../../access/images/profile_pic.jpeg'/>
                <WidgetUser>Victor</WidgetUser>
              </WidgetUserDetails>
            </WidgetTd>
            <WidgetTd>2 Jan 2030</WidgetTd>
            <WidgetTd>$12,000.00</WidgetTd>
            <WidgetTd>
              <WidgetButton type="Declined">Declined</WidgetButton>
            </WidgetTd>
          </WidgetTr>
          <WidgetTr>
            <WidgetTd>
              <WidgetUserDetails>
                <WidgetImage src='../../access/images/profile_pic.jpeg'/>
                <WidgetUser>Victor</WidgetUser>
              </WidgetUserDetails>
            </WidgetTd>
            <WidgetTd>2 Jan 2030</WidgetTd>
            <WidgetTd>$12,000.00</WidgetTd>
            <WidgetTd>
              <WidgetButton type="Pending">Pending</WidgetButton>
            </WidgetTd>
          </WidgetTr>
          <WidgetTr>
            <WidgetTd>
              <WidgetUserDetails>
                <WidgetImage src='../../access/images/profile_pic.jpeg'/>
                <WidgetUser>Victor</WidgetUser>
              </WidgetUserDetails>
            </WidgetTd>
            <WidgetTd>2 Jan 2030</WidgetTd>
            <WidgetTd>$12,000.00</WidgetTd>
            <WidgetTd>
              <WidgetButton type="Approved">Approved</WidgetButton>
            </WidgetTd>
          </WidgetTr>
          <WidgetTr>
            <WidgetTd>
              <WidgetUserDetails>
                <WidgetImage src='../../access/images/profile_pic.jpeg'/>
                <WidgetUser>Victor</WidgetUser>
              </WidgetUserDetails>
            </WidgetTd>
            <WidgetTd>2 Jan 2030</WidgetTd>
            <WidgetTd>$12,000.00</WidgetTd>
            <WidgetTd>
              <WidgetButton type="Pending">Pending</WidgetButton>
            </WidgetTd>
          </WidgetTr>
        </WidgetTbody>        
      </WidgetTable>
    </Wrapper>
  )
}

export default HomeWidgetRight