import styled from 'styled-components';

export const ReviewersList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Reviewer = styled.li``;

export const ReviewHead = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: #e44848;
  background-color: #f2f4f7;
`;

export const NameRatingWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  p {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.33;
    color: #101828;
  }
`;

export const Comment = styled.p`
  font-size: 16px;
  text-align: justify;
  color: #475467;
`;

export const StarsList = styled.ul`
  display: flex;
  align-items: center;
  gap: 4px;
`;
