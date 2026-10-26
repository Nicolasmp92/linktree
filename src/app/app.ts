import { Component } from '@angular/core';

interface Enlace {
  titulo: string;
  subtitulo: string;
  url: string;
  icono: string;
  destacado?: boolean;
}

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly institucion = 'Universidad de O\u2019Higgins';
  protected readonly handle = '@bibliotecasuoh';

  /** Links de campañas/eventos vigentes — se rotan según actividad */
  protected readonly actividades: Enlace[] = [
    {
      titulo: 'Primer Torneo de Juegos de Mesa',
      subtitulo: 'Inscríbete en el formulario',
      url: 'https://docs.google.com/forms/d/e/1FAIpQLSfWZemZHpPBWtD_QnULT87mfUNzvGlBeFI2Tha5seeyHtjfjQ/viewform',
      icono: 'juego',
    },
  ];

  /** Enlaces permanentes de la unidad */
  protected readonly enlaces: Enlace[] = [
    {
      titulo: 'Bibliotecas UOH',
      subtitulo: 'Sitio web de la unidad',
      url: 'https://bibliotecas.uoh.cl/',
      icono: 'biblioteca',
    },
    {
      titulo: 'Horarios y ubicación',
      subtitulo: 'Atención presencial en los campus',
      url: 'https://bibliotecas.uoh.cl/horarios-y-ubicacion/',
      icono: 'reloj',
    },
    {
      titulo: 'Repositorio académico UOH',
      subtitulo: 'Producción científica institucional',
      url: 'https://repositorio.uoh.cl/',
      icono: 'repositorio',
    },
    {
      titulo: 'Base de datos',
      subtitulo: 'Recursos electrónicos suscritos',
      url: 'https://uoh.libguides.com/az/databases',
      icono: 'database',
    },
    {
      titulo: 'Publicaciones UOH',
      subtitulo: 'Libros y documentos de la universidad',
      url: 'https://bibliotecas.uoh.cl/publicaciones-uoh/',
      icono: 'libro',
    },
    {
      titulo: 'Ciencia abierta UOH',
      subtitulo: 'Acceso abierto, datos y repositorios',
      url: 'https://ciencia-abierta.uoh.cl/',
      icono: 'ciencia',
    },
    {
      titulo: 'Software antiplagio',
      subtitulo: 'Herramienta de similitud académica',
      url: 'https://bibliotecas.uoh.cl/software-antiplagio/',
      icono: 'escudo',
    },
    {
      titulo: 'Talleres de formación',
      subtitulo: 'Formación de usuarios',
      url: 'https://uoh.libguides.com/c.php?g=1406607',
      icono: 'taller',
    },
    {
      titulo: 'Cuadernos Chilenos de Historia de la Educación',
      subtitulo: 'Revista de la unidad',
      url: 'https://historiadelaeducacion.cl/index.php/home',
      icono: 'revista',
    },
    {
      titulo: 'Eventos de las Bibliotecas',
      subtitulo: 'Actividades y difusión',
      url: 'https://bibliotecas.uoh.cl/eventos/',
      icono: 'calendario',
    },
    {
      titulo: 'Noticias de las Bibliotecas',
      subtitulo: 'Últimas novedades',
      url: 'https://bibliotecas.uoh.cl/noticias/',
      icono: 'noticias',
    },
  ];

  protected readonly contacto = {
    linkedin: 'https://www.linkedin.com/in/bibliotecas-uoh/',
    correo: 'mailto:bibliotecas@uoh.cl',
  };
}
