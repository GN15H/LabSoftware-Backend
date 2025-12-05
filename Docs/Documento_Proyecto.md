

**UNIVERSIDAD TECNOLÓGICA DE PEREIRA**  
**FACULTAD DE INGENIERÍAS**  
**LABORATORIO DE SOFTWARE**

**DOCUMENTO DE REQUERIMIENTOS DEL SOFTWARE**

**Proyecto:** AutoLink Manager   
**Versión:** 1.2  
**Fecha:** Por definir  
**Equipo de Desarrollo:** Juan Camilo Moreno \- Cristobal Ochoa \- Steven Agudelo

**1\. INTRODUCCIÓN**

**1.1. Propósito**

El propósito de AutoLink Manager es optimizar la gestión integral del taller mecánico AutoLink, garantizando al cliente una experiencia cómoda, transparente y segura, y a los mecánicos y administradores un control eficiente de las operaciones internas. El sistema asegura la sincronización en tiempo real entre el estado real de los vehículos en el taller y la información visible para los clientes a través de la plataforma.

**1.2. Alcance**

Funcionalidad principal incluida El sistema AutoLink Manager cubrirá las siguientes capacidades fundamentales: 

**1.2.1 Gestión operativa centralizada:** 

\- Administración de recursos humanos (mecánicos, especialidades).

\- Control de inventario de repuestos.

**1.2.2 Ciclo de servicio integral:**

\- Agendamiento web de citas con asignación automática de mecánicos.

\- Registro técnico de vehículos (marca, modelo, kilometraje).

\- Documentación de servicios realizados (materiales, costos, fotos).

**1.2.3 Interacción con clientes:**

\- Portal de autoservicio para consulta de estados en tiempo real.

\- Notificaciones automatizadas (SMS/email) y módulo Chatbot para consultas frecuentes.

**1.2.4 Procesos financieros:**

\- Generación de facturas electrónicas.

\- Registro de pagos totales.

**Límites del sistema \-Exclusiones explícitas-**:

\-El proyecto se desarrollará utilizando únicamente herramientas gratuitas o con planes básicos, lo que puede limitar el rendimiento, la capacidad de almacenamiento y la disponibilidad.

\-El despliegue del sistema se realizará en servicios gratuitos o de bajo costo (ej. Vercel, Render, Railway, Azure DevOps), lo que restringe el número de usuarios concurrentes y el nivel de disponibilidad garantizado.

\-Debido a limitaciones de tiempo y recursos, se implementarán únicamente medidas de seguridad fundamentales (encriptación de contraseñas, validación de formularios, control de roles), dejando fuera funcionalidades avanzadas como doble factor de autenticación o auditorías continuas.

\-El sistema estará diseñado para soportar un volumen de datos y usuarios propio de un taller mecánico pequeño o mediano, no de un entorno empresarial de gran escala.

\-El sistema será accesible desde navegadores web modernos, pero no se garantiza compatibilidad con navegadores obsoletos ni con sistemas operativos antiguos.

\-La facturación digital se implementará de forma básica (generación de facturas en PDF), sin garantizar cumplimiento con todas las normativas fiscales locales.

**1.3. Definiciones, Acrónimos y Abreviaturas**

\- RF: Requerimiento Funcional

\- RNF: Requerimiento No Funcional

\- CRUD: Crear, Leer, Actualizar, Eliminar

\- UI: Interfaz de Usuario

\- DB: Base de Datos

**2\. DESCRIPCIÓN GENERAL**

**2.1. Perspectiva del Producto**

Descripción general del producto en su contexto, incluyendo sistemas con los que interactúa.

Nuestro aplicativo está diseñado para transformar la manera en que los talleres mecánicos gestionan su día a día, ofreciendo una herramienta moderna, intuitiva y completa. Desde la administración de usuarios con distintos roles (administradores, empleados y clientes), hasta el control eficiente del inventario, la programación de citas y el acceso al historial de servicios, la plataforma brinda una experiencia integral que facilita la organización y mejora la comunicación. Con esta solución, el taller podrá optimizar su productividad, ofrecer un mejor servicio a los clientes y mantener un control claro y seguro de toda su operación.

**2.2. Características del Usuario**

El aplicativo tendrá tres tipos de usuarios:

