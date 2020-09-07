import React from "react";
import styled, { StyledComponent } from "styled-components";

import { ArrowBoldUp, ArrowBoldDown } from "@styled-icons/entypo";

interface VoteProps {
  readonly vote: string;
}

const VoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35px;
  padding: 10px;
  background-color: ${(p) => p.theme.voteBackgroundColor};
`;

const VoteBtn = styled.button<VoteProps>`
  height: 25px;
  width: 25px;
  border: 1px solid transparent;
  outline: none;
  cursor: pointer;
  border-radius: 2px;
  color: gray;
  background: transparent;

  &:hover {
    background-color: #d1d1d1;
    color: ${(props) =>
      props.vote === "upvote" ? "#46d160" : "#fd471e"} !important;
  }
`;

export const Vote: React.FC = ({}) => {
  const thousand = (votes: number): string => {
    return votes >= 1000 ? "1k" : `${votes}`;
  };

  return (
    <VoteWrapper>
      <VoteBtn vote="upvote">
        <ArrowBoldUp />
      </VoteBtn>
      <span>{thousand(1000)}</span>
      <VoteBtn vote="downvote">
        <ArrowBoldDown />
      </VoteBtn>
    </VoteWrapper>
  );
};
