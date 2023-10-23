import styled from "styled-components"
import Feature from "../components/Feature"
import Chart from "../components/Chart"
import { userData } from "../../src/data"
import HomeWidget from "../components/HomeWidget"


const HomeContainer = styled.div``

const Wrapper = styled.div``

const Home = () => {
  return (
    <HomeContainer>
      <Wrapper>
        <Feature />
        <Chart data={userData} title="Users Analytics" grid datakey="Active User"/>
        <HomeWidget />
      </Wrapper>
    </HomeContainer>
  )
}

export default Home