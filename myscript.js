function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("start").style.marginLeft = "250px";
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("start").style.marginLeft = "0px";

}

function showTime () {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = "AM";

   if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = `${h}:${m}:${s} ${session}`;

    document.getElementById("clock_display").innerText = time;
    document.getElementById("clock_display").textContent = time;
    
    setTimeout(showTime, 1000);
}

showTime();

function calculator () {
  
}






const ethereumButton = document.querySelector('.sendEthButton');
const sendEthButton = document.querySelector('.sendEthButton');

let accounts = [];

//Sending Ethereum to an address
sendEthButton.addEventListener('click', () => {
  ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: accounts[0],
          to: '0xBA23FFb7f86001F69266B56809E2Ef32d8287545',
          value: 'c6f3b40b6c000',
          gasPrice: '0x09184e72a000',
          gas: '0x2710',
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error);
});

ethereumButton.addEventListener('click', () => {
  getAccount();
});

async function getAccount() {
  accounts = await ethereum.request({ method: 'eth_requestAccounts' });
}
