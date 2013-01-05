<!DOCTYPE HTML>
<html>
    <head>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
        <script src="js/stats.js"></script>
        <style>
            body {
                margin: 0px;
                padding: 0px;
            }
            #container {
                background-color: #222;
                display: inline-block;
                width: 1024px;
                height: 400px;
            }
            #buttons {
                position: absolute;
                top: 5px;
                left: 10px;
            }
            #buttons > input {
                padding: 10px;
                display: block;
                margin-top: 5px;
            }
        </style>
    </head>
    <body>
        <div id="container"></div>
        <div id="buttons">
            <input type="button" id="punch" value="Punch">
        </div>
        <script src="http://www.html5canvastutorials.com/libraries/kinetic-v4.3.0-beta2.js"></script>
        <script>
            var stage = new Kinetic.Stage({
                container: 'container',
                width: 1024,
                height: 800
            });
            var background = new Kinetic.Layer();
            var foreground = new Kinetic.Layer();
            var animations = {
                idle: [{
                    x: 0,
                    y: 0,
                    width: 16,
                    height: 16
                }]
            };

            stats = new Stats();
            stats.setMode(0); // 0: fps, 1: ms

            // Align top-left
            stats.domElement.style.position = 'absolute';
            stats.domElement.style.left = '0px';
            stats.domElement.style.top = '0px';

            document.body.appendChild( stats.domElement );

            var imageObj = new Image();
            var imageObj2 = new Image();
            var spriteCount = 0;
            imageObj.onload = function() {
                for (var yIndex = 0; yIndex < 300; yIndex += 32) {
                    for (var xIndex = 0; xIndex < 1024; xIndex += 32) {
                        spriteCount++;
                        var blob = new Kinetic.Sprite({
                            x: xIndex,
                            y: yIndex,
                            image: imageObj,
                            animation: 'idle',
                            animations: animations,
                            frameRate: 1,
                            scale: [2, 2]
                        });

                        // add the shape to the background
                        background.add(blob);
                    }
                }
                console.log(spriteCount);
                var playerCharacter = new Kinetic.Sprite({
                    x: 0,
                    y: 150,
                    image: imageObj2,
                    animation: 'right',
                    animations: {
                        "right": [
                            {
                                "x": 121,
                                "y": 2,
                                "width": 20,
                                "height": 23
                            },
                            {
                                "x": 121,
                                "y": 2,
                                "width": 20,
                                "height": 23
                            },
                            {
                                "x": 241,
                                "y": 122,
                                "width": 20,
                                "height": 23
                            },
                            {
                                "x": 241,
                                "y": 122,
                                "width": 20,
                                "height": 23
                            },
                            {
                                "x": 241,
                                "y": 122,
                                "width": 20,
                                "height": 23
                            },
                            {
                                "x": 272,
                                "y": 122,
                                "width": 20,
                                "height": 23
                            },
                            {
                                "x": 272,
                                "y": 122,
                                "width": 20,
                                "height": 23
                            },
                            {
                                "x": 272,
                                "y": 122,
                                "width": 20,
                                "height": 23
                            },
                            {
                                "x": 301,
                                "y": 122,
                                "width": 20,
                                "height": 23
                            },
                            {
                                "x": 121,
                                "y": 2,
                                "width": 20,
                                "height": 23
                            }
                        ],
                    },
                    frameRate: 30,
                    scale: [2, 2]
                });

                // add the shape to the background
                foreground.add(playerCharacter);

                // add the background to the stage
                stage.add(background);
                stage.add(foreground);

                // start sprite animation
                blob.start();

                // start sprite animation
                playerCharacter.start();

                jQuery(document).bind('keydown', function () {
                    stats.begin();
                    playerCharacter.move([5, 0]);
                    stats.end();
                });

                // resume transition
                document.getElementById('punch').addEventListener('click', function() {
                    blob.setAnimation('punch');

                    blob.afterFrame(2, function() {
                        blob.setAnimation('idle');
                    });
                }, false);
            };
            imageObj.src = 'img/grass-base.png';
            imageObj2.src = 'img/player-character.png';
        </script>
    </body>
</html>