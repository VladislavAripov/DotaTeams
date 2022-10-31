import { Component } from 'react';
import HeightAdjuster from 'components/HeightAdjuster';

type IProps = Record<string, unknown>;

interface IState {
    hasError: boolean;
}

class ErrorBoundary extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = { hasError: false };
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        if (!this.state.hasError) {
            return this.props.children;
        }

        return (
            <HeightAdjuster>
                <div>
                    <div>
                        Произошла ошибка
                    </div>
                    <div>
                        Попробуйте обновить страницу. Если проблема не решится,
                        пожалуйста, свяжитесь с нашей технической поддержкой:
                    </div>
                </div>
            </HeightAdjuster>
        );
    }
}

export default ErrorBoundary;
