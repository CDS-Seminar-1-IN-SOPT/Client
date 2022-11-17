import React from 'react';
import styled, { css } from 'styled-components';
import { theme, mixins } from 'styles/theme';

function Navbar({ categories, setPickedCategoryId, pickedCategoryId }) {
  const selectMenu = (e) => {
    if (e.target.innerText === '전체') {
      setPickedCategoryId(0);
    }
    if (e.target.innerText === '콘서트') {
      setPickedCategoryId(1);
    }
    if (e.target.innerText === '뮤지컬') {
      setPickedCategoryId(2);
    }
    if (e.target.innerText === '연극') {
      setPickedCategoryId(3);
    }
    if (e.target.innerText === '클래식') {
      setPickedCategoryId(4);
    }
    if (e.target.innerText === '전시회') {
      setPickedCategoryId(5);
    }
    if (e.target.innerText === '어린이') {
      setPickedCategoryId(6);
    }
  };

  return (
    <Styled.Root>
      <Styled.List>
        {categories.map((item) => (
          <Styled.Item key={item.id} categoryId={item.id} pickedCategoryId={pickedCategoryId} onClick={selectMenu}>
            {item.category}
          </Styled.Item>
        ))}
      </Styled.List>
    </Styled.Root>
  );
}

export default Navbar;

const Styled = {
  Root: styled.div`
    position: absolute;
    width: 34.8rem;
    height: 3.5rem;
    left: 1.9rem;
    top: 9.4rem;
  `,
  List: styled.ul`
    ${mixins.rowFlexBox};
    padding-right: 0.5rem;
  `,
  Item: styled.li`
    ${mixins.rowFlexBox};
    color: ${theme.colors.grey_01};
    font-size: ${theme.fontSizes.body02};
    font-weight: ${theme.fontWeights.body02};
    width: 100%;
    height: 3.5rem;
    border-bottom: 0.1rem solid ${theme.colors.grey_04};
    cursor: pointer;
    ${({ categoryId, pickedCategoryId }) =>
      categoryId === pickedCategoryId &&
      css`
        color: ${theme.colors.black};
        font-size: ${theme.fontSizes.body01};
        font-weight: ${theme.fontWeights.body01};
        border-bottom: 0.3em solid ${theme.colors.black};
        height: 3.55rem;
        padding-top: 0.3rem;
      `}
  `,
};
