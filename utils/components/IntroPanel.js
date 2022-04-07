import React, { useState, useEffect } from 'react'
import { AnimatorGeneralProvider, Animator } from '@arwes/animation'
import { BleepsProvider } from '@arwes/sounds'
import { ArwesThemeProvider, StylesBaseline, Button, Text, Figure, FrameBox, FrameLines } from '@arwes/core';

const SOUND_ASSEMBLE_URL = '/assemble.mp3';
const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';

const globalStyles = { body: { fontFamily: FONT_FAMILY_ROOT } };
const animatorGeneral = { duration: { enter: 200, exit: 200 } };
const audioSettings = { common: { volume: 0.25 } };
const playersSettings = {
	assemble: { src: [SOUND_ASSEMBLE_URL] },
};
const bleepsSettings = {
	assemble: { player: 'assemble' }
};

export default function SituationPanel(props){
    const [closed, changeClosed] = useState(false)
    const [stage, changeStage] = useState('initial')

    const onClose = () => {
        changeClosed(true)
    }

    useEffect(() => {
        setTimeout(() => {
            changeStage('final')
        }, (Math.floor(Math.random()*5000)+1500))
    })

    return (
        <div className='modal' style={{display: closed ? 'none' : 'block'}}>
            <div className='modal-content'>
                <ArwesThemeProvider>
                    <StylesBaseline/>
                    <BleepsProvider
                        audioSettings={audioSettings}
                        playersSettings={playersSettings}
                        bleepsSettings={bleepsSettings}
                    >
                        <AnimatorGeneralProvider
                            animator={animatorGeneral}
                        >
                            <FrameBox animator={true} pallete='secondary' style={{width: '100%', paddingBottom: '25px'}}>
                                { stage == 'initial' ? 
                                        <Text>SF-1システムを起動します。しばらくお待ちください...</Text>
                                    :
                                        <Text>システムが起動しました。 | SF-1 by 八島 <br/><br/><strong>SERIAL_NUMBER</strong> = {window.sf1.serialNumber} | <strong>CODE_NAME</strong> = {window.sf1.codeName}</Text>
                                }
                                <Button FrameComponent={FrameLines} onClick={() => {onClose()}} disabled={stage=='initial'} style={{position: 'absolute', right: 0}}>X</Button>
                            </FrameBox>
                        </AnimatorGeneralProvider>
                    </BleepsProvider>
                </ArwesThemeProvider>
            </div>
        </div>
    )
}