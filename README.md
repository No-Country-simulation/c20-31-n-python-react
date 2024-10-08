# Simulación No Country. Proyecto TELEMED
# Grupo c-20-31-n-python-react

Creación de Aplicación de Telemedicina para control y seguimiento de pacientes
 **Rubro:**. Vertical Tecnológica: WebApp      
  **Team Leader** : Billy Campagnoli.
  **Colaboradores:** 
   -   Graciela Badin (Argentina). Rol: QA Tester. www.linkedin.com/in/graciela-badin
-   José Carlos Perdomo (Venezuela). Rol: Backend. https://www.linkedin.com/in/perd007/
-   Sebastián Barrera (Colombia). Rol: Frontend. https://www.linkedin.com/in/sebastianbarrera-herrera
-   Piero Fernando Ramírez Esteban (Perú) Rol: Frontend.  https://www.linkedin.com/in/piero-fernando-ram%C3%ADrez-esteban-33b8b822a/

  
# Descripción
La aplicación está destinada al control y seguimiento por videollamada de pacientes con patologías crónicas.
En América Latina hay una carga muy importante de Enfermedades No Transmisibles y su manejo es dificultoso por la existencia de numerosas brechas de accesibilidad. La salud digital es una necesidad actual por su capacidad para conectar pacientes a proveedores independientemente de la distancia, permitiendo mejorar la calidad de vida de las personas.
Esta aplicación está destinada sobre todo a personas que viven en zonas alejadas, con escasa accesibilidad a los centros de salud, o bien con dificultades físicas que les impiden trasladarse para realizar su control médico periódico.
A través de esta App, los pacientes tienen la posibilidad de gestionar un turno para la videollamada con un médico generalista, eligiendo la fecha y hora de su preferencia. También tienen la opción de cancelar su cita si fuera necesario o bien, agendar una cita presencial.
El médico puede confeccionar una historia clínica confidencial, incluyendo los antecedentes, enfermedad actual y resultados de estudios complementarios.
Durante la videollamada podrá interactuar con el paciente, realizarle sugerencias e indicaciones y sugerir la consulta con otro médico especialista, o bien la necesidad de internación. 
El médico puede registrar el historial médico de sus pacientes, antecedentes, diagnóstico, indicaciones y tratamiento.
Esta App sería para uso de un solo médico con sus pacientes, pero puede perfeccionarse para permitir que el paciente pueda seleccionar un médico disponible de un listado. **Tecnologías utilizadas en el proyecto:**
Python, SQL, Flask para Python. Frontend: Figma, React, Java Script. Trello.
Testing QA: Trello, Jira-X Ray. Postman
**Enlaces relevantes del proyecto:**
[https://trello.com/b/fnpDRkYj/telemedicina-no-country-c2031](https://trello.com/b/fnpDRkYj/telemedicina-no-country-c2031)

[https://www.figma.com/design/QZj542qXN5zKkQahraIgyz/Telemedicina-N.C?node-id=0-1&t=hPFZQGRgJth2gxB6-1](https://www.figma.com/design/QZj542qXN5zKkQahraIgyz/Telemedicina-N.C?node-id=0-1&t=hPFZQGRgJth2gxB6-1)

[https://github.com/No-Country-simulation/c20-31-n-python-react](https://github.com/No-Country-simulation/c20-31-n-python-react)

[TELEMED.Planilla de Casos de Prueba.xlsx](https://docs.google.com/spreadsheets/d/1ULZZiVwTBq5yCK5hCn7LbGOp9x1dStdw/edit?usp=sharing&ouid=117827628371075344068&rtpof=true&sd=true)
JIRA:  https://gracielabadin.atlassian.net/jira/software/c/projects/TEL/boards/2/backlog?epics=visible&atlOrigin=eyJpIjoiOWRjNTZkNjgxYjc3NGQ2NzgzMTg0YmRmMDM1ODMxY2EiLCJwIjoiaiJ9
Video presentación Demo Day: https://drive.google.com/file/d/12j7x43Gui8_U-rrDihmDtl4au19TeKEm/view?usp=drive_link

## User stories
● Como paciente, quiero poder programar consultas virtuales con médicos para recibir atención médica sin salir de casa.

● Como médico, quiero tener acceso a los historiales médicos de mis pacientes durante las consultas virtuales para proporcionar un mejor diagnóstico.
## Características esenciales
 ● Programación de citas médicas en línea.
● Videollamadas seguras entre pacientes y médicos.
● Acceso a historiales médicos durante las consultas.

## Tipos de usuarios:
● Pacientes.
● Médicos.
 
## Funcionalidades
-   Registro con usuario y contraseña
- Login
- Carrousel con información para el paciente
- Registro 1° consulta
- Agendar una cita virtual
- Agendar una cita presencial
- Rol médico: 
     -   Calendario
   -   Listado de pacientes registrados
    -   Historial médico
    - Indicaciones

## Pruebas funcionales

 **-Verificar el registro de pacientes y médico:**  Permitir crear cuentas de forma correcta, asignar roles y establecer permisos de acceso.

**-Probar el ingreso de datos en el formulario de registro:** Comprobar que el sistema permita ingresar datos en el formulario de registro del paciente.

**-Probar el ingreso de datos en la historia clínica:** Comprobar que el sistema permita ingresar datos en la historia clínica del paciente.

**-**Evaluar el sistema de solicitud de citas médicas:**** Asegurar que los pacientes puedan agendar una cita para consulta de telemedicina, seleccionando día y hora en  el calendario.

**-Evaluar el sistema de cancelación de citas médicas:**  Asegurar que los pacientes puedan cancelar una cita para consulta de telemedicina, previamente agendada.

**-Validar el funcionamiento de los módulos de asistencia:** Verificar que el sistema permita registrar la asistencia de los pacientes a la consulta por telemedicina, generar reportes de cancelaciones y enviar notificaciones al médico.

**-Comprobar el funcionamiento del calendario de citas médicas:** Verificar que el sistema muestre correctamente las fechas de consultas disponibles y agendadas.

## Pruebas de usabilidad

**-Evaluar la interfaz de usuario:** Asegurar que la interfaz sea intuitiva, fácil de navegar y esté adaptada a las necesidades de los usuarios (pacientes y médico).
**-Evaluar la experiencia del usuario:** Identificar posibles obstáculos o dificultades que los usuarios puedan encontrar al utilizar el sistema y proponer mejoras.
## Pruebas de compatibilidad
**-Verificar el funcionamiento en diferentes navegadores:** Asegurar que el sistema funcione correctamente en los navegadores más utilizados (Chrome, Firefox, Edge, etc.).
**-Probar en diferentes dispositivos:** Comprobar que el sistema sea compatible con diferentes dispositivos (computadoras de escritorio, laptops, tablets, smartphones).
**-Evaluar el rendimiento en diferentes sistemas operativos:** Asegurar que el sistema funcione correctamente en diferentes sistemas operativos (Windows, macOS, Linux).
## Pruebas de seguridad
**-Verificar la seguridad de los datos:** Asegurar que los datos de los pacientes y médico estén protegidos y no sean accesibles a terceros no autorizados.


# Alcance
**Cubierto**:           
                                  -Pruebas funcionales
                                  -Pruebas de usabilidad
                                  -Pruebas de seguridad
 
  **No cubierto:**   
  -Pruebas de compatibilidad

# Historias de usuario para un desarrollador Backend
## Historia de usuario 1: Registro del paciente
**Descripción**
Como paciente quiero poder registrarme en la aplicación al ingresar por primera vez, para cargar mis datos y luego poder loguearme en forma segura

**Criterios de aceptación**

-   Cuando el usuario ingresa por primera vez a la App debe poder registrarse con su correo electrónico y elegir una contraseña
    
-   El sistema valida los datos ingresados y lo dirige a la página principal
    
-   El sistema debe requerir que ambos campos sean completados

**Casos de prueba**

-   Probar registrarse completando ambos campos
    
-   Probar registrarse completando solo el campo correo elctrónico
    
-   Probar registrase completando solo el campo contraseña
    
-   Probar registrarse sin completar ningún campo
## Historia de usuario 2: Inicio de sesión en la aplicación Telemed (Login)
**Descripción**
 Como usuario final, quiero poder iniciar sesión en la aplicación utilizando mi correo electrónico y contraseña para acceder a utilizar las funcionalidades de la App.
**Criterios de aceptación**
-   Cuando el usuario se encuentre en el campo de Login el sistema debe permitir el ingreso solo con usuario y contraseña válidos.
    
-   El sistema debe mostrar un mensaje de error cuando se ingresan credenciales no válidas.
    
-   El sistema debe dirigir al usuario a la página principal después de un inicio de sesión exitoso
    
-   El sistema debe requerir que los campos de usuario y contraseña sean completados.

**Casos de prueba**
-   Probar ingresar con usuario y contraseña válidos
    
-   Probar ingresar con una contraseña incorrecta
    
-   Probar iniciar sesión sin completar los campos de usuario y contraseña
    
-   Probar iniciar sesión completando solo el campo de usuario
    
-   Probar iniciar sesión completando solo el campo de contraseña.

## Historia de usuario 3: Página principal o Carrousel
**Descripción**
 Como paciente quiero poder conocer al ingresar a la App las prestaciones que ofrece la aplicacion y sus funcionalidades.
 
**Criterios de aceptación**
-   Cuando el paciente ingresa con su usuario y contraseña el sistema lo dirige a la pantalla principal
    
-   En la pantalla principal puede verse la descripción de la misión y visión de la aplicación
    
-   Al deslizar pantalla se visualiza la descripción de las funcionalidades
    
-   El paciente puede hacer click para dirigirse a la pantalla del calendario para agendar citas
- **Casos de prueba**
-   Probar deslizar pantallas en el carrousel
   -   Verificar que al hacer click en ambos botones <  >, el Carrousel me muestre diferentes pantallas con información.
## Historia de usuario 4: Historial médico
**Descripción**
Como médico, quiero cargar los datos de mis pacientes en el sistema, para poder confeccionar su historia clínica electrónica.
**Criterios de aceptación**
•El médico podrá ingresar notas numéricas y literales en un campo de texto confidencial (o subirla en formato pdf)
•Se podrán agregar observaciones a cada nota (por ejemplo, “Solicito estudios de laboratorio o radiográficos” “Se recomienda realizar interconsulta con cardiología", "Se indica tratamiento...").
•Las notas se guardarán de forma segura y estarán asociadas al paciente y al médico.
•Los pacientes podrán visualizar las notas e indicaciones médicas a través de un panel personal.
•Se generará un historial para cada paciente, permitiendo visualizar la evolución de su estado de salud a lo largo del tiempo.
•El sistema enviará una notificación al paciente y al médico cuando se agende una nueva cita.

## Historia de usuario 5: Solicitud de cita virtual
**Descripción**
Como paciente, quiero poder solicitar una cita para telemedicina para poder controlar mi estado de salud sin salir de casa.

**Criterios de aceptación**
•  Se podrá agendar una cita seleccionando fecha y hora en el calendario.
•  Se podrá cancelar la cita en el mismo sistema, si el paciente lo desea.
•  Una vez seleccionada la fecha, el sistema generará un enlace de Meet para concretar    
    la videollamada.
    
**Casos de prueba**
-   Agendar una cita virtual
-   Agendar una cita presencial
-   Confirmar cita seleccionada
 -   Cancelar cita seleccionada
## Historia de usuario 6: Formulario de registro de datos del paciente
**Descripción**
Como paciente quiero poder enviar mis datos, motivo de consulta y antecedentes al médico a través del sistema, para que al momento de la consulta virtual el médio tenga una idea aproximada de mi estado de salud.
**Criterios de aceptación**
• Los pacientes completarán un formulario de registro donde conste su edad, número de documento, país, antecedentes (Ej: diabetes, hipertensión arterial, alergias, asma bronquial, cirugías previas) hábitos ( Ej. Tabaquismo, consumo de alcohol y drogas) y motivo actual de consulta.
• El médico recibirá una notificación cuando se carguen nuevos datos.
## Historia de usuario 7: Gestión de citas por usuario médico
**Descripción**
-   Como médico, quiero poder gestionar las citas de los pacientes y asignar turnos disponibles para las consultas virtuales.
**Criterios de aceptación**
-   El sistema debe poder asignar una cita médica cada vez que un paciente solicita una cita virtual
    
-   El médico debe poder reprogramar la cita virtual hay algún inconveniente imprevisto en el horario y fecha seleccionados por el paciente.

# Historias de usuario para un desarrollador Frontend
## Historia de usuario 8: Historial médico.
**Descripción**
Como médico, quiero poder acceder al formulario de datos y a la historia clínica de los pacientes, para poder conocer su estado de salud y realizar un seguimiento a través del tiempo.

**Criterios de aceptación:**

•El sistema debe permitir al médico seleccionar a un paciente de una lista desplegable o mediante una búsqueda por nombre, documento de identidad o código.

•Los resultados de la búsqueda deben mostrar un listado claro y conciso de los pacientes, incluyendo al menos su nombre completo y número de documento de identidad.
•Los resultados se pueden ordenar por nombre del paciente, de forma ascendente o descendente, o por número de documento, de mayor a menor o viceversa.

•Se puede considerar implementar filtros adicionales como diagnóstico o fecha de evaluación

•El médico debe poder descargar los resultados de la búsqueda en formato PDF, CSV o Excel.

•La interfaz de búsqueda debe ser sencilla y fácil de usar, guiando al usuario en el proceso de búsqueda y visualización de los resultados.

## Historia de usuario 9: Selección de cita por usuario paciente
**Descripción**
Como paciente, quiero poder obtener rápidamente una cita para consulta en línea, seleccionando fecha y horario.

**Criterios de aceptación:**

•  Se implementará un campo de búsqueda en la página principal asociado a Google Calendar.

•Las fechas disponibles deben poder visualizarse fácilmente, distinguiéndose de las no disponibles
    
•  La selección será realizada haciendo click sobre la fecha elegida.

•  Se desplegará una lista de horarios disponibles.

## Historia de usuario 10: Notificación de reprogramación de cita.
**Descripción**
Como paciente, quiero recibir notificaciones cuando se reprograme una consulta virtual.

**Criterios de aceptación:**

•El sistema enviará notificaciones por correo electrónico y/o mediante una notificación en la aplicación.

•Las notificaciones incluirán un enlace directo a la nueva fecha programada y enlace de reunión correspondiente.

•El usuario podrá configurar las preferencias de notificación (frecuencia, tipo de notificación).

## Historia de usuario 11: Visualización de citas programadas como usuario paciente.
**Descripción**
Como paciente, quiero poder visualizar mi calendario de citas virtuales de forma clara y sencilla, para poder organizar mis tiempos y programar nuevas citas en caso de necesidad.

**Criterios de aceptación:**

•El calendario se mostrará en un formato mensual, semanal o diario, según la preferencia del usuario.

•Se incluirán todos los eventos relevantes (consulta 1° vez, nuevas consultas.) con su fecha correspondiente.

•Cada evento se mostrará con un color distintivo para facilitar su identificación
## Historia de usuario 12: Historial del paciente.
**Descripción**
Como médico, quiero poder visualizar un historial completo del paciente, incluyendo los estudios de laboratorio y diagnóstico por imágenes.
**Criterios de aceptación:**

•El sistema generará un informe detallado del estado de salud del paciente, que incluirá:

-Estado actual, motivo de consulta, signos vitales, diagnóstico presuntivo

-Resultados de estudios complementarios

-Comentarios y observaciones del médico.

-Indicaciones médicas y recetas entregadas.

-El informe se podrá descargar o exportar en formato PDF.

# Tablas de bases de datos

## Tabla pacientes. Registro:
-   Nombre : string
    
-   ID :number
    
-   Correo electrónico :string
    
-   Password :string
    
-   DNI  :string
    
-   Numero de teléfono :number
    
-   Edad :number
    
-   Género :string
    
-   País :string
    
-   Ciudad  :string
    
-   IsActive  :boolean
- 
**Tabla médico:**

-   Nombre :string
    
-   ID-médico :number
    
-   ID :number
    
-   Género :string
    
-   Edad :string
    
-   DNI :string
    
-   Correo Electrónico :string
    
-   Password :string
    
-   Especialidad :string
    
-   Teléfono :number
    
-   IsActive :boolean
    
-   Matrícula - Certificación :number

**Tabla de citas:**

-   Motivo de consulta :string
    
-   Modo de cita :string
    
-   Fecha de cita :string
    
-   ID :string
    
-   ID-paciente :string
    
-   Confirmación :string 1pendiente, 2 confirmada, 3 realizada

**Tabla historial médico:**

-ID :number

-ID-citas :string

-Diagnóstico :string

-Receta-médica :string

-Fecha-consulta :date

-Recomendaciones :string




