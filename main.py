while True:
    light.set_all(color.rgb(0, 255, 0))
    print("Elevator functioning properly")
    print("The current acceleration(going up) is "+input.acceleration(Dimension.Z))
    if input.acceleration(Dimension.Z) > 1400:
        print("This elevator is moving way too fast!")
        light.set_all(color.rgb(255, 0, 0))   
        music.siren.play()
        pause(4000)
    elif -15 > input.rotation(Rotation.PITCH) or input.rotation(Rotation.PITCH) > 10:
        print("Warning, elevator maybe unstable!") 
        light.set_all(color.rgb(255,165,0))
        music.siren.play()
        pause(4000)
    elif -15 > input.rotation(Rotation.PITCH) or input.rotation(Rotation.PITCH) > 10:
        print("Warning, elevator is unstable!")
        light.set_all(color.rgb(255,165,0))
        music.siren.play()
        pause(4000)
    

    



   
    

