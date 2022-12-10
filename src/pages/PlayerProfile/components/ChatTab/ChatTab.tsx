import React, { useState } from 'react';
import './ChatTab.less';
import { MessageList, Input, Button, MessageType } from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';
import { playersList } from 'api/v1.0/mocks';
import InfoBlock from '../InfoBlock';

const inputReference = React.createRef();
const messageListReference = React.createRef();

export interface IProps {
    playerId: number;
}

const ChatTab: React.FC<IProps> = (props) => {
    const defaultMessages: MessageType[] = [
        {
            id: 1,
            title: 'Вы',
            className: 'message',
            titleColor: 'black',
            position: 'right',
            type: 'text',
            text: 'Заходи в игру, будем тренироваться',
            date: Date.now(),
            focus: true,
            replyButton: false,
            removeButton: false,
            forwarded: false,
            notch: true,
            retracted: false,
            status: 'read',
        }, {
            id: 2,
            title: playersList.find((player) => player.id === props.playerId)?.name ?? 'Неизвестный',
            className: 'message',
            titleColor: 'black',
            position: 'left',
            type: 'text',
            text: 'Я уже в лобби, жду',
            date: Date.now(),
            focus: true,
            replyButton: false,
            removeButton: false,
            forwarded: false,
            notch: true,
            retracted: false,
            status: 'read',
        },
    ];

    const [messages, setMessages] = useState<MessageType[]>(defaultMessages);

    return (
        <div className={'ChatTab'}>
            <InfoBlock>
                <div className={'chat-body'}>
                    <MessageList
                        className={'chat'}
                        referance={messageListReference}
                        lockable={false}
                        toBottomHeight={'100%'}
                        dataSource={messages}
                        isShowChild={true}
                    />
                    <Input
                        className={'input'}
                        referance={inputReference}
                        placeholder='Введите сообщение...'
                        multiline={false}
                        maxHeight={100}
                        rightButtons={
                            <Button
                                color='white'
                                backgroundColor='black'
                                text='Отправить'
                                onClick={
                                    (_) => {
                                        const input = (inputReference.current as HTMLInputElement);
                                        setMessages([
                                            ...messages,
                                            {
                                                id: messages.length + 1,
                                                title: 'Вы',
                                                className: 'message',
                                                titleColor: 'black',
                                                position: 'right',
                                                type: 'text',
                                                text: input.value,
                                                date: Date.now(),
                                                focus: true,
                                                replyButton: false,
                                                removeButton: false,
                                                forwarded: false,
                                                notch: true,
                                                retracted: false,
                                                status: 'received',
                                            },
                                        ]);
                                        input.value = '';
                                    }
                                }
                            />
                        }
                    />
                </div>
            </InfoBlock>
        </div>
    );
};

export default ChatTab;
