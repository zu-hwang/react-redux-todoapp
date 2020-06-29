import { css } from 'styled-components';

// 변수모음
export const style = {
  // 고정색상
  bg: '#eee', // 배경화면
  black: '#333',
  white: '#fff',
  lGray: '#f0f0f0', // 투두 배경색상 : 홀수
  llGray: '#f7f7f7', // 투두 배경생상 : 짝수
  lBorder: '#e8e8e8', // 투두 하단 보다
  mBorder: '#ddd', // 외관, 체크박스 보다
  mGray: '#aaa', // 아이콘 색상
  // 포인트 컬러
  red: 'brown',
  beige: 'beige',
};
//

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const notoSans = css`
  font-family: 'Noto Sans KR', sans-serif;
`;
