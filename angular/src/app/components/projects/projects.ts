import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-projects',
    imports: [],
    templateUrl: './projects.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
    projects = [
        {
            title: 'Restaurante Gourmet',
            desc: 'Landing page elegante diseñada para una experiencia gastronómica de alta gama.',
            img: 'https://img.freepik.com/vector-gratis/desarrollo-nuevas-aplicaciones-escritorio_23-2148684987.jpg?w=600&h=400&fit=crop',
            tags: ['HTML', 'CSS'],
            link: 'https://vanessa55-rgb.github.io/Actividad-1-Restaurante/'
        },
        {
            title: 'JS Dashboard',
            desc: 'Implementación de lógica avanzada en JavaScript para gestión de datos dinámicos.',
            img: 'https://img.freepik.com/vector-gratis/programadores-que-utilizan-lenguaje-programacion-javascript-computadora-gente-pequena-lenguaje-javascript-motor-javascript-concepto-desarrollo-web-js-ilustracion-aislada-violeta-vibrante-brillante_335657-986.jpg?w=600&h=400&fit=crop',
            tags: ['JS', 'Logic'],
            link: 'https://vanessa55-rgb.github.io/Entrenamiento-MOD3_SEM2/'
        },
        {
            title: 'VetPharma DB',
            desc: 'Arquitectura de base de datos relacional para clínicas veterinarias.',
            img: 'https://img.freepik.com/foto-gratis/prueba-codigo-renderizado-3d-prueba-usabilidad-funcional_107791-16607.jpg?w=600&h=400&fit=crop',
            tags: ['SQL', 'DB'],
            link: 'https://github.com/Vanessa55-rgb/VetPharma.git'
        }
    ];
}
