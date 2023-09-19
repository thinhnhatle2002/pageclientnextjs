import Link from "next/link";
import { styled } from "styled-components";
import Center from "./Center";


const StyledFooter = styled.footer`
    background-color: #222;
    height: 100%;
    
`;

// const Logo = styled(Link)`

//     margin-top: 12px;
//     padding-left: 8px;
//     color: #fff;
    
//     text-decoration: underline;
//     position: relative;
//     z-index: 3;
// `;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    
`;

const StyleNav = styled.nav`
    gap: 15px;
    position: fixed;
    margin-right: 50px;
    margin-top: 10px;
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

const FooterText = styled.div`
    padding: 8px;
    color: #fff;
    font-size: 8px;
    padding-bottom: 10px;
    text-align: justify;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    background-color: #aaa;
`;

const Linkul = styled.ul`
    margin-top: 10px;
    font-size: 13px;
`;
const Textli = styled.li`
    a{
        text-decoration: none;
        color: #aaa;
    }
    a:hover{
        color: #fff;
    }
    color: #fff;
    padding-top: 10px;
    padding: 10px;
    list-style-type: none;
`;

const Column = styled.div`
    margin-left: -20px;

`;
const Column1 = styled.div`
    margin-left: -250px;

`;




 
export default function Footer(){
    return (
        <StyledFooter>
            <Center>
                <Wrapper>
                    <Column>
                        <Linkul>
                            <Textli><a href="">Giới thiệu công ty</a></Textli>
                            <Textli><a href="">Chính sách bảo mật</a></Textli>
                            <Textli><a href="">Quy chế hoạt động</a></Textli>
                            <Textli><a href="">Kiểm tra hóa đơn điện tử</a></Textli>
                            <Textli><a href="">Tra cứu thông tin bảo hành</a></Textli>
                            <Textli><a href="">Câu hỏi thường gặp mua hàng</a></Textli>
                         </Linkul>
                    </Column>
                    <Column1>
                         
                        <Linkul>
                            <Textli><a href="">Tin tuyển dụng</a></Textli>
                            <Textli><a href="">Tin khuyến mãi</a></Textli>
                            <Textli><a href="">Hướng dẫn mua online</a></Textli>
                            <Textli><a href="">Hướng dẫn mua trả góp</a></Textli>
                            <Textli><a href="">Chính sách trả góp</a></Textli>
                         </Linkul>
                    </Column1>
                    <StyleNav >
                        <LogoLink href={'https://www.facebook.com/itnt.657?mibextid=LQQJ4d'}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="35px" height="35px"><path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"/><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"/></svg>
                        </LogoLink>
                        <LogoLink href={'https://www.youtube.com/channel/UCwY9K16Gtd6tV1GeMPRASgA'}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="35px" height="35px"><path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"/><path fill="#FFF" d="M20 31L20 17 32 24z"/></svg>
                        </LogoLink>
                        <LogoLink href={''} >
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="35px" height="35px"><path fill="#2962ff" d="M15,36V6.827l-1.211-0.811C8.64,8.083,5,13.112,5,19v10c0,7.732,6.268,14,14,14h10	c4.722,0,8.883-2.348,11.417-5.931V36H15z"/><path fill="#eee" d="M29,5H19c-1.845,0-3.601,0.366-5.214,1.014C10.453,9.25,8,14.528,8,19	c0,6.771,0.936,10.735,3.712,14.607c0.216,0.301,0.357,0.653,0.376,1.022c0.043,0.835-0.129,2.365-1.634,3.742	c-0.162,0.148-0.059,0.419,0.16,0.428c0.942,0.041,2.843-0.014,4.797-0.877c0.557-0.246,1.191-0.203,1.729,0.083	C20.453,39.764,24.333,40,28,40c4.676,0,9.339-1.04,12.417-2.916C42.038,34.799,43,32.014,43,29V19C43,11.268,36.732,5,29,5z"/><path fill="#2962ff" d="M36.75,27C34.683,27,33,25.317,33,23.25s1.683-3.75,3.75-3.75s3.75,1.683,3.75,3.75	S38.817,27,36.75,27z M36.75,21c-1.24,0-2.25,1.01-2.25,2.25s1.01,2.25,2.25,2.25S39,24.49,39,23.25S37.99,21,36.75,21z"/><path fill="#2962ff" d="M31.5,27h-1c-0.276,0-0.5-0.224-0.5-0.5V18h1.5V27z"/><path fill="#2962ff" d="M27,19.75v0.519c-0.629-0.476-1.403-0.769-2.25-0.769c-2.067,0-3.75,1.683-3.75,3.75	S22.683,27,24.75,27c0.847,0,1.621-0.293,2.25-0.769V26.5c0,0.276,0.224,0.5,0.5,0.5h1v-7.25H27z M24.75,25.5	c-1.24,0-2.25-1.01-2.25-2.25S23.51,21,24.75,21S27,22.01,27,23.25S25.99,25.5,24.75,25.5z"/><path fill="#2962ff" d="M21.25,18h-8v1.5h5.321L13,26h0.026c-0.163,0.211-0.276,0.463-0.276,0.75V27h7.5	c0.276,0,0.5-0.224,0.5-0.5v-1h-5.321L21,19h-0.026c0.163-0.211,0.276-0.463,0.276-0.75V18z"/></svg>
                        </LogoLink>
                    </StyleNav>
                  
                </Wrapper>
                <FooterText>
                        © 2002. Công ty công nghệ TechTi. GPDKKD: 0355378007 do sở KH & ĐT TP.HCM cấp ngày 02/01/2007. GPMXH: 165/GP-BTTTT do Bộ Thông Tin và Truyền Thông cấp ngày 28/02/2002.
                        Địa chỉ: Phương 8,Quận 2,Thành phố Chinh Chiến nhiều năm. Điện thoại: 035 5378007. Email: <a href="mailto:thinhnhatle2002@gmail.com">thinhnhatle2002@gmail.com</a>. Chịu trách nhiệm nội dung: Lê Nhất Thịnh. Email: <a href="mailto:thinhnhatle2002@gmail.com">thinhnhatle2002@gmail.com</a>.
                </FooterText>   
            </Center>
        </StyledFooter>
    );
}