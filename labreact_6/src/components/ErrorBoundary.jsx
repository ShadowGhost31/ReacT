import  { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Можна також відправити інформацію про помилку на сервер
        console.error("Error caught by ErrorBoundary:", error, errorInfo);
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    render() {
        if (this.state.hasError) {
            // Можна відобразити запасний інтерфейс
            return (
                <div style={{ padding: '20px', backgroundColor: '#f8d7da', borderRadius: '5px', border: '1px solid #f5c6cb' }}>
                    <h2>Щось пішло не так.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
