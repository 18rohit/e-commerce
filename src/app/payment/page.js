"use client";

import "../../styles/payment.css";
import MiniCard from "./MiniCard";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function Payment() {
  // const list = useSelector((state) => state.cart);
  // let total = 0;
  // list.forEach((item) => (total += item.price));

  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/api/cart");
    const ls = await res.json();
    console.log(ls.data);
    setList(ls.data);
    let t = 0;
    ls.data.forEach((item) => (t += parseFloat(item.price)));
    setTotal(t);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function validateCardNumber() {
    const cardNumber = document.getElementById("cardNumber");
    var value = cardNumber.value;
    console.log(value);
    var cursor = cardNumber.selectionStart;
    var matches = value.substring(0, cursor).match(/[^0-9]/g);
    console.log("matches: ", matches);
    if (matches) cursor -= matches.length;
    value = value.replace(/[^0-9]/g, "").substring(0, 16);
    var formatted = "";
    for (var i = 0, n = value.length; i < n; i++) {
      if (i && i % 4 == 0) {
        if (formatted.length <= cursor) cursor++;
        formatted += " ";
      }
      formatted += value[i];
    }
    if (formatted == cardNumber.value) return;
    cardNumber.value = formatted;
    cardNumber.selectionEnd = cursor;
  }

  function validateName() {
    const name = document.getElementById("cardName");
    var cursor = name.selectionStart;
    var matches = name.value.substring(0, cursor).match(/[^a-zA-Z]/g);
    if (matches) cursor -= matches.length;
    name.value = name.value.replace(/[^a-zA-Z]/g, "");
    name.selectionEnd = cursor;
  }

  var charCount;
  function validateExpiry() {
    const expiry = document.getElementById("expiry");
    var value = expiry.value;
    if (value.length == 2 && charCount < value.length) {
      expiry.value = value + "/";
    }
    charCount = expiry.value.length;
  }

  function validateCvv() {
    const cvv = document.getElementById("cvv");
    var cursor = cvv.selectionStart;
    var matches = cvv.value.substring(0, cursor).match(/[^0-9]/g);
    if (matches) cursor -= matches.length;
    cvv.value = cvv.value.replace(/[^0-9]/g, "");
    cvv.selectionEnd = cursor;
  }

  return (
    <>
      <main className="main">
        <header>Payment Gateway</header>
        <div className="container">
          <section className="formSection">
            <form>
              <fieldset>
                <div className="address">
                  <div className="formGroup5">
                    <label for="address">Address</label>
                    <textarea
                      name="address"
                      id="address"
                      placeholder="Enter your full address here"
                    />
                  </div>
                  <div className="formGroup6">
                    <label for="cty">City</label>
                    <input list="city" id="cty" name="city" />
                    <datalist id="city">
                      <option value="Mumbai" />
                      <option value="Delhi" />
                      <option value="Bangalore" />
                      <option value="Gurugram" />
                    </datalist>
                  </div>
                  <div className="formGroup7">
                    <label for="pin">Pincode</label>
                    <input type="text" id="pin" name="pin" />
                  </div>
                </div>
              </fieldset>

              <fieldset>
                <div>
                  <input type="radio" name="paymentType" id="credit" />
                  <label for="credit">Credit</label>
                </div>
                <div className="creditCard">
                  <div className="field formGroup1">
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      placeholder=" "
                      onChange={validateCardNumber}
                    />
                    <label for="cardNumber">Card Number</label>
                  </div>
                  <div className="field formGroup2">
                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      placeholder=" "
                      onChange={validateName}
                    />
                    <label for="cardName">Name on card</label>
                  </div>
                  <div className="field formGroup3">
                    <input
                      type="text"
                      id="expiry"
                      name="expiry"
                      placeholder=" "
                      maxLength={5}
                      onChange={validateExpiry}
                    />
                    <label for="expiry">Exp. Date</label>
                  </div>
                  <div className="field formGroup4">
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      placeholder=" "
                      maxLength={3}
                      onChange={validateCvv}
                    />
                    <label for="cvv">CVV</label>
                  </div>
                </div>
              </fieldset>

              <fieldset>
                <div>
                  <input
                    type="radio"
                    name="paymentType"
                    id="upi"
                    placeholder=" "
                  />
                  <label for="upi">Upi</label>
                </div>
                <div className="field">
                  <input type="text" name="upiid" id="upiid" placeholder=" " />
                  <label for="upiid">Upi Id</label>
                </div>
              </fieldset>
              <button type="submit" className="submit">
                Complete Order
              </button>
            </form>
          </section>
          <aside className="cartSection">
            <h2>Order Summary</h2>
            <div>
              {list.map((prod) => (
                <MiniCard item={prod} />
              ))}
            </div>
            <div className="total">
              <p>Total:</p>
              <p>${total.toFixed(2)}</p>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}

export default Payment;

// "use client";

// import CustomNavbar from "@/components/CustomNavbar";
// import Footer from "@/components/Footer";
// import styles from "../../styles/payment.module.css";
// import MiniCard from "./MiniCard";
// import { useSelector } from "react-redux";

// function Payment() {
//   const list = useSelector((state) => state.cart);
//   let total = 0;
//   list.forEach((item) => (total += item.price));
//   return (
//     <>
//       <CustomNavbar />
//       <main className={styles.main}>
//         <header>Payment Gateway</header>
//         <div className={styles.container}>
//           <section className="formSection">
//             <form>
//               <div className={styles.typeBtn}>
//                 <input type="radio" name="paymentType" id="credit" />
//                 <label className={styles.label} for="credit">
//                   Credit
//                 </label>
//               </div>
//               <fieldset className={styles.fieldset}>
//                 <div className={styles.card}>
//                   <div className={`${styles.field}${styles.formGroup1}`}>
//                     <input
//                       className={styles.input}
//                       type="text"
//                       id="cardNumber"
//                       name="cardNumber"
//                       placeholder=" "
//                     />
//                     <label className={styles.label} for="cardNumber">
//                       Card Number
//                     </label>
//                   </div>
//                   <div className={`${styles.field}${styles.formGroup2}`}>
//                     <input
//                       className={styles.input}
//                       type="text"
//                       id="cardName"
//                       name="cardName"
//                       placeholder=" "
//                     />
//                     <label for="cardName" className={styles.label}>
//                       Name on card
//                     </label>
//                   </div>
//                   <div className={`${styles.field}${styles.formGroup3}`}>
//                     <input
//                       className="input"
//                       type="text"
//                       id="expiry"
//                       name="expiry"
//                       placeholder=" "
//                     />
//                     <label for="expiry" className={styles.label}>
//                       Exp. Date
//                     </label>
//                   </div>
//                   <div className={`${styles.field}${styles.formGroup4}`}>
//                     <input
//                       className={styles.input}
//                       type="text"
//                       id="cvv"
//                       name="cvv"
//                       placeholder=" "
//                     />
//                     <label for="cvv" className={styles.label}>
//                       CVV
//                     </label>
//                   </div>
//                 </div>
//               </fieldset>
//               <div className={styles.typeBtn}>
//                 <input
//                   type="radio"
//                   name="paymentType"
//                   id="upi"
//                   placeholder=" "
//                 />
//                 <label for="upi" className={styles.label}>
//                   Upi
//                 </label>
//               </div>
//               <fieldset className={styles.fieldset}>
//                 <div className="field">
//                   <input
//                     className={styles.input}
//                     type="text"
//                     name="upiid"
//                     id="upiid"
//                     placeholder=" "
//                   />
//                   <label for="upiid" className={styles.label}>
//                     Upi Id
//                   </label>
//                 </div>
//               </fieldset>
//               <button type="submit" className={styles.submit}>
//                 Complete Order
//               </button>
//             </form>
//           </section>
//           <aside className={styles.cartSection}>
//             <h2>Order Summary</h2>
//             <div>
//               {list.map((prod) => (
//                 <MiniCard item={prod} />
//               ))}
//             </div>
//             <div className={styles.total}>
//               <p>Total:</p>
//               <p>${total}</p>
//             </div>
//           </aside>
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// }

// export default Payment;
