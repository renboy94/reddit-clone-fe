import styled from "styled-components";
import { Vote } from "./Vote";
import { Message, Forward } from "@styled-icons/entypo";

const CardLayout = styled.div`
  display: flex;
  min-height: 90px;
  width: 100%;
  background-color: ${(p) => p.theme.primaryColor};
  cursor: pointer;
  color: ${(p) => p.theme.bodyFontColor};
`;

const TitleAndOp = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  /* font-weight: bold; */
  font-weight: 600;
  font-size: 17px;
  color: ${(p) => p.theme.bodyFontColor};
`;

const PostedBy = styled.span`
  font-size: 12px;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
  flex: 1;
`;

const Desc = styled.span`
  margin: 5px 0;
  font-size: 14px;
`;

const CommentsAndShare = styled.div`
  display: flex;
  width: 100%;

  & > * {
    margin-right: 10px;
  }
`;

const HoverBg = styled.span`
  border-radius: 2px;
  cursor: pointer;

  & > span {
    font-size: 12px;
  }

  &:hover {
    background-color: #d1d1d1;
  }
`;

const CommentIcon = styled(Message)`
  height: 20px;
  width: 20px;
  margin-right: 5px;
`;

const ShareIcon = styled(Forward)`
  height: 20px;
  width: 20px;
  margin-right: 5px;
`;

const Card = () => {
  return (
    <CardLayout>
      <Vote />
      <CardInfo>
        <TitleAndOp>
          <Title data-testid="card-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            {/* Cupiditate earum eius soluta id excepturi consequatur, voluptates
              illo. Ad voluptates tempore temporibus quas fuga, minus, esse
              laboriosam illo reiciendis amet minima! */}
          </Title>
          <PostedBy>Posted by u/AutoModerator 2 days ago</PostedBy>
        </TitleAndOp>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          exercitationem nemo maiores quisquam blanditiis dicta....
        </Desc>
        <CommentsAndShare>
          <HoverBg>
            <CommentIcon />
            <span>100 Comments</span>
          </HoverBg>
          <HoverBg>
            <ShareIcon />
            <span>Share</span>
          </HoverBg>
        </CommentsAndShare>
      </CardInfo>
    </CardLayout>
  );
};

export default Card;
