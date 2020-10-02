....This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# tributi-task
Form in React JS, as a task on interview process for Tributi application

Description:

Construir una interfaz gráfica en ReactJS que sea un formulario dividido en varias pantallas o pasos, con las siguientes características:

- La orientación de los pasos debe ser horizontal
- Funcionalidad de [Next] y [Back]
- Cada paso debe tener como mínimo un título
- Cada paso debe tener como mínimo una validación de input [elección propia]
(no debe permitir continuar al siguiente paso si la validación no se cumple)
- Debe incluir una barra horizontal para indicación del progreso
(cada paso tiene el mismo porcentaje de progreso)

* Puntos extra si se hace de forma dinámica:
Es decir, los pasos, el título, los input, etc, se puedan generar a partir de un solo Object o JSON.

--------------------------------------
### Que se puede encontrar en el codigo:

- 3 Paginas en el form con multiple tipos de Input
- Se usa Material-UI como framework CSS
- Se incluye un componente de Clase (Pagina final de gracias, que incluye un React Fragment. Innecesario pero demostrativo.)
- Se incluye el uso de React Hooks basico (en el Form, ya que es componente funcional. Para el Last Name, se maneja el valor y se pasa a la ultima pantalla)
- Se muestra manipulacion del DOM (para la validacion de los input)
- Form unicomponente (velocidad de desarrollo para la prueba. Cada pagina pudiese ser un componente separado y aplicar validaciones en cada componente mediante su estado si cumple o no en vez de revisar el DOM)
- Data dinamica mediante un JSON

### Heroku URL: https://tributi-task.herokuapp.com/
