import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import SituationPanel from '../utils/components/SituationPanel'
import IntroPanel from '../utils/components/IntroPanel'
import SF1 from '../utils/SF1System'
import { World, Station } from '../utils/helpers/WorldSystem'
import NavPanel from '../utils/components/NavPanel'
import CombatPanel from '../utils/components/CombatPanel'
import CommPanel from '../utils/components/CommPanel'

class Page extends React.Component{
	state = {
		intro: false,
		sf1: new SF1('Figther One', 1, 1),
		world: new World(0, 0),
		stations: [new Station('Station', 'STATION-1A', Math.floor(Math.random()*8), Math.floor(Math.random()*4)), new Station('Station', 'STATION-1A', Math.floor(Math.random()*8), Math.floor(Math.random()*4)), new Station('Station', 'STATION-1A', Math.floor(Math.random()*8), Math.floor(Math.random()*4)), new Station('Station', 'STATION-1A', Math.floor(Math.random()*8), Math.floor(Math.random()*4)), new Station('Station', 'STATION-1A', Math.floor(Math.random()*8), Math.floor(Math.random()*4))]
	}

	componentDidMount(){
		console.log(`
		⢸⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⡷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
		⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠢⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
		⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠈⠑⢦⡀⠀⠀⠀⠀⠀
		⢸⠀⠀⠀⠀⢀⠖⠒⠒⠒⢤⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠙⢦⡀⠀⠀⠀⠀
		⢸⠀⠀⣀⢤⣼⣀⡠⠤⠤⠼⠤⡄⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠙⢄⠀⠀⠀⠀
		⢸⠀⠀⠑⡤⠤⡒⠒⠒⡊⠙⡏⠀⢀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⠢⡄⠀  Are ya hacking
		⢸⠀⠀⠀⠇⠀⣀⣀⣀⣀⢀⠧⠟⠁⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀       son?
		⢸⠀⠀⠀⠸⣀⠀⠀⠈⢉⠟⠓⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸
		⢸⠀⠀⠀⠀⠈⢱⡖⠋⠁⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸
		⢸⠀⠀⠀⠀⣠⢺⠧⢄⣀⠀⠀⣀⣀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸
		⢸⠀⠀⠀⣠⠃⢸⠀⠀⠈⠉⡽⠿⠯⡆⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸
		⢸⠀⠀⣰⠁⠀⢸⠀⠀⠀⠀⠉⠉⠉⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸
		⢸⠀⠀⠣⠀⠀⢸⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸
		⢸⠀⠀⠀⠀⠀⢸⠀⢇⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸
		⢸⠀⠀⠀⠀⠀⡌⠀⠈⡆⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸
		⢸⠀⠀⠀⠀⢠⠃⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸
		⢸⠀⠀⠀⠀⢸⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠷

		some info about your spaceship, comrade:

		type 'world' here to see the game's world information (shhhhhh don't tell the others)
		type 'sf1' to see your ship's information

		although it looks like a fucking cool hacker system, it doesn't change nothing 'cause i'm a better hacker

		ha.
		clown.
		`)

		window.sf1 = this.state.sf1

		this.setState({
			world: new World(this.state.sf1.location.x, this.state.sf1.location.y, this.state.stations)
		})

		window.world = this.state.world
	}

	componentDidUpdate(){
		window.world = this.state.world
		window.sf1 = this.state.sf1
	}

	changeCodeName = () => {
		this.setState({
			sf1: this.state.sf1.changeCodeName('test') 
		})
	}
	
	changeLocation = (x, y) => {
		this.setState({
			sf1: this.state.sf1.changeLocation(x, y),
			world: new World(this.state.sf1.location.x, this.state.sf1.location.y, this.state.stations)
		})
	}

	changeTarget = (target) => {
		this.setState({
			sf1: this.state.sf1.changeTarget(target)
		})
	}
	
	render(){
		return(
			<>
				<IntroPanel sf1={this.state.sf1} />

				<div style={{display: 'grid', gridTemplateColumns: '50vw 50vw', gridTemplateRows: '50vh 50vh'}}>
					<CombatPanel sf1={this.state.sf1} />
					<NavPanel sf1={this.state.sf1} world={this.state.world} changeLocation={this.changeLocation} changeTarget={this.changeTarget} />
					<CommPanel sf1={this.state.sf1} world={this.state.world} changeTarget={this.changeTarget} />
					<SituationPanel sf1={this.state.sf1} />
				</div>
			</>
		)
	}
}

export default function Home() {
	return <Page/>
}
