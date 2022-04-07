import React, { useState, useEffect } from 'react'
import { AnimatorGeneralProvider, Animator } from '@arwes/animation'
import { BleepsProvider } from '@arwes/sounds'
import { ArwesThemeProvider, FramePentagon, StylesBaseline, Text, Figure, Button, FrameBox } from '@arwes/core';

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

export default function NavPanelGlobal(props){
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
                        <div style={{display: 'grid',  gridTemplateColumns: '5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw', gridTemplateRows: '5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw'}}>
                            <Button FrameComponent={FrameBox} onClick={() => {props.changeLocation(0, 0)}}>{props.world.grid[0][0][0] != undefined ? props.world.grid[0][0][0].icon : ''}</Button>
                            <Button FrameComponent={FrameBox} onClick={() => {props.changeLocation(1, 0)}}>{props.world.grid[0][1][0] != undefined ? props.world.grid[0][1][0].icon : ''}</Button>
                            <Button FrameComponent={FrameBox} onClick={() => {props.changeLocation(2, 0)}}>{props.world.grid[0][2][0] != undefined ? props.world.grid[0][2][0].icon : ''}</Button>
                            <Button FrameComponent={FrameBox} onClick={() => {props.changeLocation(3, 0)}}>{props.world.grid[0][3][0] != undefined ? props.world.grid[0][3][0].icon : ''}</Button>
                            <Button FrameComponent={FrameBox} onClick={() => {props.changeLocation(4, 0)}}>{props.world.grid[0][4][0] != undefined ? props.world.grid[0][4][0].icon : ''}</Button>
                            <Button FrameComponent={FrameBox} onClick={() => {props.changeLocation(5, 0)}}>{props.world.grid[0][5][0] != undefined ? props.world.grid[0][5][0].icon : ''}</Button>
                            <Button FrameComponent={FrameBox} onClick={() => {props.changeLocation(6, 0)}}>{props.world.grid[0][6][0] != undefined ? props.world.grid[0][6][0].icon : ''}</Button>
                            <Button FrameComponent={FrameBox} onClick={() => {props.changeLocation(7, 0)}}>{props.world.grid[0][7][0] != undefined ? props.world.grid[0][7][0].icon : ''}</Button>

                            <Button FrameComponent={FrameBox} onClick={() => {props.changeLocation(0, 1)}}>{props.world.grid[1][0][0] != undefined ? props.world.grid[1][0][0].icon : ''}</Button>
                            <Button FrameComponent={FrameBox} onClick={() => {props.changeLocation(1, 1)}}>{props.world.grid[1][1][0] != undefined ? props.world.grid[1][1][0].icon : ''}</Button>
                            <Button FrameComponent={FrameBox} onClick={() => {props.changeLocation(2, 1)}}>{props.world.grid[1][2][0] != undefined ? props.world.grid[1][2][0].icon : ''}</Button>
                            <Button FrameComponent={FrameBox} onClick={() => {props.changeLocation(3, 1)}}>{props.world.grid[1][3][0] != undefined ? props.world.grid[1][3][0].icon : ''}</Button>
                            <Button FrameComponent={FrameBox} onClick={() => {props.changeLocation(4, 1)}}>{props.world.grid[1][4][0] != undefined ? props.world.grid[1][4][0].icon : ''}</Button>
                            <Button FrameComponent={FrameBox} onClick={() => {props.changeLocation(5, 1)}}>{props.world.grid[1][5][0] != undefined ? props.world.grid[1][5][0].icon : ''}</Button>
                            <Button FrameComponent={FrameBox} onClick={() => {props.changeLocation(6, 1)}}>{props.world.grid[1][6][0] != undefined ? props.world.grid[1][6][0].icon : ''}</Button>
                            <Button FrameComponent={FrameBox} onClick={() => {props.changeLocation(7, 1)}}>{props.world.grid[1][7][0] != undefined ? props.world.grid[1][7][0].icon : ''}</Button>

                            <Button FrameComponent={FrameBox} onClick={() => {props.changeLocation(0, 2)}}>{props.world.grid[2][0][0] != undefined ? props.world.grid[2][0][0].icon : ''}</Button>
                            <Button FrameComponent={FrameBox} onClick={() => {props.changeLocation(1, 2)}}>{props.world.grid[2][1][0] != undefined ? props.world.grid[2][1][0].icon : ''}</Button>
                            <Button FrameComponent={FrameBox} onClick={() => {props.changeLocation(2, 2)}}>{props.world.grid[2][2][0] != undefined ? props.world.grid[2][2][0].icon : ''}</Button>
                            <Button FrameComponent={FrameBox} onClick={() => {props.changeLocation(3, 2)}}>{props.world.grid[2][3][0] != undefined ? props.world.grid[2][3][0].icon : ''}</Button>
                            <Button FrameComponent={FrameBox} onClick={() => {props.changeLocation(4, 2)}}>{props.world.grid[2][4][0] != undefined ? props.world.grid[2][4][0].icon : ''}</Button>
                            <Button FrameComponent={FrameBox} onClick={() => {props.changeLocation(5, 2)}}>{props.world.grid[2][5][0] != undefined ? props.world.grid[2][5][0].icon : ''}</Button>
                            <Button FrameComponent={FrameBox} onClick={() => {props.changeLocation(6, 2)}}>{props.world.grid[2][6][0] != undefined ? props.world.grid[2][6][0].icon : ''}</Button>
                            <Button FrameComponent={FrameBox} onClick={() => {props.changeLocation(7, 2)}}>{props.world.grid[2][7][0] != undefined ? props.world.grid[2][7][0].icon : ''}</Button>

                            <Button FrameComponent={FrameBox} onClick={() => {props.changeLocation(0, 3)}}>{props.world.grid[3][0][0] != undefined ? props.world.grid[3][0][0].icon : ''}</Button>
                            <Button FrameComponent={FrameBox} onClick={() => {props.changeLocation(1, 3)}}>{props.world.grid[3][1][0] != undefined ? props.world.grid[3][1][0].icon : ''}</Button>
                            <Button FrameComponent={FrameBox} onClick={() => {props.changeLocation(2, 3)}}>{props.world.grid[3][2][0] != undefined ? props.world.grid[3][2][0].icon : ''}</Button>
                            <Button FrameComponent={FrameBox} onClick={() => {props.changeLocation(3, 3)}}>{props.world.grid[3][3][0] != undefined ? props.world.grid[3][3][0].icon : ''}</Button>
                            <Button FrameComponent={FrameBox} onClick={() => {props.changeLocation(4, 3)}}>{props.world.grid[3][4][0] != undefined ? props.world.grid[3][4][0].icon : ''}</Button>
                            <Button FrameComponent={FrameBox} onClick={() => {props.changeLocation(5, 3)}}>{props.world.grid[3][5][0] != undefined ? props.world.grid[3][5][0].icon : ''}</Button>
                            <Button FrameComponent={FrameBox} onClick={() => {props.changeLocation(6, 3)}}>{props.world.grid[3][6][0] != undefined ? props.world.grid[3][6][0].icon : ''}</Button>
                            <Button FrameComponent={FrameBox} onClick={() => {props.changeLocation(7, 3)}}>{props.world.grid[3][7][0] != undefined ? props.world.grid[3][7][0].icon : ''}</Button>
                        </div>
                    </div>
                </Animator>
                </AnimatorGeneralProvider>
            </BleepsProvider>
        </ArwesThemeProvider>
    )
}