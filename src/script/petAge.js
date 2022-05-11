export const newPetAgeHTML = birthDate => {
  const calcAge = () => {
    const ageInMilliseconds = new Date() - new Date(birthDate);
    const years = ageInMilliseconds / 1000 / 60 / 60 / 24 / 365;
    const months = (years - Math.floor(years)) * 12;
    return {
        years: Math.floor(years),
        months: Math.ceil(months)
    }
  }

  const html = age => `בן ${age.years} שנים, ${age.months} חודשים`

  return html(calcAge())
}
