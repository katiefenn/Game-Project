define(
    ['config/scripts/DoorOpener'],
    function (DoorOpener) {
        var spritesheets = {
            "grass": {"animations": {"idle": {"frames": [0], "next": "idle"}},"images": ["source/img/grass.png"],"frames": [[0, 0, 40, 73, 0, 0, 0]]},
            "church": {"animations": {"idle": {"frames": [0], "next": "idle"}},"images": ["source/img/church.png"],"frames": [[0, 0, 218, 315, 0, 0, 0]]},
            "door": {
                "animations": {
                    "idle": 0,
                    "open": 1,
                    "closed": 0
                },
                "images": ["source/img/door.png"],
                "frames": [[192, 15, 32, 49, 0, 0, 0], [192, 144, 32, 49, 0, 0, 0]]
            }
        };

        var config = {
            "sprites": [
                {"name": "grass1", "spritesheet": spritesheets.grass, "properties": {"x": 0, "y": 0, "scaleX": 2, "scaleY": 2}},
                {"name": "grass2", "spritesheet": spritesheets.grass, "properties": {"x": 80, "y": 0, "scaleX": 2, "scaleY": 2}},
                {"name": "grass3", "spritesheet": spritesheets.grass, "properties": {"x": 160, "y": 0, "scaleX": 2, "scaleY": 2}},
                {"name": "grass4", "spritesheet": spritesheets.grass, "properties": {"x": 240, "y": 0, "scaleX": 2, "scaleY": 2}},
                {"name": "grass5", "spritesheet": spritesheets.grass, "properties": {"x": 320, "y": 0, "scaleX": 2, "scaleY": 2}},
                {"name": "grass6", "spritesheet": spritesheets.grass, "properties": {"x": 400, "y": 0, "scaleX": 2, "scaleY": 2}},
                {"name": "grass7", "spritesheet": spritesheets.grass, "properties": {"x": 480, "y": 0, "scaleX": 2, "scaleY": 2}},
                {"name": "grass8", "spritesheet": spritesheets.grass, "properties": {"x": 560, "y": 0, "scaleX": 2, "scaleY": 2}},
                {"name": "grass9", "spritesheet": spritesheets.grass, "properties": {"x": 640, "y": 0, "scaleX": 2, "scaleY": 2}},
                {"name": "grass10", "spritesheet": spritesheets.grass, "properties": {"x": 720, "y": 0, "scaleX": 2, "scaleY": 2}},
                {"name": "grass11", "spritesheet": spritesheets.grass, "properties": {"x": 800, "y": 0, "scaleX": 2, "scaleY": 2}},
                {"name": "grass12", "spritesheet": spritesheets.grass, "properties": {"x": 880, "y": 0, "scaleX": 2, "scaleY": 2}},
                {"name": "grass13", "spritesheet": spritesheets.grass, "properties": {"x": 960, "y": 0, "scaleX": 2, "scaleY": 2}},
                {"name": "grass14", "spritesheet": spritesheets.grass, "properties": {"x": 1040, "y": 0, "scaleX": 2, "scaleY": 2}},
                {"name": "grass15", "spritesheet": spritesheets.grass, "properties": {"x": 0, "y": 140, "scaleX": 2, "scaleY": 2}},
                {"name": "grass16", "spritesheet": spritesheets.grass, "properties": {"x": 80, "y": 140, "scaleX": 2, "scaleY": 2}},
                {"name": "grass17", "spritesheet": spritesheets.grass, "properties": {"x": 160, "y": 140, "scaleX": 2, "scaleY": 2}},
                {"name": "grass18", "spritesheet": spritesheets.grass, "properties": {"x": 240, "y": 140, "scaleX": 2, "scaleY": 2}},
                {"name": "grass19", "spritesheet": spritesheets.grass, "properties": {"x": 320, "y": 140, "scaleX": 2, "scaleY": 2}},
                {"name": "grass20", "spritesheet": spritesheets.grass, "properties": {"x": 400, "y": 140, "scaleX": 2, "scaleY": 2}},
                {"name": "grass21", "spritesheet": spritesheets.grass, "properties": {"x": 480, "y": 140, "scaleX": 2, "scaleY": 2}},
                {"name": "grass22", "spritesheet": spritesheets.grass, "properties": {"x": 560, "y": 140, "scaleX": 2, "scaleY": 2}},
                {"name": "grass23", "spritesheet": spritesheets.grass, "properties": {"x": 640, "y": 140, "scaleX": 2, "scaleY": 2}},
                {"name": "grass24", "spritesheet": spritesheets.grass, "properties": {"x": 720, "y": 140, "scaleX": 2, "scaleY": 2}},
                {"name": "grass25", "spritesheet": spritesheets.grass, "properties": {"x": 800, "y": 140, "scaleX": 2, "scaleY": 2}},
                {"name": "grass26", "spritesheet": spritesheets.grass, "properties": {"x": 880, "y": 140, "scaleX": 2, "scaleY": 2}},
                {"name": "grass27", "spritesheet": spritesheets.grass, "properties": {"x": 960, "y": 140, "scaleX": 2, "scaleY": 2}},
                {"name": "grass28", "spritesheet": spritesheets.grass, "properties": {"x": 1040, "y": 140, "scaleX": 2, "scaleY": 2}},
                {"name": "grass29", "spritesheet": spritesheets.grass, "properties": {"x": 0, "y": 280, "scaleX": 2, "scaleY": 2}},
                {"name": "grass30", "spritesheet": spritesheets.grass, "properties": {"x": 80, "y": 280, "scaleX": 2, "scaleY": 2}},
                {"name": "grass31", "spritesheet": spritesheets.grass, "properties": {"x": 160, "y": 280, "scaleX": 2, "scaleY": 2}},
                {"name": "grass32", "spritesheet": spritesheets.grass, "properties": {"x": 240, "y": 280, "scaleX": 2, "scaleY": 2}},
                {"name": "grass33", "spritesheet": spritesheets.grass, "properties": {"x": 320, "y": 280, "scaleX": 2, "scaleY": 2}},
                {"name": "grass34", "spritesheet": spritesheets.grass, "properties": {"x": 400, "y": 280, "scaleX": 2, "scaleY": 2}},
                {"name": "grass35", "spritesheet": spritesheets.grass, "properties": {"x": 480, "y": 280, "scaleX": 2, "scaleY": 2}},
                {"name": "grass36", "spritesheet": spritesheets.grass, "properties": {"x": 560, "y": 280, "scaleX": 2, "scaleY": 2}},
                {"name": "grass37", "spritesheet": spritesheets.grass, "properties": {"x": 640, "y": 280, "scaleX": 2, "scaleY": 2}},
                {"name": "grass38", "spritesheet": spritesheets.grass, "properties": {"x": 720, "y": 280, "scaleX": 2, "scaleY": 2}},
                {"name": "grass39", "spritesheet": spritesheets.grass, "properties": {"x": 800, "y": 280, "scaleX": 2, "scaleY": 2}},
                {"name": "grass40", "spritesheet": spritesheets.grass, "properties": {"x": 880, "y": 280, "scaleX": 2, "scaleY": 2}},
                {"name": "grass41", "spritesheet": spritesheets.grass, "properties": {"x": 960, "y": 280, "scaleX": 2, "scaleY": 2}},
                {"name": "grass42", "spritesheet": spritesheets.grass, "properties": {"x": 1040, "y": 280, "scaleX": 2, "scaleY": 2}},
                {"name": "grass43", "spritesheet": spritesheets.grass, "properties": {"x": 0, "y": 420, "scaleX": 2, "scaleY": 2}},
                {"name": "grass44", "spritesheet": spritesheets.grass, "properties": {"x": 80, "y": 420, "scaleX": 2, "scaleY": 2}},
                {"name": "grass45", "spritesheet": spritesheets.grass, "properties": {"x": 160, "y": 420, "scaleX": 2, "scaleY": 2}},
                {"name": "grass46", "spritesheet": spritesheets.grass, "properties": {"x": 240, "y": 420, "scaleX": 2, "scaleY": 2}},
                {"name": "grass47", "spritesheet": spritesheets.grass, "properties": {"x": 320, "y": 420, "scaleX": 2, "scaleY": 2}},
                {"name": "grass48", "spritesheet": spritesheets.grass, "properties": {"x": 400, "y": 420, "scaleX": 2, "scaleY": 2}},
                {"name": "grass49", "spritesheet": spritesheets.grass, "properties": {"x": 480, "y": 420, "scaleX": 2, "scaleY": 2}},
                {"name": "grass50", "spritesheet": spritesheets.grass, "properties": {"x": 560, "y": 420, "scaleX": 2, "scaleY": 2}},
                {"name": "grass51", "spritesheet": spritesheets.grass, "properties": {"x": 640, "y": 420, "scaleX": 2, "scaleY": 2}},
                {"name": "grass52", "spritesheet": spritesheets.grass, "properties": {"x": 720, "y": 420, "scaleX": 2, "scaleY": 2}},
                {"name": "grass53", "spritesheet": spritesheets.grass, "properties": {"x": 800, "y": 420, "scaleX": 2, "scaleY": 2}},
                {"name": "grass54", "spritesheet": spritesheets.grass, "properties": {"x": 880, "y": 420, "scaleX": 2, "scaleY": 2}},
                {"name": "grass55", "spritesheet": spritesheets.grass, "properties": {"x": 960, "y": 420, "scaleX": 2, "scaleY": 2}},
                {"name": "grass56", "spritesheet": spritesheets.grass, "properties": {"x": 1040, "y": 420, "scaleX": 2, "scaleY": 2}},
                {"name": "grass57", "spritesheet": spritesheets.grass, "properties": {"x": 0, "y": 560, "scaleX": 2, "scaleY": 2}},
                {"name": "grass58", "spritesheet": spritesheets.grass, "properties": {"x": 80, "y": 560, "scaleX": 2, "scaleY": 2}},
                {"name": "grass59", "spritesheet": spritesheets.grass, "properties": {"x": 160, "y": 560, "scaleX": 2, "scaleY": 2}},
                {"name": "grass60", "spritesheet": spritesheets.grass, "properties": {"x": 240, "y": 560, "scaleX": 2, "scaleY": 2}},
                {"name": "grass61", "spritesheet": spritesheets.grass, "properties": {"x": 320, "y": 560, "scaleX": 2, "scaleY": 2}},
                {"name": "grass62", "spritesheet": spritesheets.grass, "properties": {"x": 400, "y": 560, "scaleX": 2, "scaleY": 2}},
                {"name": "grass63", "spritesheet": spritesheets.grass, "properties": {"x": 480, "y": 560, "scaleX": 2, "scaleY": 2}},
                {"name": "grass64", "spritesheet": spritesheets.grass, "properties": {"x": 560, "y": 560, "scaleX": 2, "scaleY": 2}},
                {"name": "grass65", "spritesheet": spritesheets.grass, "properties": {"x": 640, "y": 560, "scaleX": 2, "scaleY": 2}},
                {"name": "grass66", "spritesheet": spritesheets.grass, "properties": {"x": 720, "y": 560, "scaleX": 2, "scaleY": 2}},
                {"name": "grass67", "spritesheet": spritesheets.grass, "properties": {"x": 800, "y": 560, "scaleX": 2, "scaleY": 2}},
                {"name": "grass68", "spritesheet": spritesheets.grass, "properties": {"x": 880, "y": 560, "scaleX": 2, "scaleY": 2}},
                {"name": "grass69", "spritesheet": spritesheets.grass, "properties": {"x": 960, "y": 560, "scaleX": 2, "scaleY": 2}},
                {"name": "grass70", "spritesheet": spritesheets.grass, "properties": {"x": 1040, "y": 560, "scaleX": 2, "scaleY": 2}},
                {"name": "grass71", "spritesheet": spritesheets.grass, "properties": {"x": 0, "y": 700, "scaleX": 2, "scaleY": 2}},
                {"name": "grass72", "spritesheet": spritesheets.grass, "properties": {"x": 80, "y": 700, "scaleX": 2, "scaleY": 2}},
                {"name": "grass73", "spritesheet": spritesheets.grass, "properties": {"x": 160, "y": 700, "scaleX": 2, "scaleY": 2}},
                {"name": "grass74", "spritesheet": spritesheets.grass, "properties": {"x": 240, "y": 700, "scaleX": 2, "scaleY": 2}},
                {"name": "grass75", "spritesheet": spritesheets.grass, "properties": {"x": 320, "y": 700, "scaleX": 2, "scaleY": 2}},
                {"name": "grass76", "spritesheet": spritesheets.grass, "properties": {"x": 400, "y": 700, "scaleX": 2, "scaleY": 2}},
                {"name": "grass77", "spritesheet": spritesheets.grass, "properties": {"x": 480, "y": 700, "scaleX": 2, "scaleY": 2}},
                {"name": "grass78", "spritesheet": spritesheets.grass, "properties": {"x": 560, "y": 700, "scaleX": 2, "scaleY": 2}},
                {"name": "grass79", "spritesheet": spritesheets.grass, "properties": {"x": 640, "y": 700, "scaleX": 2, "scaleY": 2}},
                {"name": "grass80", "spritesheet": spritesheets.grass, "properties": {"x": 720, "y": 700, "scaleX": 2, "scaleY": 2}},
                {"name": "grass81", "spritesheet": spritesheets.grass, "properties": {"x": 800, "y": 700, "scaleX": 2, "scaleY": 2}},
                {"name": "grass82", "spritesheet": spritesheets.grass, "properties": {"x": 880, "y": 700, "scaleX": 2, "scaleY": 2}},
                {"name": "grass83", "spritesheet": spritesheets.grass, "properties": {"x": 960, "y": 700, "scaleX": 2, "scaleY": 2}},
                {"name": "grass84", "spritesheet": spritesheets.grass, "properties": {"x": 1040, "y": 700, "scaleX": 2, "scaleY": 2}},
                {"name": "church", "spritesheet": spritesheets.church, "properties": {"x": 496, "y": 22, "scaleX": 2, "scaleY": 2}},
                {"name": "church-door", "spritesheet": spritesheets.door, "properties": {"x": 685, "y": 535, "scaleX": 2, "scaleY": 2}}
            ],
            "clipConfig": [[896, 688, 1024, 688, 1024, 736, 928, 736, 928, 832, 896, 832]],
            "setPieces": {
                "church": {"sprites": ["church"], "x": 496, "y": 22},
                "church-door": {"sprites": ["church-door"], "x": 685, "y": 535}
            },
            "scripts": [new DoorOpener('church-door')]
        };

        return config;
    }
);