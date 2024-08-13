"use client";
import React, { useEffect, useState } from "react";
import styles from "./product.module.css";
import Image from "next/image";

const page = () => {
  const [data1, setUser] = useState([]);
  console.log(data1);

  useEffect(() => {
    async function makerequest() {
      const response = await fetch("https://backendapitoys.com/api/v1/products");
      const data = await response.json();
      setUser(data.products);
      // console.log(data)
    }
    makerequest();
  }, []);

  return (
    <div>
      <div className={styles.maindiv}>
        <div className={styles.leftside}>
          <h1 className={styles.headingapi}>API</h1>
          {
            data1.map((curElem)=>{
              return(
                <div>
                  <div className={styles.rightside}>
          <div className={styles.maincart}>
            <div className={styles.card1}>
              <Image
                className={styles.imggecart}
                
                src="/page1icon/smartwatch3.png"
                height="100"
                width="120"
              ></Image>
              <p className={styles.text}>
                {curElem.name}
              </p>
              <p className={styles.Special}>Special Price</p>
              <div className={styles.rupessdiv}>
                <h1 className={styles.rupess}>{curElem.offerprice}</h1>
                <span>
                  <del>{curElem.maximumretailprice
} </del>
                </span>
                <p className={styles.discount}>60% off</p>
              </div>
              <div className={styles.buttoncart}>
                <button className={styles.btn1}>GO TO CART</button>
                <button className={styles.btn2}>BUY NOW</button>
              </div>

              {/* <p className={styles.p11}>{data}</p>
              <p className={styles.p11}>{data1}</p>
             */}
            </div>
            <div className={styles.card2}>
              <Image
                className={styles.imggecart}
                src="/page1icon/smartwatch4.png"
                height="100"
                width="120"
              ></Image>
              <p className={styles.text}>
               {curElem.name}
              </p>
              <p className={styles.Special}>Special Price</p>
              <div className={styles.rupessdiv}>
                <h1 className={styles.rupess}> {curElem.offerprice}</h1>
                <span>
                  <del>{curElem.maximumretailprice}</del>
                </span>
                <p className={styles.discount}>78% off</p>
              </div>
              <div className={styles.buttoncart}>
                <button className={styles.btn1}>GO TO CART</button>
                <button className={styles.btn2}>BUY NOW</button>
              </div>
            </div>
            <div className={styles.card3}>
              <Image
                className={styles.imggecart}
                src="/page1icon/smartwatch7.png"
                height="100"
                width="120"
              ></Image>
              <p className={styles.text}>
                Noise Icon 2 1.8'' Display with Bluetooth Calling, Women's
                Edition, AI Voice Assistant Smartwatch (Pink Strap, Regular)
              </p>
              <p className={styles.Special}>Special Price</p>
              <div className={styles.rupessdiv}>
                <h1 className={styles.rupess}>₹2999₹</h1>
                <span>
                  <del> ₹7,999</del>
                </span>
                <p className={styles.discount}>80% off</p>
              </div>
              <div className={styles.buttoncart}>
                <button className={styles.btn1}>GO TO CART</button>
                <button className={styles.btn2}>BUY NOW</button>
              </div>
            </div>
          </div>
          <div className={styles.maincart2}>
            <div className={styles.card4}>
              <Image
                className={styles.imggecart}
                src="/page1icon/smartwatch8.png"
                height="100"
                width="120"
              ></Image>
              <p className={styles.text}>
                Noise Icon 2 1.8'' Display with Bluetooth Calling, Women's
                Edition, AI Voice Assistant Smartwatch (Pink Strap, Regular)
              </p>
              <p className={styles.Special}>Special Price</p>
              <div className={styles.rupessdiv}>
                <h1 className={styles.rupess}>₹2299₹</h1>
                <span>
                  <del> ₹4,999</del>
                </span>
                <p className={styles.discount}>73% off</p>
              </div>
              <div className={styles.buttoncart}>
                <button className={styles.btn1}>GO TO CART</button>
                <button className={styles.btn2}>BUY NOW</button>
              </div>
            </div>
            <div className={styles.card5}>
              <Image
                className={styles.imggecart}
                src="/page1icon/Royalwatch1.png"
                height="100"
                width="120"
              ></Image>
              <p className={styles.text}>
                Noise Icon 2 1.8'' Display with Bluetooth Calling, Women's
                Edition, AI Voice Assistant Smartwatch (Pink Strap, Regular)
              </p>
              <p className={styles.Special}>Special Price</p>
              <div className={styles.rupessdiv}>
                <h1 className={styles.rupess}>₹4999₹</h1>
                <span>
                  <del> ₹8,999</del>
                </span>
                <p className={styles.discount}>58% off</p>
              </div>
              <div className={styles.buttoncart}>
                <button className={styles.btn1}>GO TO CART</button>
                <button className={styles.btn2}>BUY NOW</button>
              </div>
            </div>
            <div className={styles.card6}>
              <Image
                className={styles.imggecart}
                src="/page1icon/Royalwatch2.png"
                height="100"
                width="120"
              ></Image>
              <p className={styles.text}>
                Noise Icon 2 1.8'' Display with Bluetooth Calling, Women's
                Edition, AI Voice Assistant Smartwatch (Pink Strap, Regular)
              </p>
              <p className={styles.Special}>Special Price</p>
              <div className={styles.rupessdiv}>
                <h1 className={styles.rupess}>₹4299₹</h1>
                <span>
                  <del> ₹10,099</del>
                </span>
                <p className={styles.discount}>48% off</p>
              </div>
              <div className={styles.buttoncart}>
                <button className={styles.btn1}>GO TO CART</button>
                <button className={styles.btn2}>BUY NOW</button>
              </div>
            </div>
          </div>
          <div className={styles.maincart3}>
            <div className={styles.card7}>
              <Image
                className={styles.imggecart}
                src="/page1icon/Royalwatch5.png"
                height="100"
                width="120"
              ></Image>
              <p className={styles.text}>
                Noise Icon 2 1.8'' Display with Bluetooth Calling, Women's
                Edition, AI Voice Assistant Smartwatch (Pink Strap, Regular)
              </p>
              <p className={styles.Special}>Special Price</p>
              <div className={styles.rupessdiv}>
                <h1 className={styles.rupess}>₹1,299₹</h1>
                <span>
                  <del> ₹5,999</del>
                </span>
                <p className={styles.discount}>50% off</p>
              </div>
              <div className={styles.buttoncart}>
                <button className={styles.btn1}>GO TO CART</button>
                <button className={styles.btn2}>BUY NOW</button>
              </div>
            </div>
            <div className={styles.card8}>
              <Image
                className={styles.imggecart}
                src="/page1icon/Royalwatch6.png"
                height="100"
                width="120"
              ></Image>
              <p className={styles.text}>
                Noise Icon 2 1.8'' Display with Bluetooth Calling, Women's
                Edition, AI Voice Assistant Smartwatch (Pink Strap, Regular)
              </p>
              <p className={styles.Special}>Special Price</p>
              <div className={styles.rupessdiv}>
                <h1 className={styles.rupess}>₹5299₹</h1>
                <span>
                  <del> ₹8,999</del>
                </span>
                <p className={styles.discount}>70% off</p>
              </div>
              <div className={styles.buttoncart}>
                <button className={styles.btn1}>GO TO CART</button>
                <button className={styles.btn2}>BUY NOW</button>
              </div>
            </div>
            <div className={styles.card9}>
              <Image
                className={styles.imggecart}
                src="/page1icon/watch.png"
                height="100"
                width="120"
              ></Image>
              <p className={styles.text}>
                Noise Icon 2 1.8'' Display with Bluetooth Calling, Women's
                Edition, AI Voice Assistant Smartwatch (Pink Strap, Regular)
              </p>
              <p className={styles.Special}>Special Price</p>
              <div className={styles.rupessdiv}>
                <h1 className={styles.rupess}>₹11299₹</h1>
                <span>
                  <del> ₹15,999</del>
                </span>
                <p className={styles.discount}>65% off</p>
              </div>
              <div className={styles.buttoncart}>
                <button className={styles.btn1}>GO TO CART</button>
                <button className={styles.btn2}>BUY NOW</button>
              </div>
            </div>
          </div>
        </div>


        </div>     
              )
            })
          }
 
          
        </div>
      </div>
    </div>
  );
};

export default page;
