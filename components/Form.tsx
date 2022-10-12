export default function Form() {
    return (
        <form className="comment">
            <label htmlFor="name">
                <input id="name" data-testid="name" type="text" placeholder="Navn"/>
            </label>
            <label htmlFor="email">
                <input id="email" data-testid="email" type="text" placeholder="Email"/>
            </label>
            <input id="place" data-testid="place" disabled type="text"/>
            <button type="button">Send</button>
        </form>
    )
}