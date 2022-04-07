import React, { useState, useEffect } from 'react'
import { AnimatorGeneralProvider, Animator } from '@arwes/animation'
import { BleepsProvider } from '@arwes/sounds'
import { ArwesThemeProvider, LoadingBars, FrameCorners, StylesBaseline, Text, Figure, Button, FrameBox } from '@arwes/core';

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

export default function NavPanelLocal(props){
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
                            <FrameCorners>
                                <div style={{display: 'grid', gridTemplateColumns: '4.8vw 4.8vw 4.8vw 4.8vw 4.8vw 4.8vw 4.8vw 4.8vw', gridAutoRows: '4.8vh 4.8vh 4.8vh 4.8vh 4.8vh 4.8vh 4.8vh 4.8vh'}}>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>

                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>

                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>

                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>

                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>

                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>

                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                    <FrameBox FrameComponent={FrameBox}></FrameBox>
                                </div>
                                {props.world.grid[props.sf1.location.y][props.sf1.location.x].map(el => (
                                    el.icon != '🔷' 
                                        ? 
                                        Math.random()*100 > 50 
                                            ? 
                                            // Buttons to communicate with CommPanel and CombatPanel (to lock at targets)
                                            <button onClick={() => {props.changeTarget(el)}} style={{background: 'none', position: 'absolute', left: Math.floor((Math.random()*100)), top: Math.floor((Math.random()*100))}}>{el.icon}</button> 
                                            : 
                                            <button onClick={() => {props.changeTarget(el)}} style={{background: 'none', position: 'absolute', right: Math.floor((Math.random()*100)), top: Math.floor((Math.random()*100))}}>{el.icon}</button> 
                                        : 
                                        null
                                    ))}
                                <p style={{position: 'absolute', top: '17.5vh', right: '18.5vw'}}>🔷</p>
                                <p style={{position: 'absolute', top: '34.5vh'}}>SCANNING SECTOR <LoadingBars size={0.5} animator={{ activate: true }} /></p>
                            </FrameCorners>
                        </div>
                    </div>
                </Animator>
                </AnimatorGeneralProvider>
            </BleepsProvider>
        </ArwesThemeProvider>
    )
}