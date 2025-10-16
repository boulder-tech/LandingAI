# 🚀 AI Boulder Tech - Landing Page Deploy

## Instrucciones de Deploy

### 1. Instalación de Dependencias

```bash
# Instalar dependencias del backend
npm install

# Instalar dependencias del frontend
cd client && npm install
```

### 2. Desarrollo Local

```bash
# Iniciar ambos servidores (backend + frontend)
npm run dev

# O iniciar por separado:
npm run server  # Backend en puerto 5000
npm run client  # Frontend en puerto 3000
```

### 3. Build para Producción

```bash
# Crear build optimizado del frontend
npm run build
```

### 4. Deploy en Producción

#### Opción A: Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno si es necesario
3. Vercel automáticamente detectará React y Node.js

#### Opción B: Netlify
1. Conecta tu repositorio a Netlify
2. Build command: `npm run build`
3. Publish directory: `client/build`

#### Opción C: Heroku
1. Crear app en Heroku
2. Conectar repositorio
3. Configurar buildpacks para Node.js

#### Opción D: Servidor VPS
1. Subir archivos al servidor
2. Instalar Node.js
3. Ejecutar `npm install` y `npm run build`
4. Configurar nginx o Apache para servir archivos estáticos

### 5. Variables de Entorno

Crear archivo `.env` en la raíz:
```
PORT=5000
NODE_ENV=production
```

### 6. Comandos Útiles

```bash
# Instalar todas las dependencias
npm run install-all

# Solo backend
npm run server

# Solo frontend
npm run client

# Build de producción
npm run build

# Iniciar servidor de producción
npm start
```

## Estructura del Proyecto

```
LandingAI/
├── client/                 # React frontend
│   ├── public/            # Archivos estáticos
│   ├── src/               # Código fuente React
│   │   ├── components/    # Componentes de la landing page
│   │   ├── index.css      # Estilos Tailwind
│   │   └── index.js       # Punto de entrada
│   ├── package.json       # Dependencias frontend
│   └── tailwind.config.js # Configuración Tailwind
├── server.js              # Servidor Express
├── package.json           # Dependencias backend
├── .gitignore            # Archivos a ignorar
└── README.md             # Documentación
```

## URLs de Acceso

- **Desarrollo Frontend**: http://localhost:3000
- **Desarrollo Backend**: http://localhost:5000
- **API Endpoints**: 
  - POST `/api/contact` - Formulario de contacto
  - POST `/api/diagnostic` - Solicitud de diagnóstico

## Soporte

Para cualquier problema con el deploy, contacta: hello@ai.bouldertech.fi
