import { useState, useEffect } from "react";
import '../App.css'

export const Homework = () => {
    const [messageList, setMessageList] = useState ([]); //хранение списка сообщений messageList, метод setMessageList
    const [value, setValue] = useState (""); // хранение пользовательского ввода с пустой строкой

    const sendMessage = (author, text) => { //добавление сообщений метод sendMessage, которое принимает автор,текст
        const newMessageList = [...messageList]; // копирование предыдущ списка сообщений
        const newMessage = { // объект с новым сообщением
            author,
            text,
        };
        newMessageList.push(newMessage); // объект с новым сообщением добавляем в скопированный список ...messageList
        setMessageList(newMessageList); // копированный список отправляем в setMessageList
    };

    const resetForm = () => {
        setValue(""); // сброс текстового сообщения в форме
    };

    const onSubmitMessage = (event) => { //отправка сообщения (добавляет сообщение в метод useState)
        event.preventDefault(); // отмена действия по умолчанию стандартной html формы
        sendMessage("user", value); // добавление сообщения (value из стейта)
        resetForm(); //  сброс формы для ввода
    };

    const onChangeMessageInput = (event) => { //метод для сохранения пользовательского ввода
        setValue(event.target.value);
    };

    useEffect(() => { // 1.реакция бота на пользовательский ввод

        if (messageList.length === 0) { // 3.проверка длинны списка, если он пустой, то ретерн (код останавливается)
            return;
        }

        const tail = messageList[messageList.length - 1]; // 4.считывается последнее сообщение из списка
        if (tail.author === "bot"){ // 5.проверка кто автор
            return; // 6.если бот, то возврат
        }

        sendMessage("bot", "hello"); // 7.добавление сообщение от бота ("автор", "сообщение")

    },[messageList]); // 2.зависит от списка сообщений (когда список сообщ меняется, вызывается ф-я внутри)

    return (
        <div className="holderPosition border">
             <ul>
                {
                    messageList.map((item, index) => ( /* берем список с данными messageList, вызываем map, передаем ф-ю которая преобразовывает данные в jsx элементы */
                        <li key={index}>
                            {item.author} - {item.text} {/*  отображение автора и текста */}
                        </li>
                    ))
                    
                }
            </ul>
            <form className="input"  onSubmit={onSubmitMessage}> {/* сюда передается функция подтверждения отправки */}
                <input 
                    onChange={onChangeMessageInput} /* ф-я изменения поля ввода */
                    placeholder="type message"
                    value={value} /* переменная стейт вэлью */
                    type="text"
                    className=""
                />
                <button>send</button> {/* по умолчанию тип submi, по-этому при нажатии вызовет метод onSubmitMessage */}
            </form>
           
        </div>
    );

};