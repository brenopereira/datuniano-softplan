import styled from 'styled-components';

export const Container = styled.div`
    width: 1140px;
    padding: 50px 0;
    margin: 0 auto;

    @media (max-width: 1140px) {
        width: 80%;
    }
`;

export const Logo = styled.img`
    max-width: 200px;
    display: flex;
    margin: 0 auto;
`;

export const PageTitle = styled.h1`
    text-align: center;
    color: #fff;
    font-family: 'Nunito Sans', sans-serif;
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: max-content;
    gap: 24px;

    @media (max-width: 960px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media (min-width: 961px) and (max-width: 1640px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const SearchContainer = styled.div`
    padding: 20px 0;
    display: flex;
`;

export const SearchInput = styled.input`
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 0;
`;
