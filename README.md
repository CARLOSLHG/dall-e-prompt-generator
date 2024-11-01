# DALL-E Prompt Generator - Versión 1.0

Esta es una aplicación de React creada para generar prompts personalizados para DALL-E utilizando una variedad de variables como la descripción principal, estilo artístico, paleta de colores, y más. La aplicación permite configurar múltiples parámetros visuales y de narrativa para que el resultado final refleje de manera precisa la intención deseada.

Creado por [CarlosLHG](https://github.com/CarlosLHG). Puedes ver la aplicación en funcionamiento aquí: [DALL-E Prompt Generator](https://carloslhg.github.io/dall-e-prompt-generator/).

## Características

- Selección de múltiples variables para personalizar el prompt, incluyendo:
  - Descripción principal
  - Estilo artístico
  - Paleta de colores
  - Detalles adicionales
  - Composición
  - Perspectiva
  - Resolución y formato
  - Protagonista
  - Enfoque
  - Jerarquía
  - Intención
- Posibilidad de reiniciar todos los campos y copiar el prompt al portapapeles para facilitar su uso en DALL-E.
- Explicaciones detalladas para cada variable a través de un icono informativo (`ⓘ`) al lado de cada opción, que describe cómo usar y aplicar cada variable para obtener los mejores resultados.

## Instalación

1. Clona este repositorio:

    ```bash
    git clone https://github.com/tu-usuario/dalle-prompt-generator.git
    cd dalle-prompt-generator
    ```

2. Instala las dependencias de la aplicación:

    ```bash
    npm install
    ```

3. Inicia la aplicación en tu entorno de desarrollo local:

    ```bash
    npm start
    ```

4. La aplicación estará disponible en `http://localhost:3000`.

## Estructura de Archivos

- **`App.js`**: Componente principal de la aplicación que contiene la lógica para la generación del prompt y el manejo del estado.
- **`App.css`**: Archivo de estilo para la aplicación.
- **`README.md`**: Documentación del proyecto.

## Uso

1. Selecciona las opciones deseadas en cada dropdown para personalizar el prompt según tus necesidades.
2. Haz clic en el botón **"Ver prompt"** para generar y ver el prompt basado en las variables seleccionadas.
3. Utiliza el botón **"Copiar al portapapeles"** para copiar el prompt generado y pegarlo en DALL-E.
4. Para reiniciar los campos y empezar de nuevo, haz clic en **"Reiniciar"**.

## Ejemplo de Prompt Generado

El prompt generado sigue el formato:
Imagine a scene with [Descripción Principal], in [Estilo Artístico] style, using a [Paleta de Colores] color palette. The scene includes [Detalles Adicionales] with [Composición] composition. It has a [Perspectiva] perspective, [Resolución y Formato] resolution and format, focused on [Protagonista] as the main character. Emphasis on [Enfoque] and [Jerarquía]. Intent: [Intención].


### Ejemplo

Imagine a scene with a futuristic cityscape, in cyberpunk style, using a neon color palette. The scene includes floating vehicles with balanced composition. It has a wide-angle perspective, high-resolution format, focused on a lone protagonist as the main character. Emphasis on vivid colors and character-centered hierarchy. Intent: evoke a sense of adventure.


## Contribuciones

Las contribuciones son bienvenidas. Si tienes ideas para mejorar esta aplicación o deseas agregar nuevas características, abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más información.


#dall-e-prompt-generator
