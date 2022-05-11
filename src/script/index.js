import { petBirthDate, owners } from "./conf.js"
import {newPetAgeHTML} from "./petAge.js"
import {newOwnerHTML} from "./owner.js"

const ageValueContainer = document.getElementById(window.APP_ELEMENTS_IDS.PET_AGE)
const ownersContactContainer = document.getElementById(window.APP_ELEMENTS_IDS.OWNERS_CONTACT)

ageValueContainer.innerHTML = newPetAgeHTML(petBirthDate)

for (const owner of owners) {
    ownersContactContainer.innerHTML += newOwnerHTML(owner)
}
