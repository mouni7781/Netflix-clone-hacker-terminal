async function getrandomsec() {
    let a = Math.floor(Math.random() * 61) * 100 + 1000;
    return a;
}
async function msg(h) {
    let a = document.createElement("p");
    const delay = await getrandomsec();
    return new Promise(resolve => {
        setTimeout(() => {
            let mesg
            if (h == 1) {
                mesg = "Initializing Hacking."
            } else if (h == 2) {
                mesg = "Accessing System Log FileS"
            } else if (h == 3) {
                mesg = "Reading System Files"
            } else if (h == 4) {
                mesg = "Password Files Detected"
            } else if (h == 5) {
                mesg = "Uploading all passwords to the server"
            } else if (h == 6) {
                mesg = "Successfully Hacked✅"
            }
            a.textContent = mesg;
            document.querySelector('.box').appendChild(a)
            if (h <= 5) {
                let dot = 0;
                const maxdots = 3
                const dottimeint = 280;
                const dotint = setInterval(() => {
                    if (dot < maxdots) {
                        dot++;
                        a.textContent = mesg + ".".repeat(dot);
                    } else {
                        dot = 0;
                        a.textContent = mesg
                    }
                }, dottimeint);

                setTimeout(() => {
                    clearInterval(dotint);
                    a.textContent = mesg + "....";
                }, delay);
            }
            resolve()
        }, delay);
    })

}
async function start() {
    const box = document.querySelector(".abx")
    box.style.backgroundImage = "url('pic.png')";
    box.style.backgroundSize = "cover";
    box.style.backgroundRepeat = "no-repeat";

    await msg(1);
    await msg(2);
    await msg(3);
    await msg(4);
    await msg(5);
    await msg(6);
}
document.querySelector(".btn-red").addEventListener("click", function handleClick() {
        console.log("button click working")
        const overlayDiv = document.createElement('div');
        overlayDiv.classList.add('overlay');

        const abxDiv = document.createElement('div');
        abxDiv.classList.add('abx');

        const boxDiv = document.createElement('div');
        boxDiv.classList.add('box');

        abxDiv.appendChild(boxDiv);
        overlayDiv.appendChild(abxDiv);

        document.querySelector(".main").appendChild(overlayDiv);
        start()
        console.log("Hacking simulation complete!");
    });


