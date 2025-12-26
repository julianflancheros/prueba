const card = document.querySelector(".card__inner");
try {
    if (card) {
        card.addEventListener("click", function (e) {
            card.classList.toggle('is-flipped');
        });
    }
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

// Validamos si existe el botón antes de intentar manipularlo
if (languageButton) {
    // Si no hay idioma guardado, por defecto añade la clase english si así lo deseas
    if (!selectedLanguage) {
        languageButton.classList.add("english");
    }
}

const getCurrentLanguage = () => document.body.classList.contains(esLanguage) ? 'es' : 'en'
const getCurrentIconLanguage = () => {
    if (!languageButton) return;
    if (languageButton.classList.contains(iconLanguage)) {
        languageButton.src = "./assets/img/es.svg";
        return 'spanish'; // Retornamos string identificador
    } else {
        languageButton.src = "./assets/img/gb.svg";
        document.body.classList.add("en");
        languageButton.classList.add("english");
        return 'english';
    }
}

// We validate if the user previously chose a topic
if (selectedLanguage) {
    document.body.classList[selectedLanguage === 'es' ? 'add' : 'remove'](esLanguage)
    // Ajustar icono inicial basado en selección guardada
    if (languageButton) {
        if (selectedLanguage === 'es') {
            languageButton.classList.add(iconLanguage);
            languageButton.classList.remove("english");
            languageButton.src = "./assets/img/es.svg";
        } else {
            languageButton.classList.remove(iconLanguage);
            languageButton.classList.add("english");
            languageButton.src = "./assets/img/gb.svg";
        }
    }
}

const textToChange = document.querySelectorAll("[data-section]")

const changeLanguage = async (language) => {
    try {
        // === CAMBIO REALIZADO ===
        // Mapeamos el código 'es'/'en' al nombre real del archivo json (spanish/english)
        const fileName = language === 'es' ? 'spanish' : 'english';

        // Usamos ruta relativa apuntando al nombre correcto del archivo
        const requestJson = await fetch(`./assets/archivosAnexos/${fileName}.json`);

        if (!requestJson.ok) {
            throw new Error(`Error HTTP! status: ${requestJson.status}`);
        }
        
        const texts = await requestJson.json();
        
        for (const item of textToChange) {
            const section = item.dataset.section;
            const value = item.dataset.value;

            // === PROTECCIÓN ===
            // Solo reemplazamos si la traducción existe y es válida.
            if (texts[section] && texts[section][value]) {
                
                // Caso especial para el efecto de escritura (Typed.js)
                if (item.classList.contains('typed')) {
                    // Actualizamos el atributo data para la próxima carga
                    item.setAttribute('data-typed-items', texts[section][value]);
                    
                    // NOTA: Typed.js no detecta cambios en el atributo 'al vuelo'. 
                    // El texto cambiará correctamente solo al recargar la página.
                } else {
                    item.innerHTML = texts[section][value];
                }
                
            } else {
                // Si no hay traducción, NO HACEMOS NADA. 
                // Esto permite que tu texto manual en el HTML se mantenga intacto.
                console.warn(`Traducción no encontrada para: ${section} -> ${value}`);
            }
        }
    } catch (error) {
        console.error("Error al cargar el archivo de idioma:", error);
    }
}

// Función auxiliar para reiniciar el efecto Typed.js
const restartTypedEffect = () => {
    const typedElement = document.querySelector('.typed');
    // Verificamos si existe el elemento y si la librería Typed está cargada
    if (typedElement && typeof Typed !== 'undefined') {
        
        // 1. Intentamos destruir la instancia anterior para evitar duplicados
        // Muchas implementaciones guardan la instancia en la propiedad data de jQuery
        if (typeof jQuery !== 'undefined' && jQuery(typedElement).data('typed')) {
            jQuery(typedElement).data('typed').destroy();
        } 
        // O a veces se guarda directamente en el elemento DOM (depende de la versión)
        else if (typedElement._typed) {
            typedElement._typed.destroy();
        }

        // 2. Limpiamos el HTML residual del span para que quede limpio
        typedElement.innerHTML = '';

        // 3. Obtenemos las nuevas palabras del atributo actualizado
        let typed_strings = typedElement.getAttribute('data-typed-items');
        typed_strings = typed_strings.split(',');

        // 4. Creamos una nueva instancia de Typed con los parámetros estándar
        const newTyped = new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });

        // Guardamos la referencia para poder destruirla la próxima vez
        typedElement._typed = newTyped;
    }
}

// Activate / deactivate the theme manually with the button
if (languageButton) {
    languageButton.addEventListener('click', (e) => {
        // Alternar clases de idioma
        document.body.classList.toggle(esLanguage);
        document.body.classList.remove("en"); // Limpieza preventiva
        
        languageButton.classList.toggle("english");
        languageButton.classList.toggle(iconLanguage);

        // Guardar preferencias
        localStorage.setItem('selected-language', getCurrentLanguage());
        localStorage.setItem('selected-icon', getCurrentIconLanguage());
        
        // Determinar código de idioma para cargar JSON
        let langCode = document.body.classList.contains(esLanguage) ? 'es' : 'en';

        // Ejecutar cambio de textos
        changeLanguage(langCode).then(() => {
            // Una vez cargados los nuevos textos, reiniciamos el efecto
            restartTypedEffect();
        });
    })
}