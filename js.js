class JarLabel extends HTMLElement {
    constructor(){
        super()
        const dom = this.attachShadow({mode:"open"})
        const elem = document.createElement("template")
        elem.innerHTML = `
        <style>
            div {
                text-align: center;
                margin: 1rem;
                font-weight: 800;
            }
        </style>
        <div>
        <slot></slot><br>
        <div>${new Date().getFullYear()}</div>
        </div>`
        dom.append(elem.content.cloneNode(true))
    }
}

customElements.define("jar-label",JarLabel)