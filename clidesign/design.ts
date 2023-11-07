import chalk from "chalk";
import chalkAnimation from "chalk-animation";


const sleep = () => {
    return new Promise((res)=>{
        setTimeout(res,2000);
    })
}

async function Welcome() {
    let gameTitle = chalkAnimation.neon("WELCOME TO QUIZ")
    await sleep()
    gameTitle.stop()
}

export default Welcome