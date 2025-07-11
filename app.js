var id = function (id) { return document.getElementById(id); };
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
var clickShow = function (btn, place, msg) {
    var btnEl = id(btn);
    var placeEl = id(place);
    if (btnEl && placeEl && msg) {
        btnEl.addEventListener("click", function () {
            placeEl.innerHTML = msg;
        });
    }
};
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
var e5 = c5 * 0.1;
// Page 13: Lesson 5;
