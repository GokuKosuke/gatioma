import Bar from "./components/Bar";
import Loading from "./components/Loading";
import Body from "./components/Body";
import Page1 from "./components/Page1";


export default function Home() {

  
  return (
    <>
    <Body>
      <Page1 />
      <Bar />
      <Loading />
    </Body>
    
    </>
  );
}
