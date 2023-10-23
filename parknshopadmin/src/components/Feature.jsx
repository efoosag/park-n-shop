import { ArrowDownward, ArrowUpward } from "@mui/icons-material"
import styled from "styled-components"

const FeatureContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`
const FeatureItem = styled.div`
  flex: 1;
  margin: 0 20px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 6px 7px 24px -10px rgba(0,0,0,0.75);
  -webkit-box-shadow: 6px 7px 24px -10px rgba(0,0,0,0.75);
  -moz-box-shadow: 6px 7px 24px -10px rgba(0,0,0,0.75);
`
const FeatureTitle = styled.h3`
  margin-bottom: 10px;
`
const FeatureDetails = styled.div`
  display: flex;
  align-items: center;
`
const FeatureMoney = styled.span`
font-size: 30px;
font-weight: 700;
`
const FeatureDirect = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
  color: ${props => props.type === "negative" ? "green" : "red"} ;
`
const FeatureSubDetails = styled.div`
  margin-top: 15px;
  font-size: 13px;
  color: grey;
`


const Feature = () => {
  return (
    <FeatureContainer>
      <FeatureItem>
        <FeatureTitle>Revenue</FeatureTitle>
        <FeatureDetails>
          <FeatureMoney>$3,000.15</FeatureMoney>
          <FeatureDirect>+25.1<ArrowUpward /></FeatureDirect>
        </FeatureDetails>
        <FeatureSubDetails>Compared to Last Month</FeatureSubDetails>
      </FeatureItem>
      <FeatureItem>
        <FeatureTitle>Cost</FeatureTitle>
        <FeatureDetails>
          <FeatureMoney>$1,200.15</FeatureMoney>
          <FeatureDirect type="negative">-5.02<ArrowDownward /></FeatureDirect>
        </FeatureDetails>
        <FeatureSubDetails>Compared to Last Month</FeatureSubDetails>
      </FeatureItem>
      <FeatureItem>
        <FeatureTitle>Sales</FeatureTitle>
        <FeatureDetails>
          <FeatureMoney>$10,000.15</FeatureMoney>
          <FeatureDirect>+10.56<ArrowUpward /></FeatureDirect>
        </FeatureDetails>
        <FeatureSubDetails>Compared to Last Month</FeatureSubDetails>
      </FeatureItem>
    </FeatureContainer>
  )
}

export default Feature