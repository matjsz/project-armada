import React, { useState, useEffect } from 'react'
import { AnimatorGeneralProvider, Animator } from '@arwes/animation'
import { BleepsProvider } from '@arwes/sounds'
import { ArwesThemeProvider, FramePentagon, StylesBaseline, Text, Figure, Button, FrameBox } from '@arwes/core';
import NavPanelGlobal from './NavPanelGlobal';
import NavPanelLocal from './NavPageLocal';
import CommPanelConnections from './CommPanelConnections';
import CommPanelTarget from './CommPanelTarget';

const ROOT_FONT_FAMILY = '"Titillium Web", sans-serif';
const IMAGE_URL = 'https://playground.arwes.dev/assets/images/wallpaper.jpg';
const SOUND_OBJECT_URL = 'https://playground.arwes.dev/assets/sounds/object.mp3';
const SOUND_TYPE_URL = 'https://playground.arwes.dev/assets/sounds/type.mp3';
const audioSettings = { common: { volume: 0.25 } };
const playersSettings = {
  object: { src: [SOUND_OBJECT_URL] },
  type: { src: [SOUND_TYPE_URL], loop: true }
};
const bleepsSettings = {
  object: { player: 'object' },
  type: { player: 'type' }
};
const generalAnimator = { duration: { enter: 200, exit: 200 } };

export default function CommPanel(props){
	const [page, setPage] = useState('connections')

    return (
        <ArwesThemeProvider>
			<StylesBaseline/>
			<BleepsProvider
				audioSettings={audioSettings}
				playersSettings={playersSettings}
				bleepsSettings={bleepsSettings}
			>
				<AnimatorGeneralProvider
					animator={generalAnimator}
				>
				<Animator animator={{ activate: true, manager: 'stagger' }}>
					<FrameBox animator={true}>
						<div style={{display: 'flex'}} id={'global'}>
							<div className='panel-sidebar'>
								<Button onClick={() => {setPage('connections')}} FrameComponent={FramePentagon}>📶</Button>
								<Button onClick={() => {setPage('target')}} FrameComponent={FramePentagon}>🔗</Button>
							</div>

							{page == 'connections' ? <CommPanelConnections world={props.world} sf1={props.sf1} /> : <CommPanelTarget changeTarget={props.changeTarget} world={props.world} sf1={props.sf1}/>}
						</div>				
					</FrameBox>
				</Animator>
				</AnimatorGeneralProvider>
			</BleepsProvider>
		</ArwesThemeProvider>
    )
}