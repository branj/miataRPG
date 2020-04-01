import { FocusNodeFactory } from "../factories/FocusNodeFactory"

export const FOCUS_NODES = [
    FocusNodeFactory.make(
        '1',
        'Brakes', 
        'Can your Miata stop on a dime?', 
        "stop, fast, go", 
        "#ff7875",
        FocusNodeFactory.makeStat(0, 3, 1, 2, 0)
    ),
    FocusNodeFactory.make(
        '2',
        'Fluids', 
        'Is everything topped off and clean?', 
        "stop, fast, go",
        "#ff7a45",
        FocusNodeFactory.makeStat(1, 2, 1, 2, 0)
        ),
    FocusNodeFactory.make(
        '3',
        'Engine', 
        'Determines the overall accelration and performance',
         "stop, fast, go", 
         "#fa8c16",
         FocusNodeFactory.makeStat(3, 0, 3, 0, 0)
        ),
    FocusNodeFactory.make(
        '4',
        'Drive Train',
        'Determines accepration and how smooth the shifting feels.', 
        "stop, fast, go", 
        "#096dd9",
        FocusNodeFactory.makeStat(3, 3, 3, 2, 0)
    ),    
    FocusNodeFactory.make(
        '5',
        'Chassis',
        'Determines ridgity and impacts handling and accelration.', 
        "stop, fast, go", 
        "#fff1b8",
        FocusNodeFactory.makeStat(2, 1, 1, 1, 0)
        ),
    FocusNodeFactory.make(
        '6',
        'Electrical', 
        'Determines saftely performance',
        "stop, fast, go",
        "#722ed1",
        FocusNodeFactory.makeStat(0, 1, 1, 1, 0)
        ),
    FocusNodeFactory.make(
        '7',
        'Noise Vibration Handling', 
        'How loud or quiet is your Miata',
        "stop, fast, go",
        "#9e1068",
        FocusNodeFactory.makeStat(0, 1, 1, 1, 0)
        ),
    FocusNodeFactory.make(
        '8',
        'Interior', 
        'Not that it matters...',
        "stop, fast, go",
        "#adc6ff",
        FocusNodeFactory.makeStat(0, 1, 1, 1, 0)
    ),
]