Administrador: el administrador será aquel que maneje los recursos de la empresa, usuarios, inventario, citas, etc… Este usuario tiene conocimiento del negocio mas no se espera un gran conocimiento en tecnología por parte de él.

Empleado: el empleado será aquel que realice los trabajos operativos del taller, este interactúa con la parte de citas y estado de los diagnósticos y mantenimientos. Este usuario tiene conocimiento operativo mas no se espera un gran conocimiento en tecnología por parte de él.

Cliente: el cliente será aquel que utilizará los servicios del taller, este interactúa con el agendamiento de citas y con las consultas de estado de sus procesos. De este usuario no se espera gran conocimiento de tecnología.

**2.3. Suposiciones y Dependencias**

Tecnológicos: compatibilidad con diferentes dispositivos y sistemas operativos, cambios en frameworks o librerías usadas (por ejemplo, si se desarrolla en Flutter y hay una actualización mayor), problemas de conectividad a internet en los talleres o limitaciones de hardware en los equipos donde se use.

Económicos: presupuesto limitado para infraestructura (servidores, bases de datos en la nube, licencias de software), lo cual puede restringir el alcance de ciertas funcionalidades.

Legales y normativos: cumplimiento con normativas de protección de datos personales (por ejemplo, en Colombia la Ley 1581 de Habeas Data), o requisitos de facturación electrónica en caso de integrarse con cobros.

Sociales y organizativos: resistencia al cambio por parte de los empleados del taller, falta de capacitación para usar el sistema o poca adopción inicial por parte de los clientes.

**3\. REQUERIMIENTOS ESPECÍFICOS**

**3.1. Requerimientos Funcionales**

* **Módulo de Administración**

**RF-001 — CRUD de usuarios**  
El administrador podrá crear, consultar y eliminar usuarios (clientes y mecánicos).  
**RF-002 — Gestión de vehículos**  
El administrador podrá consultar la información de los vehículos registrados por los clientes.  
**RF-003 — Gestión de citas**

El administrador podrá agendar, cancelar y reasignar citas de los clientes.  
**RF-004 — Catálogo de servicios**  
El administrador podrá crear, consultar y eliminar servicios

* **Módulo de Cliente**

**RF-005 — Registro de clientes**  
El cliente podrá registrarse en la web ingresando sus datos básicos.  
**RF-006 — Registro de vehículos**  
El cliente podrá registrar sus vehículos ingresando la información básica.  
**RF-007 — Portal del cliente**  
El cliente podrá acceder a un portal donde consultará el historial de servicios, el estado actual de su vehículo, los presupuestos generados y facturas digitales.  
**RF-008 — Gestión de citas del cliente**  
El cliente podrá agendar y cancelar sus propias citas en el sistema.  
**RF-009 — Aprobación de presupuesto**  
El sistema debe permitir que el cliente apruebe o rechace digitalmente el presupuesto generado, antes de iniciar el servicio.

* **Módulo de Citas**

**RF-010 — Asignación automática de mecánico**  
El sistema asignará un mecánico disponible en función de su especialidad y agenda laboral.  
**RF-011 — Estimación de duración de cita**  
El sistema calculará automáticamente la duración estimada del servicio con base al catálogo de servicios.

* **Módulo de Mecánico**

**RF-012 — Acceso al portal del mecánico**  
El mecánico podrá acceder a la web con sus credenciales para visualizar sus citas asignadas.  
**RF-013 — Registro fotográfico de ingreso**  
El mecánico podrá adjuntar fotografías del vehículo al recibirlo para documentar su estado inicial.  
**RF-014 — Evidencia fotográfica del proceso**  
El mecánico podrá adjuntar fotografías y documentos en las distintas etapas del servicio.  
**RF-015 — Registro de servicios realizados**  
El mecánico podrá registrar los procedimientos realizados a cada vehículo.  
**RF-016 — Gestión de flujo de orden de trabajo (OT)**  
El mecánico podrá actualizar el estado del vehículo en un flujo secuencial definido: *Recibido → Diagnóstico → Presupuesto → Aprobado/Rechazado → En proceso → Listo → Entregado*.

* **Módulo de inventario**

