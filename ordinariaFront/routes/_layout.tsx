import type { PageProps } from "$fresh/server.ts";

const Layout = (props: PageProps) => {
    const Component = props.Component
    return (
        <div>
            <a href="/">Home</a> <a href="/favorites">Favoritos</a>
            <br></br>
            <Component/>
        </div>
    )
}

export default Layout