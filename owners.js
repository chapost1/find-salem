const owners = [
    {
        name: "שחר",
        imageSource: "images/shahar-profile-image.jpeg",
        phoneNumber: "+972526982308"
    },
    {
        name: "נופר",
        imageSource: "images/nuphar-profile-image.jpeg",
        phoneNumber: "+972523664091"
    }
]


const ownersContactContainer = document.getElementById("owners-contact-container")

const newOwnerHTML = (owner) => {
    return `<div class="d-inline-block mx-2 ml-3">
                <a href="tel:${owner.phoneNumber}" data-rel="external">
                    <button type="button" class="btn btn-lg btn-success  position-relative">
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                            <img src="${owner.imageSource}" class="rounded-pill" width="32px" alt="${owner.name}">
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-outbound-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z"></path>
                        </svg>
                        ${owner.name}
                    </button>
                </a>
                </div>
            </div>`
}

for (const owner of owners) {
    ownersContactContainer.innerHTML += newOwnerHTML(owner)
}