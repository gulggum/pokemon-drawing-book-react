import styled from "styled-components";

const ImageURL =
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA0MThfMzMg%2FMDAxNzQ0OTYxMjM2ODUx.StsN_-mvQCVUF9VmSA5dDFofjeXCaOHCaHZste6yz34g.6u59Ge8HARM0ki3ADgPOYgfVgvWedtmmC5q2mmYZtXkg.PNG%2F%25C6%25F7%25BD%25C7%25C7%25CE.PNG&type=sc960_832";

const CardDetail = () => {
  return (
    <>
      <Box>
        <Img src={ImageURL} alt="img"></Img>

        <InfoBox>
          <h2>기본정보</h2>
          <Info>
            <Li>
              <Span>번호</Span>
              <Span>001</Span>
            </Li>
            <Li>
              <Span>이름</Span>
              <Span>하츄핑</Span>
            </Li>
          </Info>
          <h2>능력치</h2>
          <Info>
            <Li>
              <Span>Hp</Span>
              <Span>100</Span>
            </Li>
            <Li>
              <Span>Attack</Span>
              <Span>80</Span>
            </Li>
          </Info>

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
  padding: 2rem 0 1rem 0;
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
`;

const Info = styled.ul`
  margin-bottom: 2rem;
  padding: 0;
`;

const Li = styled.li`
  margin-left: 1rem;
  padding-bottom: 8px;
  padding-top: 10px;

  border-bottom: 1px solid gainsboro;
`;
const Span = styled.span`
  padding-right: 1rem;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Company = styled.span`
  background-color: #e7e774;
  padding: 3px 10px;
  border-radius: 25px;
  font-size: 0.8rem;
`;
export default CardDetail;
