while True:
    light.set_all(color.rgb(0, 255, 0))
    print("The current acceleration(going up) is "+input.acceleration(Dimension.Z))
    if input.acceleration(Dimension.Z) > 1400:
        print("This elevator is moving way too fast")
        light.set_all(color.rgb(255, 0, 0))
        music.siren.play_until_done()

    elif -7 > input.rotation(Rotation.ROLL) or input.rotation(Rotation.ROLL) > 7 :
        print("error, elevator rolling too much") 
        light.set_all(color.rgb(255, 255, 0))
        music.siren.play_until_done()
    elif -7 > input.rotation(Rotation.PITCH) or input.rotation(Rotation.PITCH) > 7 :
        print("error, elevator rolling too much")
        light.set_all(color.rgb(255, 255, 55))
        music.siren.play_until_done()
        
    

