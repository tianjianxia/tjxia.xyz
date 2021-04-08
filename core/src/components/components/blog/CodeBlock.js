import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { javascript } from 'react-syntax-highlighter/dist/esm/languages/prism';
import { java } from 'react-syntax-highlighter/dist/esm/languages/prism';
import { kotlin } from 'react-syntax-highlighter/dist/esm/languages/prism';

class CodeBlock extends PureComponent {
    static propTypes = {
        value: PropTypes.string.isRequired,
        language: PropTypes.string
    };

    static defaultProps = {
        language : null
    };

    componentWillMount(){
        SyntaxHighlighter.registerLanguage("javascript", javascript);
        SyntaxHighlighter.registerLanguage("js", javascript);
        SyntaxHighlighter.registerLanguage("java", java);
        SyntaxHighlighter.registerLanguage("kotlin", kotlin);
        SyntaxHighlighter.registerLanguage("kt", kotlin);
    }

    render() {
        const { language, value } = this.props;
        return (
            <figure className="highlight">
                <SyntaxHighlighter language={ language } style={ xonokai }>
                    {value}
                </SyntaxHighlighter>
            </figure>
        );
    }
}

export default CodeBlock;