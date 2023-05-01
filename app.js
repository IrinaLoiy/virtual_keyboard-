const Keyboard = {
    elements: {
        main: null,
        keysContainer: null,
        keys: [] 
    },

    eventHandlers: {
        oninput: null,
        onclose: null 
    }, 

    properties: {
        value: "",
        capsLock: false
    },

    init () {
        // Создает основные элементы
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

        // Настройка основных элементов
        this.elements.main.classList.add("keyboard");
        this.elements.keysContainer.classList.add("keyboard_keys");
        this.elements.keysContainer.appendChild( this._createKeys());

        // Добавление в DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);
    },

    _createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Enter', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash', 'ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ControlLeft', 'AltLeft', 'MetaLeft', 'Space', 'MetaRight', 'AltRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'];
        
        // Создание HTML для icon
        const createIconHTML = (icon_name) => {
            return '<i class="material-icons">${icon_name}</i>'
        };

        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const inserLineBreak = ["backspace", "p", "enter", "?"].indexOf(key) !== -1;
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard_key");

            switch (key) {
                case "backspace":
                    keyElement.innerHTML = createIconHTML("backspace");
                    keyElement.addEventListener('click', () => {
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        this._thiggerEvent("oninput");
                    });

                    break;
                
                case "caps":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
                    keyElement.innerHTML = createIconHTML("keyboard_capslock");
                    keyElement.addEventListener('click', () => {
                        this._toggleCapsLock();
                        keyElement.classList.toggle("keyboard__key__active", this.properties.capsLock);     
                    });
    
                    break;

                case "enter":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("keyboard_return");
                    keyElement.addEventListener('click', () => {
                        this.properties.value += "/n"; 
                        this._thiggerEvent("oninput");   
                    });
        
                   break;

                case "space":
                    keyElement.classList.add("keyboard__key--extra--wide");
                    keyElement.innerHTML = createIconHTML("space_bar");
                    keyElement.addEventListener('click', () => {
                        this.properties.value += " "; 
                        this._thiggerEvent("oninput");   
                    });
        
                   break;

                case "done":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
                    keyElement.innerHTML = createIconHTML("check_circle");
                    keyElement.addEventListener('click', () => {
                        this.close(); 
                        this._thiggerEvent("onclose");   
                    });
        
                   break;
                
                default:
                    keyElement.textContent = key.toLowerCase();


                    keyElement.addEventListener('click', () => {
                        this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase(); 
                        this._thiggerEvent("oninput");   
                    });
        
                   break;
            }

            fragment .appendChild(keyElement);

            if (inserLineBreak) {
                fragment.appendChild(document.createElement("br"));
                 
            }
        });

        return fragment; 
    },

    _triggerEvent(handlerName) {
        console.log('Event Triggered! Event Name: ' + handlerName);
    },

    _toggleCapsLock() {
        console.log('CapsLock toggled!');
    },

    open(initialValue, oninput, onclose) {

    },

    close() {

    },
};

window.addEventListener('DOMContentLoaded', function() {
    Keyboard.init();
});