**RF-017 — Gestión de proveedores**  
El administrador podrá registrar, modificar y eliminar proveedores.  
**RF-018 — Gestión de repuestos**  
El administrador podrá registrar, consultar, modificar y eliminar repuestos.  
**RF-019 — Alertas de stock mínimo**  
El sistema notificará automáticamente al administrador cuando un repuesto esté en 0 o por debajo del mínimo.  
**RF-020 — Consumo automático de inventario**  
El sistema descontará automáticamente los repuestos utilizados en servicios.

* **Módulo de Pagos y Facturación**

**RF-021 — Pasarela de pagos**  
El cliente podrá realizar pagos totales en línea a través de una pasarela de pagos.  
**RF-022 — Generación de presupuestos y facturas**  
El sistema permitirá cotizar presupuestos y facturas digitales en formato PDF.

* **Módulo de Comunicación con el Cliente**

**RF-023 — Notificaciones de estado de servicio**  
El sistema enviará notificaciones automáticas al cliente en cada cambio de estado de la orden de trabajo (via correo electronico).  
**RF-024 — Chatbot informativo**  
El sistema integrará un chatbot para responder consultas frecuentes sobre servicios, precios y horarios disponibles.  
**RF-025 — Envío de recordatorios y promociones**  
El sistema enviará recordatorios y promociones vía correo electrónico según la configuración del administrador.

* **Módulo de Reportes**

**RF-026 — Reportes operativos**  
El administrador podrá generar reportes de citas, utilización de mecánicos, consumo de inventario y facturación, exportables a PDF o Excel.

**3.2. Requerimientos No Funcionales**

* **RNF-001 — Tiempo de respuesta básico**  
  El sistema debe responder a las operaciones comunes (Consultar citas, clientes, vehículos) en un tiempo menor a 3 segundos bajo una carga normal de uso.  
* **RNF-002 — Disponibilidad**  
  El sistema estará disponible el 98% del año.  
* **RNF-003 — Seguridad**  
  Los datos sensibles de los clientes (contraseñas, datos de contacto) deberán almacenarse de manera encriptada o con mecanismos básicos de seguridad provistos por la base de datos utilizada.  
* **Accesibilidad**  
  **RNF-004**   
  El sistema debe contar con una interfaz web sencilla y de fácil navegación, accesible desde un navegador común sin necesidad de instalaciones adicionales.  
  **RNF-005**   
  El sistema debe ser accesible desde navegadores en equipos de escritorio y dispositivos móviles.  
  **RNF-006**   
  La aplicación debe estar en español por defecto y ser adaptable a otros idiomas por medio de la compatibilidad con herramientas que ofrecen los navegadores para su traducción.  
* **RNF-007 — Redundancia**  
  El sistema debe contar con respaldos manuales o automáticos al menos una vez por mes para evitar pérdida de información.  
* **RNF-008 — Experiencia de usuario**  
  El sistema debe mostrar mensajes de error claros al usuario en caso de fallos comunes (Error de conexión, datos faltantes, validaciones).  
* **RNF-009 — Modularidad**  
  El sistema debe desarrollarse de forma modular (usuarios, citas, servicios, inventario, pagos, notificaciones, reportes) para permitir un mantenimiento independiente.

**3.3. Requerimientos de Datos**

El sistema manejará un conjunto de datos estructurados que permitirán la correcta gestión de clientes, vehículos, citas, servicios, inventario y facturación. Estos datos estarán organizados en una **base de datos relacional**, lo que asegura integridad, consistencia y facilidad de consulta.

### **Estructuras principales**

* **Clientes:** se almacenarán datos personales y de contacto (nombre, identificación, teléfono, correo electrónico), relacionados directamente con los vehículos registrados.

* **Vehículos:** cada cliente podrá registrar uno o varios vehículos, incluyendo datos como marca, modelo, placa, kilometraje, desperfecto y tipo (Carro, moto u otro).

* **Citas:** se gestionará la programación de servicios mediante registros que incluirán fecha, hora, tipo de servicio, estado, cliente, vehículo y mecánico asignado.

* **Mecánicos:** el sistema mantendrá información sobre el personal técnico, incluyendo nombre, especialidad y disponibilidad.

* **Inventario:** se administrará un catálogo de repuestos y herramientas con datos como nombre, categoría, descripción, stock disponible.

* **Facturación y Pagos:** se generarán registros de facturas asociados a citas o servicios, con información sobre subtotal, descuentos, total, estado de pago y método de pago utilizado.

