import React, { useState, useEffect } from 'react'
import { AnimatorGeneralProvider, Animator } from '@arwes/animation'
import { BleepsProvider } from '@arwes/sounds'
import { ArwesThemeProvider, LoadingBars, FrameCorners, FrameLines, StylesBaseline, Text, Figure, Button, FrameBox } from '@arwes/core';

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

export default function CommPanelTarget(props){
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
                <Animator animator={{animate: false}}>
                    <div style={{marginLeft: '2rem', marginTop: '1rem'}}>
                        <div style={{display: 'grid',  gridTemplateColumns: '40vw', gridTemplateRows: '40vh'}}>
                            <FrameLines>
                                <center>
                                    <pre>
                                        {props.sf1.target != null ? 
                                            <>
                                                <p>CONNECTION ESTABLISHED<br/>{props.sf1.target.codeName}</p>
                                                <Button onClick={() => {props.changeTarget(null)}}>Disconnect</Button>
                                            </> 
                                        : 
                                            <p>NO CONNECTION ESTABLISHED</p>}
                                    </pre>
                                </center>

                                {props.sf1.target != null ? 
                                    props.sf1.target.icon == '🛰️' ? 
                                        <center>
                                            <Button FrameComponent={FrameCorners}>Ask permission to dock</Button>
                                            <br/><br/>
                                            <Button FrameComponent={FrameCorners}>Ask for reinforcements</Button>
                                        </center>
                                    :
                                        null
                                :
                                    null}
                            </FrameLines>
                        </div>
                    </div>
                </Animator>
                </AnimatorGeneralProvider>
            </BleepsProvider>
        </ArwesThemeProvider>
    )
}