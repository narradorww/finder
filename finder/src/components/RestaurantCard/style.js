import styled from 'styled-components';

export const Restaurant = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-top: 5px;
    padding: 16px;
    background-color: #fff;
    border-left: 5px solid transparent;

    :hover {
        background-color: ${(props) => props.theme.colors.background};
        border-left: ${(props) => props.theme.colors.primary};
    }
`;

export const RestaurantInfo = styled.div`
    display: flex;
    flex-direction: column;


`;

export const Title = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
    margin-bottom: 10px;
`;

export const Adress = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 24px;
    line-height: 16px;
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const RestaurantePhoto = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 6px;
    object-fit: cover;

`;