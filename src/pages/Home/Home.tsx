import { Button, Flex, Layout } from 'antd';
import { Header, Content } from 'antd/es/layout/layout';
import { Link } from 'react-router-dom';
import "./Home.css";

export default function Home(){
    return(
        <>
        <Layout>
            <Header id="header"></Header>

            <Content className="Home" >

            <div id= 'container'>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: "400"}}>
            Sobre qual assunto você deseja discutir com a Sonia?
            </h2>

            <Flex id="button-container" gap="small">
            <Link to="/sonia"><Button size='large'>Sempre JBS</Button></Link>
            <Button size='large'>Valores</Button>
            </Flex>
            </div>
            
            

            </Content>
        </Layout>
        
        
        </>
    )
}