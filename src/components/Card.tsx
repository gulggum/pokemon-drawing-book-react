import styled from "styled-components";

const ImageURL =
  "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA0MThfMzMg%2FMDAxNzQ0OTYxMjM2ODUx.StsN_-mvQCVUF9VmSA5dDFofjeXCaOHCaHZste6yz34g.6u59Ge8HARM0ki3ADgPOYgfVgvWedtmmC5q2mmYZtXkg.PNG%2F%25C6%25F7%25BD%25C7%25C7%25CE.PNG&type=sc960_832";

const Card = () => {
  return (
    <>
      <Box>
        <Top>
          <Name>이상해씨</Name>
          <Number>120</Number>
        </Top>
        <Body>
          <Img src={ImageURL} alt="" />
        </Body>
        <Bottom>
          <div></div>
          <Company>company</Company>
        </Bottom>
      </Box>
    </>
  );
};

const Box = styled.div`
  width: 200px;
  height: 240px;
  padding: 1rem;
  border: 1px solid gainsboro;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Name = styled.span`
  background-color: #e7e774;
  padding: 3px 10px;
  border-radius: 25px;
  font-size: 0.8rem;
`;
const Number = styled.span`
  background-color: #e7e774;
  padding: 3px 10px;
  border-radius: 25px;
  font-size: 0.8rem;
`;

const Body = styled.div`
  text-align: center;
`;
const Img = styled.img`
  width: 80%;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Company = styled.span`
  background-color: #e7e774;
  padding: 3px 10px;
  border-radius: 25px;
  font-size: 0.8rem;
`;

export default Card;
