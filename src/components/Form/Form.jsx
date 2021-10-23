const Form = ({submit, children}) => {
    return (
        <form onSubmit={(e) => submit(e)}>
            {children}
            <button type="submit">Button</button>
        </form>
    )
}

export default Form;
