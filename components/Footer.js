import Link from "next/link";
import { styled } from "styled-components";
import Center from "./Center";


const StyledFooter = styled.footer`
    background-color: #222;
  
`;

const Logo = styled(Link)`

    margin-top: 12px;
    color: #fff;
    text-decoration: none;
    position: relative;
    z-index: 3;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
`;

const StyleNav = styled.nav`
    gap: 15px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 70px 20px 20px;
    background-color: #222;
    @media screen and (min-width: 768px) {
        display: flex;
        position: static;
        padding: 0;
    }
`;


const LogoLink = styled(Link)`
    display: block;
    color: #aaa;
    text-decoration: none;
    padding: 10px 0;
   
    @media screen and (min-width: 768px) {
        padding: 0;
    }

`;


 
export default function Footer(){
    return (
        <StyledFooter>
            <Center>
                <Wrapper>
                    <Logo href={'/'}>@Công ty công nghệ thời đại TechTi</Logo>
                    <StyleNav >
                        <LogoLink href={'https://www.facebook.com/itnt.657?mibextid=LQQJ4d'}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="35px" height="35px"><path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"/><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"/></svg>
                        </LogoLink>
                        <LogoLink href={'https://www.youtube.com/channel/UCwY9K16Gtd6tV1GeMPRASgA'}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="35px" height="35px"><path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"/><path fill="#FFF" d="M20 31L20 17 32 24z"/></svg>
                        </LogoLink>
                    </StyleNav>
                </Wrapper>   
            </Center>
        </StyledFooter>
    );
}