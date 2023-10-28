// export function generateElement(tagName, attributes, children) {
//     const ele = attributes === (void 0)
//         ? document.createElement(tagName)
//         : Object.assign(document.createElement(tagName), attributes);
//     if (children) {
//         for (let i = 0, length = children.length; i < length; i++) {
//             const child = children[i];
//             ele.appendChild(typeof child === 'string' ? document.createTextNode(child) : child);
//         }
//     }
//     return ele;
// }

function generateElement(tagName, attributes, ...children) {
    const element = document.createElement(tagName);
    if (attributes) {
        Object.keys(attributes).forEach(key => {
            element.setAttribute(key, attributes[key]);
        })
    }

    if (children) {
        children.forEach(child => {
            if (typeof child === "string") {
                element.appendChild(document.createTextNode(child));
            } else {
                element.appendChild(child);
            }
        })
    }
    return element;
}
export default generateElement;







