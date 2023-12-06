import styled from 'styled-components/macro'
export const ProjectCardContainer = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 7px;
    margin-bottom: 7px;
`

export const ProjectImage = styled.img`
    width: 100%;
    height: 100%;
`

export const ProjectTitleAndDurationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    @media screen and (min-width: 768px){
        flex-direction: row;
        align-items: center;
    }
`

export const ProjectTitle = styled.h1`
    color: #171f46;
    font-family: 'Roboto';
    font-size: 20px;
    font-weight: 700;
    line-height: 1.3;
    margin: 0px;
    @media screen and (min-width: 768px){
        font-size: 24px;
    }
`

export const DurationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8px;
`

export const Duration = styled.p`
    color: #171f46;
    font-family: 'Roboto';
    font-size: 12px;
    font-weight: 600;
    line-weight: 1.2;
    margin-left: 4px;
    @media screen and (min-width: 768px){
        font-size: 14px;
    }
`
export const ProjectDecription = styled.p`
    color: #1e293b;
    font-family: 'Roboto';
    font-size: 12px;
    lien-height: 1.5;
    maegin-top: 0px;
    @media screen and (min-widthL 768px){
        font-size: 16px;
    }
`

export const VisitLink = styled.a`
    text-align: center;
    color: #0967d2;
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 600;
    line-height: 1.2;
    text-decoration: none;
    marigin-top: 5px;
    @media screen and (min-width: 768px){
        font-size: 18px;
    }
`