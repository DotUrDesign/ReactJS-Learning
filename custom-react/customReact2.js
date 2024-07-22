
function customRender(reactElement, mainContainer) {
    const domElement = document.createElement(reactElement.type);

    // handle children 
    if(typeof reactElement.children === 'string') {
        domElement.innerHTML = reactElement.children;
    } else  if (Array.isArray(reactElement.children)) {
        reactElement.children.forEach(child => {
            customRender(child, domElement);   // Recursively render each child 
        });
    }

    // Set attributes and event listeners 
    if(reactElement.props) {
        Object.keys(reactElement.props).forEach(prop => {
            if(prop.startsWith('on') && typeof reactElement.props[prop] === 'function') {
                // prop - onClick, onMouseHover, onChange
                const event = prop.slice(2).toLowerCase();  // slice the "on" part, event = 'Click' or 'MouseHover' or 'Change'  
                domElement.addEventListener(event, reactElement.props[prop]);   // reactElement.props[prop] => callback function, when clicked this function will be triggered.
            }
            else if(prop === 'style') {
                domElement.style.cssText = reactElement.props[prop];   // apply the styles if present in the properties section 
            }
            else {
                domElement.setAttribute(prop, reactElement.props[prop]);
            }
        })
    }

    mainContainer.appendChild(domElement);
} 

const reactElement = {
    type : 'div',
    props: {
        id: 'parentDiv',
        style: 'padding: 10px; border: 1px solid black;'
    },
    children: [
        {
            type: 'h1',
            props: {},
            children: "This is a heading"
        },
        {
            type: 'p',
            props: {},
            children: "This is the first paragraph."
        },
        {
            type: 'p',
            props: {},
            children: "This is the second paragraph."
        },
        {
            type: 'button',
            props: {
                onClick: () => alert('Button inside div clicked!')
            },
            children: "Click Me"
        }
    ]
}

const mainContainer = document.getElementById('root');

customRender(reactElement, mainContainer);