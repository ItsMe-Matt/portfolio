



export default function ContactUI({
    name="",
    email="",
    message="",
    onSubmitPress=()=>{}
}) {
    return <div>
        <form onSubmit={()=>console.log("hey there bud")}>
            <p>Name:</p>
            <input type="text" id="name"></input>
            <p>Email:</p>
            <input type="text" id="name"></input>
            <p>Message:</p>
            <input type="text" id="name"></input>

            <input type="submit"></input>
        </form>

    </div>
}