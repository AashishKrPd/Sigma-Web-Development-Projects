const addItem = async (item)=>{
    await randoDelay();
    let div = document.createElement("div")
    div.innerHTML = item;
    document.body.append(div)
}

const randoDelay = () =>{
    return new Promise((resolve, reject)=>{
        timeout = 1+ 6*Math.random();
        setTimeout(() => {
            resolve()
        }, timeout*1000);
    })
}

async function main(){

    let t = setInterval(() => {
        let last = document.body.getElementsByTagName("div");
        last = last[last.length-1]
        // console.log(last.length);
        
        if (last.innerHTML.endsWith("...")){
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3);
        }
        else{
            last.innerHTML += ".";
        }
    }, 100);

    let text = ["Initialized Hacking and Reading OS", "Reading Your Files", "Password File Detected", "Sending all Password and Personal Files to servers", "Cleaning Up"]
    
    
    for (const item of text) {
        await addItem(item);
    }
    await randoDelay();
    clearInterval(t);
    alert("Just Kidding 😅");
}
main()