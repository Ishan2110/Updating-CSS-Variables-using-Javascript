const x = document.querySelectorAll(".contents input");
// console.log(x);

var r = document.querySelector(":root");

function handle(e) {

    const suffix = this.dataset.sizing || '';
    // console.log(suffix);
    // console.log(e);
    // console.log(this.value);

    // r.style.setProperty("--spacing", this.value + "px")

    console.log(document.documentElement.style);

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}

x.forEach(key => key.addEventListener("change", handle));
x.forEach(key => key.addEventListener("mousemove", handle));

// console.log(getComputedStyle(r));

var sty = getComputedStyle(r);

// console.log("Currently the value is ")
// console.log(sty.getPropertyValue("--spacing"));