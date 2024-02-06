enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.AB, function () {
    record.playAudio(record.BlockingState.Blocking)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    record.startRecording(record.BlockingState.Blocking)
    basic.showString("Saved")
})
music.play(music.createSoundExpression(WaveShape.Noise, 1, 5000, 118, 185, 5000, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
basic.showString("Welcome")
