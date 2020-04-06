class Game{
    constructor(){
        this.nul = 0
        this.n = 0
        this.playerOne = true
        this.playerTow = false

        this.playerOneScor = 0
        this.playerTowScor = 0

        this.playerOneHTML = document.getElementById('playerOne')
        this.playerTowHTML = document.getElementById('playerTow')

        this.cases = this.getCases()
        this._initEventCases()
    }

    getCases = ()=>{
        return Array.from(document.getElementsByClassName('case'))
    }

    checkWin = (elm, str)=>{
        if (this.cases.indexOf(elm) == 0) {
            if (this.cases[0].innerHTML == str && this.cases[1].innerHTML == str && this.cases[2].innerHTML == str || this.cases[0].innerHTML == str && this.cases[3].innerHTML == str && this.cases[6].innerHTML == str || this.cases[0].innerHTML == str && this.cases[4].innerHTML == str && this.cases[8].innerHTML == str) {
                this.win(str)
            }
        }else if(this.cases.indexOf(elm) == 1){
            if (this.cases[0].innerHTML == str && this.cases[1].innerHTML == str && this.cases[2].innerHTML == str || this.cases[1].innerHTML == str && this.cases[4].innerHTML == str && this.cases[7].innerHTML == str) {
                this.win(str)
            }
        }else if(this.cases.indexOf(elm) == 2){
            if (this.cases[0].innerHTML == str && this.cases[1].innerHTML == str && this.cases[2].innerHTML == str || this.cases[2].innerHTML == str && this.cases[5].innerHTML == str && this.cases[8].innerHTML == str || this.cases[2].innerHTML == str && this.cases[4].innerHTML == str && this.cases[6].innerHTML == str) {
                this.win(str)
            }
        }else if(this.cases.indexOf(elm) == 3){
            if (this.cases[3].innerHTML == str && this.cases[0].innerHTML == str && this.cases[6].innerHTML == str || this.cases[3].innerHTML == str && this.cases[4].innerHTML == str && this.cases[5].innerHTML == str) {
                this.win(str)
            }
        }else if(this.cases.indexOf(elm) == 4){
            if (this.cases[1].innerHTML == str && this.cases[4].innerHTML == str && this.cases[7].innerHTML == str || this.cases[3].innerHTML == str && this.cases[4].innerHTML == str && this.cases[5].innerHTML == str || this.cases[0].innerHTML == str && this.cases[4].innerHTML == str && this.cases[8].innerHTML == str || this.cases[2].innerHTML == str && this.cases[4].innerHTML == str && this.cases[6].innerHTML == str) {
                this.win(str)
            }
        }else if(this.cases.indexOf(elm) == 5){
            if (this.cases[3].innerHTML == str && this.cases[4].innerHTML == str && this.cases[5].innerHTML == str || this.cases[2].innerHTML == str && this.cases[5].innerHTML == str && this.cases[8].innerHTML == str) {
                this.win(str)
            }
        }else if(this.cases.indexOf(elm) == 6){
            if (this.cases[0].innerHTML == str && this.cases[3].innerHTML == str && this.cases[6].innerHTML == str || this.cases[6].innerHTML == str && this.cases[7].innerHTML == str && this.cases[8].innerHTML == str || this.cases[2].innerHTML == str && this.cases[4].innerHTML == str && this.cases[6].innerHTML == str) {
                this.win(str)
            }
        }else if(this.cases.indexOf(elm) == 7){
            if (this.cases[1].innerHTML == str && this.cases[4].innerHTML == str && this.cases[7].innerHTML == str || this.cases[6].innerHTML == str && this.cases[7].innerHTML == str && this.cases[8].innerHTML == str) {
                this.win(str)
            }
        }else if(this.cases.indexOf(elm) == 8){
            if (this.cases[0].innerHTML == str && this.cases[4].innerHTML == str && this.cases[8].innerHTML == str || this.cases[2].innerHTML == str && this.cases[5].innerHTML == str && this.cases[8].innerHTML == str || this.cases[6].innerHTML == str && this.cases[7].innerHTML == str && this.cases[8].innerHTML == str) {
                this.win(str)
            }
        }
    }

    win = (str) => {
        if (str == "O") {
            console.log("winer is O")
            this.addScor(this.playerOneScor, this.playerOneHTML, 'playerOne')
        }else if(str == "X"){
            console.log("winer is X")
            this.addScor(this.playerTowScor, this.playerTowHTML, 'playerTow')
        }
        this.resetCases()
    }

    resetCases = ()=>{
        this.cases.map((elm)=>{
            elm.innerHTML = ''
        })

        this.nul = 0
    }

    addScor = (player, elmentHtml, who)=>{
        player++
        elmentHtml.innerHTML = who + " : " + player

    }

    _initEventCases = ()=>{
        this.cases.map(elm => {
            elm.addEventListener('click', ()=>{
                if(this.nul == 8){
                    this.resetCases()
                    this.n++
                    this.addScor(this.nul, document.getElementById('null'), "null")
                }else{
                    if (this.playerOne == true) {
                        if (elm.innerHTML == '') {
                            this.playerOne = false
                            this.playerTow = true
    
                            elm.innerHTML = "O"
    
                            this.checkWin(elm, "O")
                        }
                    }else if(this.playerTow == true){
                        if (elm.innerHTML == '') {
                            this.playerTow = false
                            this.playerOne = true
    
                            elm.innerHTML = "X"
    
                            this.checkWin(elm, "X")
                        }
                    }
                    this.nul++
                }
            })
        })
    }
}

var a = new Game