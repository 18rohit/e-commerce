"use client";

import CustomNavbar from "@/components/CustomNavbar";
import Footer from "@/components/Footer";
import styles from "../../styles/payment.css";
import MiniCard from "./MiniCard";
import { useSelector } from "react-redux";

function Payment() {
  const list = useSelector((state) => state.cart);
  let total = 0;
  list.forEach((item) => (total += item.price));
  return (
    <>
      <CustomNavbar />
      <main className="main">
        <header>Payment Gateway</header>
        <div className="container">
          <section className="formSection">
            <form>
              <div>
                <input type="radio" name="paymentType" id="credit" />
                <label for="credit">Credit</label>
              </div>
              <fieldset>
                <div className="creditCard">
                  <div className="field formGroup1">
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      placeholder=" "
                    />
                    <label for="cardNumber">Card Number</label>
                  </div>
                  <div className="field formGroup2">
                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      placeholder=" "
                    />
                    <label for="cardName">Name on card</label>
                  </div>
                  <div className="field formGroup3">
                    <input
                      type="text"
                      id="expiry"
                      name="expiry"
                      placeholder=" "
                    />
                    <label for="expiry">Exp. Date</label>
                  </div>
                  <div className="field formGroup4">
                    <input type="text" id="cvv" name="cvv" placeholder=" " />
                    <label for="cvv">CVV</label>
                  </div>
                </div>
              </fieldset>
              <div>
                <input
                  type="radio"
                  name="paymentType"
                  id="upi"
                  placeholder=" "
                />
                <label for="upi">Upi</label>
              </div>
              <fieldset>
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
              <p>${total}</p>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
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
