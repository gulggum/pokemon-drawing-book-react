import styled from "styled-components";
import { FaQuestion } from "react-icons/fa";
import { useParams } from "react-router-dom";
import {
  useEffect,
  type JSXElementConstructor,
  type ReactElement,
  type ReactNode,
  type ReactPortal,
} from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, type RootState } from "../store/store";
import {
  clearDetail,
  fetchPokemonDetail,
  type PokemonDetailState,
} from "../store/detailSlice";

const CardDetail = () => {
  const { name } = useParams();
  const dispatch = useAppDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.detail as PokemonDetailState
  );
  const imageType = useSelector(
    (state: RootState) => state.imageType.selectedType
  );
  if (!name) {
    return (
      <>
        <Box>
          <StyledQuestion />
        </Box>
      </>
    );
  }
  useEffect(() => {
    if (name) dispatch(fetchPokemonDetail(name));

    return () => {
      dispatch(clearDetail());
    };
  }, [name, dispatch]);
  if (loading) return <h2>포켓몬을 불러오는 중입니다..</h2>;
  if (!data)
    return (
      <Box>
        <StyledQuestion />
      </Box>
    );
  if (error) return <h1>{error}</h1>;
  return (
    <>
      <Box>
        <Img src={data?.sprites[imageType]} alt={data?.koreanName}></Img>
        <InfoBox>
          <h2>기본정보</h2>
          <Info>
            <Li>
              <Span>번호</Span>
              <Span>{data?.id}</Span>
            </Li>
            <Li>
              <Span>이름</Span>
              <Span>{data?.koreanName}</Span>
            </Li>{" "}
            <Li>
              <Span>타입</Span>
              <Span>
                <span>{data?.type.join(" ,")}</span>
              </Span>
            </Li>
            <Li>
              <Span>키</Span>
              {data && <Span>{data.height / 10}m</Span>}
            </Li>
            <Li>
              <Span>몸무게</Span>
              {data && <Span>{data.weight / 10}kg</Span>}
            </Li>
          </Info>
          <h2>능력치</h2>
          <AbilityValue>
            {data?.statInfo.map(
              (stat: {
                name:
                  | string
                  | number
                  | bigint
                  | boolean
                  | ReactElement<unknown, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | Promise<
                      | string
                      | number
                      | bigint
                      | boolean
                      | ReactPortal
                      | ReactElement<
                          unknown,
                          string | JSXElementConstructor<any>
                        >
                      | Iterable<ReactNode>
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
                value:
                  | string
                  | number
                  | bigint
                  | boolean
                  | ReactElement<unknown, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | Promise<
                      | string
                      | number
                      | bigint
                      | boolean
                      | ReactPortal
                      | ReactElement<
                          unknown,
                          string | JSXElementConstructor<any>
                        >
                      | Iterable<ReactNode>
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }) => (
                <Li>
                  <Span>{stat.name}</Span>
                  <Span>{stat.value}</Span>
                </Li>
              )
            )}
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
  /* border: 1px solid gainsboro; */
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.border};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  margin-top: 100px;
`;

const Img = styled.img`
  width: 50%;
  margin: 0 auto;
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
  border-bottom: 1px solid ${(props) => props.theme.underLine};
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
const StyledQuestion = styled(FaQuestion)`
  width: 100%;
  height: 100%;
  color: #f1cf46;
`;

export default CardDetail;
