while (true) {
    light.setAll(color.rgb(0, 255, 0))
    console.log("Elevator functioning properly")
    console.log("The current acceleration(going up) is " + input.acceleration(Dimension.Z))
    if (input.acceleration(Dimension.Z) > 1400) {
        console.log("This elevator is moving way too fast!")
        light.setAll(color.rgb(255, 0, 0))
        music.siren.play()
        pause(4000)
    } else if (-15 > input.rotation(Rotation.Pitch) || input.rotation(Rotation.Pitch) > 10) {
        console.log("Warning, elevator maybe unstable!")
        light.setAll(color.rgb(255, 165, 0))
        music.siren.play()
        pause(4000)
    } else if (-15 > input.rotation(Rotation.Pitch) || input.rotation(Rotation.Pitch) > 10) {
        console.log("Warning, elevator is unstable!")
        light.setAll(color.rgb(255, 165, 0))
        music.siren.play()
        pause(4000)
    }
    
}
