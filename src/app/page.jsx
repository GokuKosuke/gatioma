import Bar from "./components/Bar";
import Loading from "./components/Loading";
import Body from "./components/Body";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";


export default function Home() {

  
  return (
    <>
    <Body>
      <Page1 />
      <Page2 />
      <Bar />
      <Loading />
    </Body>
    
    </>
  );
}
