import { useAtom } from "jotai";
import { cartSlidingPane } from "../../store/Homepage/HomepageAtom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import style from "./CartPane.module.css";
import Image from "next/image";
import React,{ useState } from "react";

const Counter: React.FC = (props) => {
  const [cartPaneState, setcartSlidingPane] = useAtom<any>(cartSlidingPane);
    const[data,setdata]=useState("");
    const[data1,setdata1]=useState("");
    const button1=()=>{
        setdata("Place order")
    };
    const button2=()=>{
        setdata1("ADD & CONTINUE")
    };
    

  return (
    <div>
      <SlidingPane
        className={style.cartsidemodalcustomclass}
        overlayClassName={style.cartsidemodalcustomoverlayclass}
        isOpen={cartPaneState}
        from="left"
        hideHeader={true}
        width="30%"
        onRequestClose={() => {
          // @ts-ignore
          setcartSlidingPane(false);
          // triggered on "<" on left top click or on outside click
        }}
      >
        <>
          <h2 className={style.heading}>MyCart (1)</h2>
         
         <div  className={style.maindivn1}>
          <div> <Image
                className={style.imggecart}
                src="/page1icon/watch.png"
                height="100"
                width="120"
              ></Image></div>
          <div> <p className={style.text}>
              Smartwatch
              </p></div>
          <div> <h1 className={style.rupess}>₹11,299₹</h1>
                <span>
                  <del className={style.del}> ₹15,999</del>
                </span></div>
          <div> <Image src="/page1icon/x.png" width="30" height="30" className={style.imagecart1}></Image></div>

         </div>
         
         <div  className={style.maindivn1}>
          <div> <Image
                className={style.imggecart}
                src="/page1icon/smartwatch7.png"
                height="100"
                width="120"
              ></Image></div>
          <div> <p className={style.text}>
              Smartwatch
              </p></div>
          <div> <h1 className={style.rupess}>₹2299₹</h1>
                <span>
                  <del className={style.del}> ₹5,999</del>
                </span></div>
          <div> <Image src="/page1icon/x.png" width="30" height="30" className={style.imagecart1}></Image></div>

         </div>
         
         <div  className={style.maindivn1}>
          <div> <Image
                className={style.imggecart}
                src="/page1icon/smartwatch4.png"
                height="100"
                width="120"
              ></Image></div>
          <div> <p className={style.text}>
              Smartwatch
              </p></div>
          <div> <h1 className={style.rupess}>₹4,599₹</h1>
                <span>
                  <del className={style.del}> ₹10,999</del>
                </span></div>
          <div> <Image src="/page1icon/x.png" width="30" height="30" className={style.imagecart1}></Image></div>

         </div>
         
         
         
         <div  className={style.maindivn1}>
          <div> <Image
                className={style.imggecart}
                src="/page1icon/smartwatch8.png"
                height="100"
                width="120"
              ></Image></div>
          <div> <p className={style.text}>
              Smartwatch
              </p></div>
          <div> <h1 className={style.rupess}>₹1,299₹</h1>
                <span>
                  <del className={style.del}> ₹4,999</del>
                </span></div>
          <div> <Image src="/page1icon/x.png" width="30" height="30" className={style.imagecart1}></Image></div>

         </div>
         
         
            
             

              
            

   


        </>
        <br />
      </SlidingPane>
    </div>
  );
};

export default Counter;