* **Historial de Servicios:** se documentará el detalle de los trabajos realizados sobre cada vehículo, incluyendo fechas, materiales utilizados, costos y observaciones.

**Base de datos principal:** motor relacional (SQL Server, HeidiSQL), que permita manejar relaciones entre entidades como Cliente–Vehículo, Cita–Mecánico, Cita–Factura, etc.

**Archivos digitales:** documentos de facturación y comprobantes podrán almacenarse en formato PDF.

**Imágenes:** fotografías de servicios realizados se almacenarán en formato estándar (JPG/PNG) asociadas a los registros de historial.

**Respaldos:** copias automáticas de la base de datos se generarán en formato comprimido (.sql/.bak) para garantizar la seguridad de la información.

**3.4. Requerimientos de Seguridad**

**RS-1 — Autenticación de usuarios**  
El sistema debe requerir que todos los usuarios (administradores, mecánicos, clientes) ingresen con credenciales únicas (usuario y contraseña).  
**RS-2 — Control de roles y permisos**  
Habrá una jerarquía de roles donde cada rol tendrá unos permisos y funcionalidades definidos.  
**RS-3 — Sesiones seguras**  
Las sesiones de usuario deben expirar automáticamente después de un período de inactividad definido (ej. 30 minutos).  
**RS-4 — Acceso restringido a la base de datos**  
El acceso directo a la base de datos debe estar limitado al sistema y a usuarios autorizados para administración.  
**RS-5 — Protección de datos sensibles**  
Datos como información de contacto de clientes, facturas y pagos deben almacenarse de manera segura y solo accesibles a usuarios autorizados.

**3.5. Restricciones del Sistema**

\- El sistema no deberá permitir la creación de usuarios con credenciales duplicadas (correo o identificación ya registrados).

\- El sistema no deberá permitir el registro de vehículos con placas duplicadas en la base de datos.

\- El sistema no deberá permitir agendar dos citas en la misma bahía y a la misma hora.

\- El sistema no deberá permitir la asignación de un mecánico a dos citas que se solapen en horario.

\- El sistema no deberá permitir que un cliente registre una cita sin tener un vehículo asociado en el sistema.

\- El sistema no deberá permitir iniciar un servicio si el cliente no ha aprobado la cotización asociado.

\- El sistema no deberá permitir adjuntar fotografías o documentos que superen el tamaño máximo definido (10 MB).

\- El sistema no deberá permitir registrar un servicio realizado sin estar asociado a una cita válida.

\- El sistema no deberá permitir el consumo automático de inventario si el repuesto no está registrado en el sistema.

\- El sistema no deberá permitir generar facturas sin que exista un servicio registrado previamente.

\- El sistema no deberá permitir modificar o eliminar facturas ya emitidas.

\- El sistema no deberá permitir enviar notificaciones, recordatorios o promociones a clientes sin correo electrónico registrado.

\- El sistema no deberá permitir que un mecánico modifique la información de clientes o vehículos (solo el administrador tiene ese permiso).

\- El sistema no deberá permitir reportes vacíos, es decir, siempre deberán contener al menos un dato válido para exportar.

**4\. IDENTIFICACIÓN DE STAKEHOLDERS**

\-Administrador del taller

\-Empleado/Mecánico

\-Cliente con vehículo

\-Proveedores de repuestos

\-Equipo de soporte

**5\. MODELOS Y DIAGRAMAS**

**5.1. Diagrama de Casos de Uso**

[Casos de Uso CO](https://docs.google.com/document/u/0/d/1u-PXonnXUn2hik-3btfxq_IzqnlB-M7NMeNqulaIlOc/edit)

**5.2. Diagramas de Procesos o de Flujo de Datos**

[Diagramas de Casos de Uso](https://docs.google.com/document/u/0/d/1rlDxmMBwWiJkxsJjcJZhxDrC0QVBOyFr2rPLFHIInKc/edit)

**6\. APROBACIÓN DEL DOCUMENTO**

**6.1. Firmas de Aprobación**

|  Nombre Cargo Firma Juan Camilo Moreno JCM Steven Agudelo Duque Steve Cristobal Ochoa COC  |  |  |  |
| ----- | :---- | :---- | :---- |

**7\. ANEXOS**

Cualquier otro documento adicional que complemente la definición de requerimientos.

