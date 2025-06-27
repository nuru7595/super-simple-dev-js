const id = (id) => document.getElementById(id);
const show = (place, code) => {
    const element = id(place);
    if (element && code) {
        element.innerHTML = code;
    }
};
const click = (btn, code) => {
    const element = id(btn);
    if (element && code) {
        element.addEventListener("click", code);
    }
};
const clickShow = (btn, place, code) => {
    const btnEl = id(btn);
    const placeEl = id(place);
    if (btnEl && placeEl && code) {
        btnEl.addEventListener("click", () => {
            placeEl.innerHTML = code;
        });
    }
};

// Page 1;
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

// Page 2;
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

// Page 3;
