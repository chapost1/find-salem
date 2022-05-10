const ageValueContainer = document.getElementById("pet-age-value")
const age = getAge("2020-11-10")
ageValueContainer.innerHTML = ageValueContainer.innerHTML.replace("[שנים]", age.years)
ageValueContainer.innerHTML = ageValueContainer.innerHTML.replace("[חודשים]", age.months)

function getAge(birthDate) {
  const ageInMilliseconds = new Date() - new Date(birthDate);
  const years = ageInMilliseconds / 1000 / 60 / 60 / 24 / 365;
  const months = (years - Math.floor(years)) * 12;
  return {
      years: Math.floor(years),
      months: Math.ceil(months)
  }
}

