let text = document.querySelector('#text')
let cmd = [
  ">>>Initializing Hacking\n",
  ">>>Reading your Files\n",
  ">>>Password files Detected\n",
  ">>>Sending all passwords and personal files to server\n",
  ">>>Cleaning up\n"
]

async function blink() {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(".") }, 700)
  })
}

let dots = document.querySelector('.d')

async function edit(r, i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(i) }, r)
  })
}

async function blinkDots() {
  dots.innerHTML = ""
  for (let k = 0; k < 4; k++) {
    const dot = document.createElement('span')
    let d = await blink()
    dot.innerHTML = `${d}`
    dots.append(dot)
  }
  dots.innerHTML = ""
}

async function terminal() {
  for (let i of cmd) {
    let r = Math.floor(Math.random() * 6000)
    console.log(`${r / 1000}`)
    let n = document.createElement('div')
    let line = await edit(r, i)
    n.innerHTML = `\n${line}`
    text.append(n)

    await blinkDots()  // dots appear one by one, then clear
  }
}

terminal()