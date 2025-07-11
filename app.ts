const id = (id: string) => document.getElementById(id);
const show = (place: string, msg: string | number): void => {
  const element = id(place);
  if (element && msg) {
    element.innerHTML = String(msg);
  }
};
const click = (btn: string, code: () => void) => {
  const element = id(btn);
  if (element && code) {
    element.addEventListener("click", code);
  }
};
const clickShow = (btn: string, place: string, msg: string) => {
  const btnEl = id(btn);
  const placeEl = id(place);
  if (btnEl && placeEl && msg) {
    btnEl.addEventListener("click", () => {
      placeEl.innerHTML = msg;
    });
  }
};

// Page 1: Lesson 1;
click("a1", () => {
  alert("Good Morning !!");
});
click("b1", () => {
  alert("Nuru");
});
click("c1", () => {
  console.log(10 + 5);
});
click("d1", () => {
  console.log(20 - 5);
});
click("e1", () => {
  console.log(2 + 2 - 5);
});

// Page 2: Lesson 1;
click("f1", () => {
  document.body.innerHTML = "Good Morning !!";
});
click("g1", () => {
  document.body.innerHTML = "Nuru";
});
click("h1", () => {
  alert(10 + 8 + 20);
});
click("i1", () => {
  alert(100 - 20 - 50 + 200);
});
click("j1", () => {
  document.body.innerHTML = "";
});

// Page 3: Lesson 2;
const a2 = 10 + 8 * 3 + 5;
show("a2", a2);
show("b2", a2 / 3);

const c2 = 1850 + 750 * 2;
show("c2", c2 / 100);
show("d2", (c2 * 0.1) / 100);
show("e2", (c2 * 0.2) / 100);

// Page 4: Lesson 2;
const f2 = 2095 + 799 + 1899;
show("f2", f2 / 100);

const g2 = 2095 + 799 + 1899 + 599;
show("g2", g2 / 100);
show("h2", Math.round(g2 * 0.1) / 100);
show("i2", Math.round(g2 + g2 * 0.1) / 100);

// Page 5: Lesson 2;
show("j2", Math.floor(2.8));
show("k2", Math.ceil(2.2));

const cConvert = (c: number): number => {
  return (c * 9) / 5 + 32;
};
const fConvert = (f: number): number => {
  return ((f - 32) * 5) / 9;
};
show("l2", cConvert(25));
show("m2", fConvert(86));
show("n2", cConvert(-5));

// Page 6: Lesson 3;
const a3 = "My name is:";
show("a3", a3);
const b3 = "Nuru";
show("b3", b3);
show("c3", a3 + " " + b3);
const d3 = 5 + 3;
show("d3", "Total cost: $" + d3);
show("e3", `Total cost: $${d3}`);
click("f3", () => {
  alert(`Total cost: $${d3}`);
});

// Page 7: Lesson 3;
const g3 = (599 + 295) / 100;
show("g3", "Total cost: $" + g3);
show("h3", `Total cost: $${g3}`);
click("i3", () => {
  alert(`Total cost: $${g3}`);
});
click("j3", () => {
  alert(`Total cost: $${g3}\nThank you, come again!`);
});

// Page 8: Lesson 3;
const k3 = 2095 * 2 + 799 * 2;
show("k3", `Items (${1 + 1 + 1 + 1}): $${k3 / 100}`);
const l3 = 499 + 499;
show("l3", `Shipping & handling: $${l3 / 100}`);
const m3 = k3 + l3;
show("m3", `Total before tax: ${m3 / 100}`);
const n3 = Math.round(m3 * 0.1);
show("n3", `Estimated tax (10%): $${n3 / 100}`);

// Page 9: Lesson 4;
// Page 10: Lesson 4;
click("h4", () => {
  console.log("Welcome !!");
});

// Page 11: Lesson 4;
// Page 12: Lesson 5;
const a5 = "Nuru";
click("b5", () => {
  console.log(`My name is: ${a5}.`);
});
const c5 = 5 + 2 * 3 + 9;
click("d5", () => {
  console.log(`Cost of food: $${c5}`);
});
const e5 = c5 * 0.1;

// Page 13: Lesson 5;
const 