export default function Articles(props){
    return(
        <article>
            <h2 className="main-subheading">{props.subheading}</h2>
            <p className="main-subheading-content">{props.content}</p>
        </article>
    )
}