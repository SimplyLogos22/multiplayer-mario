/*
 * ===========================================================================
 * File: main_options_dialog.js
 * Author: Anthony Del Ciotto
 * Desc: TODO
 * ===========================================================================
 */

import OptionsDialog from 'client/gui/options_dialog';
import TextLabel from 'client/gui/text_label';
import TextButton from 'client/gui/text_label';

class MainOptionsDialog extends OptionsDialog {
    constructor(level, titleText, closeText, onCloseCallback) {
        super(level, titleText, closeText, onCloseCallback);

        this.setupOptions([
            { label: 'fullscreen:', button: 'off',
                callbackFn: this._onFullscreenToggle, callbackCtx: this},
            { label: 'audio:', button: 'on',
                callbackFn: this._onAudioToggle, callbackCtx: this}
        ]);
    }

    _onFullscreenToggle(button) {
        var scale = this.callbackCtx._level.scale;

        if (scale.isFullScreen) {
            scale.stopFullScreen();
            button.setText('off');
        } else {
            scale.startFullScreen(false);
            scale.setScreenSize();
            button.setText('on');
        }
    }

    _onAudioToggle(button) {
        var isMuted = this.callbackCtx._level.sound.mute;
        var status = (isMuted ? 'on' : 'off');

        this.callbackCtx._level.sound.mute = !this.callbackCtx._level.sound.mute;
        button.setText(status);
    }
}

export default MainOptionsDialog;
