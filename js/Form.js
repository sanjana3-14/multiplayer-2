class Form {
    constructor(){

    }
    display(){
        var title = createElement("H1")
        title.html("CAR RACE")
        title.position(130,0)

        var input = createInput("name")
        input.position(130,160)

        var button = createButton("play")
        button.position(250,200)

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value()
            playerCount +=1
            player.update(name);
            player.updateCount(playerCount);

            var greeting = createElement("H3")
            greeting.html("hello "+name)
            greeting.position(130,130)
        })
    }
}
