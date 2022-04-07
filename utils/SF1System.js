// Internal Utils
function newSerialNumber(){
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
    let s = ''

    for(let i = 0; i<23; i++){
        s += i == 5 ? '-' : i == 11 ? '-' : i == 17 ? '-' : chars[Math.floor(Math.random()*chars.length)]
    }

    return s
}

export default class SF1{
    constructor(codeName, x, y){
        this.codeName = codeName
        this.target = null 
        this.serialNumber = newSerialNumber()
        this.location = {
            x: x,
            y: y
        }
    }

    changeLocation(newX, newY, worldInfo){
        this.location = {
            x: newX,
            y: newY
        }
        return this
    }

    changeCodeName(newCodeName){
        this.codeName = newCodeName
        return this
    }

    changeTarget(target){
        this.target = target
        return this
    }
}