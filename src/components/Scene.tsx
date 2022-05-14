import { ReactNode, useEffect } from 'react';
import styles from '../styles/Scene.module.css';
import '@monogatari/core/dist/engine/core/monogatari.css';

type Props = {
    children?: ReactNode;
};

const initMonogatari = () => {
    const Monogatari = require('@monogatari/core');

    const monogatari  = Monogatari.default;
    monogatari.settings({

        // The name of your game, this will be used to store all the data so once
        // you've released a game using one name, it shouldn't change. Please use the
        // Version Setting to indicate a new release of your game!
        'Name': 'Mistery Phoenix',
    
        // The version of your game in semantic versioning (https://semver.org/).
        'Version': '0.1.0',
    
        // Initial Label *
        'Label': 'Start',
    
        // Number of AutoSave Slots
        'Slots': 10,
    
        // Change to true for a MultiLanguage GameScreen.
        'MultiLanguage': false,
    
        // If the 'Multilanguage' setting is set to `true`. This will enable a
        // language selection screen that will be shown before the asset loading
        // screen. If set to false, the loading screen will appear first instead and
        // players will have to change the language from the settings screen.
        'LanguageSelectionScreen': true,
    
        // Music for the Main Menu.
        'MainScreenMusic': '',
    
        // Prefix for the Save Slots in Local Storage.
        'SaveLabel': 'Save',
        'AutoSaveLabel': 'AutoSave',
    
        // Turn main menu on/off; Default: true *
        'ShowMainScreen': true,
    
        // Turn image preloading on/off, Default: true
        'Preload': true,
    
        // Time interval between autosaves (In Minutes). Default: 0 (Off)
        'AutoSave': 0,
    
        // Enable service workers; Default: true *
        'ServiceWorkers': false, // nextjsのローカルサーバでエラーになるのでfalse
    
        // The Aspect Ratio your background images are on. This only has effect on
        // web deployed novels if forceAspectRatio flag is on.
        'AspectRatio': '16:9',
    
        // Force aspect ratio, it will make all images to comply with aspect ratio.
        // Values: 'None' (don't force), 'Visuals' (force only visuals)
        // or 'Global' (force all game)
        'ForceAspectRatio': 'None',
    
        // Enables or disables the typing text animation for the whole game.
        'TypeAnimation': true,
    
        // Enables or disables the typing text animation in NVL dialogs for the
        // whole game.
        'NVLTypeAnimation': true,
    
        // Enables or disables the typing animation for the narrator.
        // If the previous property was set to false, the narrator won't shown
        // the animation even if this is set to true.
        'NarratorTypeAnimation': true,
    
        // Enables or disables the typing animation for the special centered
        // character. If the TypeAnimation property was set to false, the centered
        // character won't shown the animation even if this is set to true.
        'CenteredTypeAnimation': true,
    
        // Force some orientation on mobile devices. If this setting is set either
        // to portrait or landscape, a warning message will be displayed so the
        // player rotates its device.
        // Possible values: any, portrait or landscape.
        'Orientation': 'landscape',
    
        // Allow players to skip through the game. Similar to the auto play feature,
        // skipping will allow players to go through the game really fast.
        // If this value is set to 0, no skipping will be allowed but if it's set
        // to a higher number, skipping will be allowed and that value will be taken
        // as the speed in milliseconds with which the game will skip through the script
        'Skip': 0,
    
        // Define the directories where the assets are located. The root directory is
        // the holder for the other asset specific directories, this directories are
        // used when retrieving the files on the game.
        'AssetsPath': {
            'root': 'assets',
            'characters': 'characters',
            'icons': 'icons',
            'images': 'images',
            'music': 'music',
            'scenes': 'scenes',
            'sounds': 'sounds',
            'ui': 'ui',
            'videos': 'videos',
            'voices': 'voices',
            'gallery': 'gallery'
        },
    
        // Name of the Splash Screen Label. If a name is given and a label with that
        // name exists on the game's script, it will be used to show a splash screen
        // right after the loading screen.
        'SplashScreenLabel': '_SplashScreen',
    
        // Define what storage engine should be used to save the game data. *
        // Adapters Available:
        // - LocalStorage: This one is used by default
        // - SessionStorage: Same as LocalStorage but will be cleared when the page
        // 					 is closed.
        // - IndexedDB: The information is saved using the IndexedDB web API
        // - RemoteStorage: The information will be sent and retrieved from a given
        //					URL Endpoint providing a REST API.
        'Storage': {
            'Adapter': 'LocalStorage',
            'Store': 'GameData',
            'Endpoint': ''
        },
    
        // Whether players can go back to previous points of the game or not.
        // Default: true
        // If this is set to false, the "Back" button on the quick menu will not be
        // shown and the left arrow keyboard shortcut will be disabled.
        'AllowRollback': true,
    
        // Whether experimental features should be enabled or not. Default: false
        // These features are unfinished and unstable, chances are they will still
        // go through a lot of changes and functionality won't have any backward
        // compatibility rendering your save files unusable on many cases.
        'ExperimentalFeatures': false
    });
    
    // Initial Settings
    monogatari.preferences ({
    
        // Initial Language for Multilanguage Games or for the Default GUI Language.
        'Language': 'English',
    
        // Initial Volumes from 0.0 to 1.
        'Volume': {
            'Music': 1,
            'Voice': 1,
            'Sound': 1,
            'Video': 1
        },
    
        // Initial resolution used for Electron, it must match the settings inside
        // the electron.js file. This has no effect on web deployed novels.
        'Resolution': '800x600',
    
        // Speed at which dialog text will appear
        'TextSpeed': 20,
    
        // Speed at which the Auto Play feature will show the next statement
        // It is measured in seconds and starts counting after the text is
        // completely displayed.
        'AutoPlaySpeed': 5
    });

    monogatari.storage ({
        player: {
            name: ''
        }
    });

    monogatari.action ('message').messages ({
        'Help': {
            title: 'Help',
            subtitle: 'Some useful Links',
            body: `
                <p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
                <p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
            `
        }
    });
    
    // Define the notifications used in the game
    monogatari.action ('notification').notifications ({
        'Welcome': {
            title: 'Welcome',
            body: 'This is the Monogatari VN Engine',
            icon: ''
        }
    });
    
    // Define the Particles JS Configurations used in the game
    monogatari.action ('particles').particles ({
    
    });
    
    // Define the canvas objects used in the game
    monogatari.action ('canvas').objects ({
    
    });
    
    // Credits of the people involved in the creation of this awesome game
    monogatari.configuration ('credits', {
    
    });
    
    
    // Define the images that will be available on your game's image gallery
    monogatari.assets ('gallery', {
    
    });
    
    // Define the music used in the game.
    monogatari.assets ('music', {
    
    });
    
    // Define the voice files used in the game.
    monogatari.assets ('voices', {
    
    });
    
    // Define the sounds used in the game.
    monogatari.assets ('sounds', {
    
    });
    
    // Define the videos used in the game.
    monogatari.assets ('videos', {
    
    });
    
    // Define the images used in the game.
    monogatari.assets ('images', {
    
    });
    
    // Define the backgrounds for each scene.
    monogatari.assets ('scenes', {
    
    });
    
    
    // Define the Characters
    monogatari.characters ({
        'y': {
            name: 'Yui',
            color: '#5bcaff'
        }
    });

    monogatari.script ({
        // The game starts here.
        'Start': [
            'show scene #f7f6f6 with fadeIn',
            'show notification Welcome',
            {
                'Input': {
                    'Text': 'What is your name?',
                    'Validation': function (input: string) {
                        return input.trim ().length > 0;
                    },
                    'Save': function (input: string) {
                        /*
                        this.storage ({
                            player: {
                                name: input
                            }
                        });
                        */
                        return true;
                    },
                    'Revert': function () {
                        /*
                        this.storage ({
                            player: {
                                name: ''
                            }
                        });
                        */
                    },
                    'Warning': 'You must enter a name!'
                }
            },
            'y Hi {{player.name}} Welcome to Monogatari!',
            {
                'Choice': {
                    'Dialog': 'y Have you already read some documentation?',
                    'Yes': {
                        'Text': 'Yes',
                        'Do': 'jump Yes'
                    },
                    'No': {
                        'Text': 'No',
                        'Do': 'jump No'
                    }
                }
            }
        ],
    
        'Yes': [
            'y Thats awesome!',
            'y Then you are ready to go ahead and create an amazing Game!',
            'y I can’t wait to see what story you’ll tell!',
            'end'
        ],
    
        'No': [
    
            'y You can do it now.',
    
            'show message Help',
    
            'y Go ahead and create an amazing Game!',
            'y I can’t wait to see what story you’ll tell!',
            'end'
        ]
    });

    const { $_ready, $_ } = Monogatari;

    $_ready (() => {
        // 2. Inside the $_ready function:    
        monogatari.init ('#monogatari').then (() => {
            // 3. Inside the init function:
    
        });
    });
};

const Scene = ({ children }: Props) => {

    useEffect(() => {
        initMonogatari();
    },[]);

    return (
        <div className={styles.scene}>
            <div>{children}</div>
            <div id="monogatari">
                <visual-novel>
                    <language-selection-screen></language-selection-screen>
                    <loading-screen></loading-screen>
                    <main-screen>
                        <main-menu></main-menu>
                    </main-screen>
                    <game-screen>
                        <dialog-log></dialog-log>
                        <text-box></text-box>
                        <quick-menu></quick-menu>
                    </game-screen>
                    <gallery-screen></gallery-screen>
                    <credits-screen></credits-screen>
                    <load-screen></load-screen>
                    <save-screen></save-screen>
                    <settings-screen></settings-screen>
                    <help-screen></help-screen>
                </visual-novel>
            </div>
        </div>    
    );
};

export default Scene;