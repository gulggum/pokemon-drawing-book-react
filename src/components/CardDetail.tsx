import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { detailApi } from "../api/DataApi";
import { FaQuestion } from "react-icons/fa";

interface DetailProps {
  color: string;
  height: number;
  id: number;
  image: string;
  koreanName: string;
  type: string[];
  weight: number;
  statInfo: Stat[];
}

type Stat = {
  name: string;
  value: number;
};

const CardDetail = () => {
  const { name } = useParams();
  const [detailData, setDetailData] = useState<DetailProps>();

  // const name = undefined;
  if (!name) {
    return (
      <>
        <Box>
          <StyleQuestion />
        </Box>
      </>
    );
  }
  useEffect(() => {
    const getData = async () => {
      const result = await detailApi(name);
      setDetailData(result);
    };
    getData();
  }, [name]);
  console.log(detailData);

  return (
    <>
      <Box>
        <Img src={detailData?.image} alt={detailData?.image}></Img>

        <InfoBox>
          <h2>기본정보</h2>
          <Info>
            <Li>
              <Span>번호</Span>
              <Span>{detailData?.id}</Span>
            </Li>
            <Li>
              <Span>이름</Span>
              <Span>{detailData?.koreanName}</Span>
            </Li>{" "}
            <Li>
              <Span>타입</Span>
              <Span>
                <span>{detailData?.type.join(" ,")}</span>
              </Span>
            </Li>
            <Li>
              <Span>키</Span>
              {detailData && <Span>{detailData.height / 10}m</Span>}
            </Li>
            <Li>
              <Span>몸무게</Span>
              {detailData && <Span>{detailData.weight / 10}kg</Span>}
            </Li>
          </Info>
          <h2>능력치</h2>
          <AbilityValue>
            {detailData?.statInfo.map((stat) => (
              <Li>
                <Span key={detailData.id}>{stat.name}</Span>
                <Span>{stat.value}</Span>
              </Li>
            ))}
          </AbilityValue>

          <Footer>
            <div></div>
            <Company>Pokemon</Company>
          </Footer>
        </InfoBox>
      </Box>
    </>
  );
};
const Box = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding: 1rem 0 1rem 0;
  border: 1px solid gainsboro;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  width: 50%;
  margin: 0 auto;
  border-bottom: 1px solid gainsboro;
`;

const InfoBox = styled.div`
  padding: 0 1rem;
  & Info:first-child {
  }
`;

const Info = styled.ul`
  margin-bottom: 2rem;
  padding: 0;
  & span:first-child {
    display: inline-block;
    width: 100px;
  }
`;
const AbilityValue = styled.ul`
  margin-bottom: 2rem;
  padding: 0;
  & span:first-child {
    display: inline-block;
    width: 140px;
  }
`;

const Li = styled.li`
  margin-left: 1rem;
  padding-bottom: 8px;
  padding-top: 10px;
  border-bottom: 1px solid gainsboro;
`;
const Span = styled.span``;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Company = styled.span`
  border: 1px solid gainsboro;
  padding: 3px 10px;
  border-radius: 25px;
  font-size: 0.8rem;
`;
const StyleQuestion = styled(FaQuestion)`
  font-size: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #eece26;
`;
export default CardDetail;
