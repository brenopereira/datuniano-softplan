import styled from 'styled-components';

export const Container = styled.a`
    width: auto;
    background: #f4f4f4;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0px 5px 10px 0px #00000024;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 60px;
`;

export const MainCountryContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.9 0 0;
`;

export const Country = styled.h2`
    margin: 0;
    padding: 0;
    font-family: 'Nunito Sans', sans-serif;
    color: #5c5cff;
    font-weight: bold;
    font-size: 14px;
    word-wrap: break-word;
`;

export const Capital = styled.h3`
    margin: 0;
    padding: 0;
    font-family: 'Nunito Sans', sans-serif;
    color: #515151;
    font-size: 13px;
    font-weight: 600;
`;

export const Flag = styled.div``;
