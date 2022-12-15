const card = document.querySelector(".card__inner");
    try {
      card.addEventListener("click", function (e) {
        card.classList.toggle('is-flipped');
      });  
    } catch (error) {
      console.log(error)
    }
    
    /*==================== Language ====================*/ 
    const languageButton = document.getElementById('language-button')
    
    const esLanguage = 'es'
    const iconLanguage = 'spanish'
    
    // Previously selected topic (if user selected)
    const selectedLanguage = localStorage.getItem('selected-language')
    const selectedIconLanguage = localStorage.getItem('selected-icon')
    console.log(selectedLanguage)
    console.log("El valor de  selectedIconLanguage es " + selectedIconLanguage)
    console.log("El valor de iconLanguage es " + iconLanguage)
    
    languageButton.classList.add("english");
    
    const getCurrentLanguage = () => document.body.classList.contains(esLanguage) ? 'en' : 'es'
    const getCurrentIconLanguage = () => languageButton.classList.contains(iconLanguage) ?  languageButton.src="./assets/img/es.svg" : (languageButton.src="./assets/img/gb.svg", document.body.classList.add("en"), languageButton.classList.add("english"));
    
    // We validate if the user previously chose a topic
    if (selectedLanguage) {
      // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
      document.body.classList[selectedLanguage === 'es' ? 'add' : 'remove'](esLanguage)
    }
    
    const textToChange = document.querySelectorAll("[data-section]")
    // console.log(textToChange)
    
    const changeLanguage = async (language) => {
      // const requestJson = await fetch(`https://julianflancheros.github.io/PruebaCarta/archivosAnexos/${language}.json`);
      const requestJson = await fetch(`https://julianflancheros.js.org/assets/archivosAnexos/${language}.json`);
    
      // const requestJson = await fetch(`../archivosAnexos/${language}.json`);
      const texts = await requestJson.json();
      // console.log(texts)
      for(const item of textToChange){
        // console.log(item)
        const section = item.dataset.section;
        // console.log("section "+ section)
        const value = item.dataset.value;
        // console.log("value "+ value)
    
        item.innerHTML = texts[section][value];
        // item.innerHTML = texts["BussinesCard"][section][value];
        // item.innerHTML = texts["PersonalPage"][section][value];
      }
    }
    
    
    // Activate / deactivate the theme manually with the button
    languageButton.addEventListener('click', (e) => {
        // Add or remove the dark / icon theme
        document.body.classList.toggle(esLanguage);
        document.body.classList.remove("en");
        languageButton.classList.remove("english");
        languageButton.classList.toggle(iconLanguage)
        // We save the theme and the current icon that the user chose
        localStorage.setItem('selected-language', getCurrentLanguage())
        localStorage.setItem('selected-icon', getCurrentIconLanguage())
        // console.log(e.target.parentElement.dataset.language)
        changeLanguage(languageButton.classList)
    })