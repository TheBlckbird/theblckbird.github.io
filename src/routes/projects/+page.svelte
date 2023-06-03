<script lang="ts">
    import { __ } from '$lib/i18n';
    import { each } from 'svelte/internal';

    interface Project {
        name: string;
        description: string;
        url: string;
    }

    const projects: Project[] = [
        {
            name: 'cantus',
            description:
                'Cantus is a web application to search through three German song books: Einklang, Loben & Glaubenslieder',
            url: 'https://cantus.cg-marburg.de'
        },
        {
            name: 'Laravel File Manager',
            description: 'A very basic “file manager” written in PHP & Laravel',
            url: 'https://github.com/TheBlckbird/laravel-filemanager'
        },
        {
            name: 'Fibonacci Shapes',
            description:
                'A project which visualizes the fibonacci sequence in a special way, inspired by a youtube video',
            url: 'https://theblckbird.github.io/FibonacciShapes/'
        },
        {
            name: 'Aseprite Tileset Template',
            description: 'An Aseprite Plugin to generate 16x16 minimal tileset template',
            url: 'https://github.com/TheBlckbird/aseprite-tileset-template'
        },
        {
            name: 'Swift Project Setup',
            description:
                'A Visual Studio Code Extension to create a new Swift Project with the Swift Package Manager',
            url: 'https://github.com/TheBlckbird/swiftprojectsetup'
        },
        {
            name: 'Advent Of Code',
            description: 'My solutions for the Advent of Code challenges',
            url: 'https://github.com/TheBlckbird/Advent-Of-Code'
        },
        {
            name: 'Word Thingy',
            description: 'A small Answergarden clone written in Laravel',
            url: 'https://github.com/theblckbird/word-thingy'
        }
    ];
</script>

<h1>{$__('projects.title')}</h1>

<p>{$__('projects.description')}</p>

<div class="projects">
    {#each projects as project}
        <a href={project.url} class="project" target="_blank" rel="noopener noreferrer">
            <h3 class="name">{project.name}</h3>
            <div class="description">{project.description}</div>
        </a>
    {/each}
</div>

<style lang="scss">
    .projects {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;

        .project {
            width: 300px;
            height: 200px;
            background-color: var(--light-gray);
            border-radius: 5px;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            transition: background-color 0.2s ease-in-out;
            // justify-content: center;

            border: 1px solid var(--middle-gray);
            color: var(--foreground-color);

            &:hover {
                background-color: var(--middle-gray);
                text-decoration: none;
            }
        }
    }
</style>
