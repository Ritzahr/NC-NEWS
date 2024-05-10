const ErrorPage = ({status, code}) => {
    
    if (!status) {
        return (<section>
            <h1>Error 404: Path Not Found</h1>
        </section>)
    } else return (
    <section>
        <h1>Error: {status}</h1>
        <p>{code}</p>
    </section>
)

}

export default ErrorPage;