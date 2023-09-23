class Cardnews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild({build});
        shadow.appendChild({styles});
    }

    build(){
        const componentRoot =document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        componentRoot.setAttribute("class", "card__left")
        const cardRigth = document.createElement("div");
        componentRoot.setAttribute("class", "card__rigth")

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRigth);

        return componentRoot;
    }

    styles(){}
}

customElements.define("card-news", Cardnews);