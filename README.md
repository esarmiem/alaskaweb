# Alaska Tech - Landing Page

## Descripción del Proyecto

Este repositorio contiene el código fuente del sitio web oficial de **Alaska Tech**, una empresa dedicada al desarrollo de software y soluciones tecnológicas. El landing page está diseñado para proporcionar información sobre nuestros servicios y facilitar el contacto con potenciales clientes a través de un formulario interactivo.

## 🚀 Tecnologías Utilizadas

El proyecto ha sido desarrollado utilizando un stack moderno y robusto:

- **Next.js**: Framework de React para aplicaciones web con renderizado del lado del servidor
- **TypeScript**: Superset de JavaScript que añade tipado estático
- **Tailwind CSS**: Framework de CSS utilitario para diseño rápido y responsivo
- **shadcn/ui**: Componentes de UI reutilizables y accesibles
- **Framer Motion**: Biblioteca para crear animaciones fluidas y profesionales
- **React Hook Form**: Manejo eficiente de formularios con React
- **Nodemailer**: Solución para el envío de correos electrónicos desde Node.js

## ✨ Características Principales

- Diseño moderno y totalmente responsivo
- Animaciones suaves y profesionales en toda la interfaz
- Formulario de contacto con validación y envío de correos electrónicos
- Optimización SEO incorporada gracias a Next.js
- Interfaz rápida y fluida con transiciones elegantes
- Gestión segura de datos de formulario

## 📧 Sistema de Contacto

El sitio cuenta con un sistema de contacto integrado que:

1. Valida la información del usuario en tiempo real
2. Proporciona feedback visual durante el proceso de envío
3. Envía notificaciones por correo electrónico al equipo de Alaska Tech
4. Confirma al usuario cuando su mensaje ha sido recibido exitosamente

## 🛠️ Instalación y Uso

### Requisitos Previos

- Node.js (versión 16.x o superior)
- npm o yarn

### Pasos de Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/alaska-tech-landing.git
cd alaska-tech-landing

# Instalar dependencias
npm install
# o
yarn install

# Configurar variables de entorno
cp .env.example .env.local
# Edita el archivo .env.local con tus credenciales de correo electrónico

# Iniciar servidor de desarrollo
npm run dev
# o
yarn dev
```

El sitio estará disponible en `http://localhost:3000`

### Configuración del Envío de Correos

Para habilitar el envío de correos, debes configurar las siguientes variables de entorno:

```
EMAIL_USER=tu_email@gmail.com
EMAIL_PASS=tu_contraseña_de_aplicación
```

> **Nota**: Si utilizas Gmail, debes generar una "contraseña de aplicación" específica por motivos de seguridad.

## 📁 Estructura del Proyecto

```
alaska-tech-landing/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.js  # API endpoint para el formulario de contacto
│   ├── components/
│   │   ├── ui/           # Componentes de shadcn/ui
│   │   └── ContactForm.tsx  # Formulario de contacto con animaciones
│   └── page.tsx          # Página principal
├── public/               # Archivos estáticos
├── styles/               # Estilos globales
├── .env.local            # Variables de entorno locales
└── package.json          # Dependencias y scripts
```

![screencapture-alaskaweb-vercel-app-2025-03-07-18_17_37](https://github.com/user-attachments/assets/851a87d2-61f9-495f-b452-5a2511d27944)
