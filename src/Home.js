import Header from './Compnents/Header/Header';
import Intro from './Compnents/Intro/Intro';
import News from './Compnents/News/News';
import Footer from './Compnents/Footer/Footer';
// import WhatWeDo from './Compnents/WhatWeDo/WhatWeDo';

function Home() {
  return (
    <>
    <div className='backgroundImage'></div>
    <div className='background'></div>
    <div className='overlay'>    
      <Header/>
    <Intro/>
     <News/>
     <Footer/>
     </div>

     {/* <WhatWeDo/> */}
    </>
  );
}

export default Home;
