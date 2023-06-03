<script lang="ts">
    import { __, locale, locales } from '$lib/i18n';
    import { page } from '$app/stores';
    import 'normalize.css';

    let menuShow: boolean = false;

    function toggleMenu() {
        menuShow = !menuShow;
    }
</script>

<header>
    <nav>
        <div class="nav leading">
            <div class="avatar item">
                <a href="/" class="avatar-link">
                    <img src="/assets/avatar.png" alt="My Avatar" width="50" height="50" />
                </a>
            </div>

            <div class="item name">
                <a href="/">TheBlckbird</a>
            </div>
            <div class="item">
                <a class:active={$page.route.id === '/'} href="/" title={$__('nav.home')}
                    >{$__('nav.home')}</a>
            </div>
            <div class="item">
                <a
                    class:active={$page.route.id === '/projects'}
                    href="/projects"
                    title={$__('nav.projects')}>{$__('nav.projects')}</a>
            </div>
        </div>
        <div class="nav trailing">
            <div class="github item">
                <a
                    href="http://github.com/TheBlckbird"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="My Github Profile">
                    <!-- <img src="/assets/github.svg" alt="Github Logo" width="30" height="30" /> -->
                    <svg viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg">
                        <path
                            class="github-logo-svg"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                            fill="#24292f" />
                    </svg>
                </a>
            </div>
        </div>

        <button class="hamburger" on:click={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                <path
                    d="M150-240q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T150-300h660q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T810-240H150Zm0-210q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T150-510h660q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T810-450H150Zm0-210q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T150-720h660q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T810-660H150Z" />
            </svg>
        </button>

        <div class="hamburger-menu" class:show={menuShow}>
            <ul>
                <li>
                    <a class:active={$page.route.id === '/'} href="/" title={$__('nav.home')}
                        >{$__('nav.home')}</a>
                </li>
                <li>
                    <a
                        class:active={$page.route.id === '/projects'}
                        href="/projects"
                        title={$__('nav.projects')}>{$__('nav.projects')}</a>
                </li>
                <li />
                <li>
                    <a
                        href="http://github.com/TheBlckbird"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Github">
                        <!-- <img src="/assets/github.svg" alt="Github Logo" width="30" height="30" /> -->
                        Github
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</header>

<main>
    <slot />
</main>

<style lang="scss">
    :global(:root) {
        --primary-color: hsl(183, 69%, 23%);
        --foreground-color: black;
        --hover-color: hsl(0, 0%, 30%);
        --background-color: white;
        --main-padding: 25px;
        --light-gray: hsl(0, 0%, 99%);
        --github-logo-color: hsl(213, 13%, 16%);

        @media (prefers-color-scheme: dark) {
            --primary-color: #28cfd7;
            --foreground-color: white;
            --hover-color: hsl(0, 0%, 70%);
            --background-color: hsl(0, 0%, 10%);
            --light-gray: hsl(0, 0%, 11%);
            --github-logo-color: white;
        }
    }

    :global(html, body, #app) {
        height: 100%;
    }

    :global(body) {
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        color: var(--foreground-color);
        background-color: var(--background-color);
        line-height: 1.5;
    }

    :global(a) {
        color: var(--primary-color);
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    :global(h1, h2) {
        color: var(--primary-color);
    }

    header {
        border-bottom: 2px solid var(--primary-color);
        padding: 15px 0;
        font-size: 18px;
        background-color: var(--light-gray);

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 10px;

            .hamburger-menu {
                display: none;
                position: absolute;
                top: 80px;
                left: 0;
                background-color: var(--light-gray);
                box-shadow: 0 13px 10px -10px rgba(0, 0, 0, 0.2);
                border-bottom: 2px solid var(--primary-color);
                width: 100%;

                &.show {
                    display: block;
                }

                ul {
                    list-style: none;
                    font-size: 18px;
                    display: flex;
                    flex-direction: column;

                    a {
                        color: black;
                        padding-right: 100%;

                        &.active {
                            color: var(--primary-color);
                        }
                    }
                }
            }

            .nav {
                display: flex;
                align-items: center;
                margin: 0;
                padding: 0;

                .item {
                    a {
                        color: var(--foreground-color);
                        text-decoration: none;
                        border-bottom: 0 solid var(--foreground-color);
                        transition: color 0.2s ease-in-out;
                        padding: var(--main-padding) 8px;

                        &:hover,
                        &.active {
                            color: var(--primary-color);
                        }
                    }

                    &.github {
                        height: 30px;
                        width: 30px;
                        padding-right: 18px;

                        a {
                            height: 30px;

                            .github-logo-svg {
                                fill: var(--github-logo-color);
                            }
                        }
                    }

                    &.avatar {
                        padding-right: 8px;
                        height: 50px;
                        width: 50px;

                        img {
                            border-radius: 50%;
                        }
                    }

                    &.name {
                        text-transform: uppercase;
                        font-weight: 700;
                    }
                }
            }

            .hamburger {
                height: 50px;
                width: 50px;
                margin-left: auto;
                appearance: none;
                background: none;
                border: none;
                outline: none;
                cursor: pointer;
                padding: 0 10px;
                margin-right: 10px;

                svg {
                    height: 50px;
                    width: 50px;
                }
            }
        }
    }

    main {
        padding: var(--main-padding);
        max-width: 600px;
        margin: 0 auto;
    }

    @media (max-width: 440px) {
        nav {
            .nav {
                .item {
                    display: none;

                    &.avatar,
                    &.name {
                        display: block !important;
                    }
                }
            }

            .hamburger {
                display: block;
            }
        }
    }

    @media (min-width: 441px) {
        nav .hamburger {
            display: none;
        }
    }
</style>
