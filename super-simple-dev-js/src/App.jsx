import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    var id = function (id) {
      return document.getElementById(id);
    };
    var show = function (place, msg) {
      var element = id(place);
      if (element && msg) {
        element.innerHTML = String(msg);
      }
    };
    var click = function (btn, code) {
      var element = id(btn);
      if (element && code) {
        element.addEventListener("click", code);
      }
    };
    //   var clickShow = function (btn, place, msg) {
    //     var btnEl = id(btn);
    //     var placeEl = id(place);
    //     if (btnEl && placeEl && msg) {
    //       btnEl.addEventListener("click", function () {
    //         placeEl.innerHTML = msg;
    //       });
    //     }
    //   };
    // Page 1: Lesson 1;
    click("a1", function () {
      alert("Good Morning !!");
    });
    click("b1", function () {
      alert("Nuru");
    });
    click("c1", function () {
      console.log(10 + 5);
    });
    click("d1", function () {
      console.log(20 - 5);
    });
    click("e1", function () {
      console.log(2 + 2 - 5);
    });
    // Page 2: Lesson 1;
    click("f1", function () {
      document.body.innerHTML = "Good Morning !!";
    });
    click("g1", function () {
      document.body.innerHTML = "Nuru";
    });
    click("h1", function () {
      alert(10 + 8 + 20);
    });
    click("i1", function () {
      alert(100 - 20 - 50 + 200);
    });
    click("j1", function () {
      document.body.innerHTML = "";
    });
    // Page 3: Lesson 2;
    var a2 = 10 + 8 * 3 + 5;
    show("a2", a2);
    show("b2", a2 / 3);
    var c2 = 1850 + 750 * 2;
    show("c2", c2 / 100);
    show("d2", (c2 * 0.1) / 100);
    show("e2", (c2 * 0.2) / 100);
    // Page 4: Lesson 2;
    var f2 = 2095 + 799 + 1899;
    show("f2", f2 / 100);
    var g2 = 2095 + 799 + 1899 + 599;
    show("g2", g2 / 100);
    show("h2", Math.round(g2 * 0.1) / 100);
    show("i2", Math.round(g2 + g2 * 0.1) / 100);
    // Page 5: Lesson 2;
    show("j2", Math.floor(2.8));
    show("k2", Math.ceil(2.2));
    var cConvert = function (c) {
      return (c * 9) / 5 + 32;
    };
    var fConvert = function (f) {
      return ((f - 32) * 5) / 9;
    };
    show("l2", cConvert(25));
    show("m2", fConvert(86));
    show("n2", cConvert(-5));
    // Page 6: Lesson 3;
    var a3 = "My name is:";
    show("a3", a3);
    var b3 = "Nuru";
    show("b3", b3);
    show("c3", a3 + " " + b3);
    var d3 = 5 + 3;
    show("d3", "Total cost: $" + d3);
    show("e3", "Total cost: $".concat(d3));
    click("f3", function () {
      alert("Total cost: $".concat(d3));
    });
    // Page 7: Lesson 3;
    var g3 = (599 + 295) / 100;
    show("g3", "Total cost: $" + g3);
    show("h3", "Total cost: $".concat(g3));
    click("i3", function () {
      alert("Total cost: $".concat(g3));
    });
    click("j3", function () {
      alert("Total cost: $".concat(g3, "\nThank you, come again!"));
    });
    // Page 8: Lesson 3;
    var k3 = 2095 * 2 + 799 * 2;
    show("k3", "Items (".concat(1 + 1 + 1 + 1, "): $").concat(k3 / 100));
    var l3 = 499 + 499;
    show("l3", "Shipping & handling: $".concat(l3 / 100));
    var m3 = k3 + l3;
    show("m3", "Total before tax: ".concat(m3 / 100));
    var n3 = Math.round(m3 * 0.1);
    show("n3", "Estimated tax (10%): $".concat(n3 / 100));
    // Page 9: Lesson 4;
    // Page 10: Lesson 4;
    click("h4", function () {
      console.log("Welcome !!");
    });
    // Page 11: Lesson 4;
    // Page 12: Lesson 5;
    var a5 = "Nuru";
    click("b5", function () {
      console.log("My name is: ".concat(a5, "."));
    });
    var c5 = 5 + 2 * 3 + 9;
    click("d5", function () {
      console.log("Cost of food: $".concat(c5));
    });
    //   var e5 = c5 * 0.1;
    // Page 13: Lesson 5;
  }, []);

  return (
    <>
      <Header text="JavaScript" />
      <main className="container">
        <section>
          <h2 className="section-title">Lesson 1</h2>
          <div className="section-container">
            {/* Page 2: Lesson 1 */}
            <button
              id="a1"
              className="mx-auto block border rounded px-3 py-1 mt-3 cursor-pointer"
            >
              1a. Show Alert
            </button>
            <button
              id="b1"
              className="mx-auto block border rounded px-3 py-1 mt-3 cursor-pointer"
            >
              1b. Show Name
            </button>
            <button
              id="c1"
              className="mx-auto block border rounded px-3 py-1 mt-3 cursor-pointer"
            >
              1c. Show 10 + 5 in Console
            </button>
            <button
              id="d1"
              className="mx-auto block border rounded px-3 py-1 mt-3 cursor-pointer"
            >
              1d. Show 20 - 5 in Console
            </button>
            <button
              id="e1"
              className="mx-auto block border rounded px-3 py-1 mt-3 cursor-pointer"
            >
              1e. Show 2 + 2 - 5 in Console
            </button>

            {/* Page 2: Lesson 1 */}
            <button
              id="f1"
              className="mx-auto block border border-red-500 rounded px-3 py-1 mt-3 cursor-pointer"
            >
              1f. Erase Page & Show Good Morning
            </button>
            <button
              id="g1"
              className="mx-auto block border border-red-500 rounded px-3 py-1 mt-3 cursor-pointer"
            >
              1g. Erase Page & Show Name
            </button>
            <button
              id="h1"
              className="mx-auto block border rounded px-3 py-1 mt-3 cursor-pointer"
            >
              1h. Show Total Cost
            </button>
            <button
              id="i1"
              className="mx-auto block border rounded px-3 py-1 mt-3 cursor-pointer"
            >
              1i. Show Balance
            </button>
            <button
              id="j1"
              className="mx-auto block border border-red-500 rounded px-3 py-1 my-3 cursor-pointer"
            >
              1j. Make Web Page Blank
            </button>
          </div>
        </section>

        <section>
          <h2 className="section-title">Lesson 2</h2>
          <div className="section-container">
            <p className="border px-3 py-1 m-3 rounded">
              2a. Cost of my Order is: $
              <span id="a2" className="font-bold"></span>
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              2b. Cost of each Friend: $
              <span id="b2" className="font-bold"></span>
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              2c. Total cost of a toaster and 2 shirts: $
              <span id="c2" className="font-bold"></span>
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              2d. 10% Tax of Total Cost: $
              <span id="d2" className="font-bold"></span>
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              2e. 20% Tax of Total Cost: $
              <span id="e2" className="font-bold"></span>
            </p>

            {/* Page 4: Lesson 2 */}
            <p className="border px-3 py-1 m-3 rounded">
              2f. Cost without Tax and Shipping: $
              <span id="f2" className="font-bold"></span>
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              2g. Cost without Tax: $<span id="g2" className="font-bold"></span>
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              2h. Tax: $<span id="h2" className="font-bold"></span>
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              2i. Total Payable Amount: $
              <span id="i2" className="font-bold"></span>
            </p>

            {/* Page 5: Lesson 2 */}
            <p className="border px-3 py-1 m-3 rounded">
              2j. Rounding a number down (2.8):{" "}
              <span id="j2" className="font-bold"></span>
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              2k. Rounding a number up (2.2):{" "}
              <span id="k2" className="font-bold"></span>
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              2l. 25°C = <span id="l2" className="font-bold"></span>°F
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              2m. 86°F = <span id="m2" className="font-bold"></span>°C
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              2n. -5°C = <span id="n2" className="font-bold"></span>°F
            </p>
          </div>
        </section>

        <section>
          <h2 className="section-title">Lesson 3</h2>
          <div className="section-container">
            <p className="border px-3 py-1 m-3 rounded">
              3a. Creating a string :{" "}
              <span id="a3" className="font-bold"></span>
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              3b. Creating Name as a string :{" "}
              <span id="b3" className="font-bold"></span>
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              3c. Concatenating 3a and 3b :{" "}
              <span id="c3" className="font-bold"></span>
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              3d. Created Text : <span id="d3" className="font-bold"></span>
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              3e. Created Text using template string :{" "}
              <span id="e3" className="font-bold"></span>
            </p>
            <button
              id="f3"
              className="mx-auto block cursor-pointer border px-3 py-1 m-3 rounded"
            >
              3f. Show in Alert
            </button>

            {/* Page 7: Lesson 3 */}
            <p className="border px-3 py-1 m-3 rounded">
              3g. Created Text2 : <span id="g3" className="font-bold"></span>
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              3h. Created Text2 using template string :{" "}
              <span id="h3" className="font-bold"></span>
            </p>
            <button
              id="i3"
              className="mx-auto block cursor-pointer border px-3 py-1 m-3 rounded"
            >
              3i. Show in Alert
            </button>
            <button
              id="j3"
              className="mx-auto block cursor-pointer border px-3 py-1 m-3 rounded"
            >
              3j. Show Multiline String
            </button>

            {/* Page 8: Lesson 3 */}
            <p className="border px-3 py-1 m-3 rounded">
              3k. First Line : <span id="k3" className="font-bold"></span>
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              3l. Second Line : <span id="l3" className="font-bold"></span>
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              3m. Third Line : <span id="m3" className="font-bold"></span>
            </p>
            <p className="border px-3 py-1 m-3 rounded">
              3n. Fourth Line : <span id="n3" className="font-bold"></span>
            </p>
          </div>
        </section>

        <section>
          <h2 className="section-title">Lesson 4</h2>
          <div className="section-container">
            <button className="mx-auto block cursor-pointer border px-3 py-1 m-3 rounded">
              4a. Click
            </button>
            <div className="mx-auto w-fit">
              <button className="cursor-pointer border px-3 py-1 m-3 rounded">
                4b. Nuru
              </button>
              <button className="cursor-pointer border px-3 py-1 m-3 rounded">
                4b. Biriyani
              </button>
            </div>
            <p className="border px-3 py-1 m-3 rounded">4c. Hello, world!</p>
            <div className="border px-3 py-1 m-3 rounded">
              <p className="py-1">4d. Hello, world!</p>
              <p className="py-1">
                4d. Today I woke up in the morning and started writing code.
              </p>
            </div>

            {/* Page 10: Lesson 4 */}
            <div className="mx-auto w-fit">
              <button className="cursor-pointer border px-3 py-1 m-3 rounded bg-yellow-300">
                4e. Add to cart
              </button>
              <button className="cursor-pointer border px-3 py-1 m-3 rounded bg-orange-500">
                4e. Buy now
              </button>
            </div>
            <p className="border px-3 py-1 m-3 rounded">4f. Already Done !!</p>
            <p className="border px-3 py-1 m-3 rounded">4g. Already Done !!</p>
            <button
              id="h4"
              className="mx-auto block cursor-pointer border px-3 py-1 m-3 rounded"
            >
              4h. Show in Console
            </button>

            {/* Page 11: Lesson 4 */}
            <div className="border px-3 py-1 m-3 rounded">
              <p className="py-1">4i. Adults Plain Cotton T-shirt</p>
              <p className="py-1">4i. Price: $7.99</p>
              <button
                className="cursor-pointer border px-3 py-2 my-3 rounded bg-yellow-300"
                onClick={() => {
                  alert("Added!");
                }}
              >
                4j. Add to cart
              </button>
              <button
                className="cursor-pointer border px-3 py-2 m-3 rounded bg-orange-500"
                onClick={() => {
                  console.log("Loading...");
                  alert("Purchased!");
                }}
              >
                4j. Buy now
              </button>
            </div>
          </div>
        </section>

        <section>
          <h2 className="section-title">Lesson 5</h2>
          <div className="section-container">
            <p className="border px-3 py-1 m-3 rounded">
              5a. Variable Created !!
            </p>
            <button
              id="b5"
              className="mx-auto block cursor-pointer border px-3 py-1 m-3 rounded"
            >
              5b. Display in the console
            </button>
            <p className="border px-3 py-1 m-3 rounded">
              5c. Saved in variable !!
            </p>
            <button
              id="d5"
              className="mx-auto block cursor-pointer border px-3 py-1 m-3 rounded"
            >
              5d. Show in the console
            </button>
            <p className="border px-3 py-1 m-3 rounded">
              5e. Saved in variable !!
            </p>

            {/* Page 13: Lesson 5 */}
          </div>
        </section>

        <section>
          <h2 className="section-title">Lesson 6</h2>
          <div className="section-container">
            <h4>Up Next...</h4>
            <h4>Up Next...</h4>
            <h4>Up Next...</h4>
          </div>
        </section>
      </main>
      <Footer name="Nuru" />
    </>
  );
}
