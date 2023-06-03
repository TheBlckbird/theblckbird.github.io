interface Translations {
    [key: string]: {
        [key: string]: string;
    };
}

const translations: Translations = {
    en: {
        'nav.home': 'Home',
        'nav.projects': 'Projects',

        'home.title': 'Hey Guys!',
        'home.description':
            'I’m Louis aka TheBlckbird and I live in Germany. I do Full Stack development as a hobby and I love to create web applications with <a href="https://laravel.com" target="_blank" rel="noopener noreferrer">Laravel</a> and <a href="http://svelte.dev" target="_blank" rel="noopener noreferrer">Svelte</a>.',
        'home.fullstack_developer_explanation.title': 'What is a Full Stack Developer?',
        'home.fullstack_developer_explanation.description':
            'Somone who is able to create all parts of a web application on his own.',

        'home.what_have_i_created.title': 'What have I created so far?',
        'home.what_have_i_created.description':
            '<a href="http://cantus.cg-marburg.de" target="_blank" rel="noopener noreferrer">Cantus</a> is a web application to search through songbooks. <a href="/projects">But I have more projects.</a>',

        'projects.title': 'Projects',
        'projects.description': 'Here you can find some of my projects.'
    },
    de: {
        'nav.home': 'Startseite',
        'nav.projects': 'Projekte',

        'home.title': 'Hallo Leute!',
        'home.description':
            'Ich bin ein Fullstack Developer und ich liebe es, Webanwendungen mit <a href="https://laravel.com" target="_blank" rel="noopener noreferrer">Laravel</a> und <a href="http://svelte.dev" target="_blank" rel="noopener noreferrer">Svelte</a> zu erstellen.',

        'projects.title': 'Projekte',
        'projects.description': 'Hier findest du einige meiner Projekte.'
    }
};

export default translations;
