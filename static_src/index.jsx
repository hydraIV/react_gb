import React from 'react';
import ReactDOM from 'react-dom';

// const element = React.createElement(
//    'h1',
//    { className: "element" },
//    'Кажется, мы подключили React',
// );

let messages = ['Привет', 'Как дела?', 'Нормально'];

const handleClick = () => {
    messages.push('Отлично!');
    ReactDOM.render(
        <MessageField messages={ messages } />,
        document.getElementById('root'),
        );
};

const MessageComponent = (props) => <div>{ props.text }</div>;

const MessageField = (props) => {
   const messageElemnts = props.messages.map(message => <MessageComponent text={ message } />);
   return (
       <div>
           <h1>React Chat</h1>
           <button onClick = {handleClick}>Отправить</button>
           { messageElemnts }
       </div>
   )
};

ReactDOM.render(
    <MessageField messages={ messages } />,
    document.getElementById('root'),
    );