function PingPong() {
    for(let i = 0; i < 100; i ++){
        if (i % 10 == 0){
            console.log("Ping")
        }
        else if (i % 5 == 0){
            console.log("Pong")
        }
        else{
            console.log(i)
        }
    }
}

PingPong()