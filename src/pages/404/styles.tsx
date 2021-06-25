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
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 40px;
    border-radius: 4px;
    box-shadow: 0px 5px 10px 0px #00000024;
`;

export const Paragraph = styled.p`
    font-family: 'Nunito Sans', sans-serif;
    font-size: 16px;
    text-align: center;
`;
