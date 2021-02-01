while (true) {
    light.setAll(color.rgb(0, 255, 0))
    console.log("The current acceleration(going up) is " + input.acceleration(Dimension.Z))
    if (input.acceleration(Dimension.Z) > 1400) {
        console.log("This elevator is moving way too fast")
        light.setAll(color.rgb(255, 0, 0))
        music.siren.playUntilDone()
    } else if (-7 > input.rotation(Rotation.Roll) || input.rotation(Rotation.Roll) > 7) {
        console.log("error, elevator rolling too much")
        light.setAll(color.rgb(255, 255, 0))
        music.siren.playUntilDone()
    } else if (-7 > input.rotation(Rotation.Pitch) || input.rotation(Rotation.Pitch) > 7) {
        console.log("error, elevator rolling too much")
        light.setAll(color.rgb(255, 255, 55))
        music.siren.playUntilDone()
    }
    
}
