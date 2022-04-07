import { AnimatorGeneralProvider, Animator } from '@arwes/animation'
import { BleepsProvider } from '@arwes/sounds'
import { ArwesThemeProvider, StylesBaseline, Text, Figure, FrameBox } from '@arwes/core';

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
    return (
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
					<FrameBox animator={true}>
						<div>SituationPanel WIP.</div>
					</FrameBox>
				</AnimatorGeneralProvider>
			</BleepsProvider>
		</ArwesThemeProvider>
    )
}