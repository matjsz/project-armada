// Internal Utils
function generateStationCodeName(){
    return 'STATION '+Math.floor(Math.random()*1000)+'ABCD'[Math.floor(Math.random()*4)]
}

function generateIPV4(type){
    if(type == 'station'){
        return Math.floor(Math.random()*300)+'.'+Math.floor(Math.random()*300)+'.'+Math.floor(Math.random()*300)+'.'+Math.floor(Math.random()*100)
    }
}

function newSerialNumber(){
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
    let s = ''

    for(let i = 0; i<23; i++){
        s += i == 5 ? '-' : i == 11 ? '-' : i == 17 ? '-' : chars[Math.floor(Math.random()*chars.length)]
    }

    return s
}

class Station{
    constructor(name, codeName, x, y){
        this.ipv4 = generateIPV4('station')
        this.name = name,
        this.codeName = generateStationCodeName()
        this.serialNumber = newSerialNumber()
        this.icon = '🛰️'
        this.x = x,
        this.y = y
    }
}

class World{
    constructor(sf1X, sf1Y, stations=[], battlefields=[]){
        this.stations = stations // Will have Stations
        this.battlefields = battlefields // Will have Battles, which will have Spaceships (allies and enemies)

        this.grid = [[[], [], [], [], [], [], [], []],
                     [[], [], [], [], [], [], [], []],
                     [[], [], [], [], [], [], [], []],
                     [[], [], [], [], [], [], [], []]
                    ]
                    
        // Add player to the map
        this.grid[sf1Y][sf1X].push({icon: '🔷'})

        // Add stations to the map
        for(let i=0; i<this.stations.length; i++){
            this.grid[this.stations[i].y][this.stations[i].x].push(this.stations[i])
        }
    }
}

export { World, Station }